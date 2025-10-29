import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Nav";

const BlogPage = () => {
  const [blogs, setBlogs] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);
  const [expanded, setExpanded] = React.useState({}); // ✅ Track expanded blog

  React.useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("https://indokonabackend-1.onrender.com/api/blogs/");
        const data = await res.json();
        setBlogs(data);
      } catch (err) {
        setError("Failed to load blogs");
      } finally {
        setLoading(false);
      }
    };
    fetchBlogs();
  }, []);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  if (loading) return <div className="text-center py-5 fs-4">Loading Blogs...</div>;
  if (error) return <div className="text-danger text-center py-5 fs-4">{error}</div>;

  return (
    <>
    <Navbar/>
    <div
      className="container my-5 py-5 px-4 rounded-4 shadow-lg"
      style={{
        background: "linear-gradient(135deg, #ffffff, #f9fbff)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(120deg, rgba(0,255,255,0.12), rgba(0,123,255,0.12), rgba(102,16,242,0.12))",
          backgroundSize: "300% 300%",
          animation: "gradientMove 14s ease infinite",
          zIndex: 0,
          borderRadius: "1rem",
        }}
      ></div>

      <div className="position-relative" style={{ zIndex: 1 }}>
        <h2 className="fw-bold mb-5 text-primary display-5 text-center">
          📚 Blog / Knowledge Hub
        </h2>

        <div className="row g-4">
          {blogs.map((blog) => {
            const isExpanded = expanded[blog.id];
            const shortText = blog.description.slice(0, 150);

            return (
              <div key={blog.id} className="col-lg-4 col-md-6">
                <div className="card rounded-4 shadow-sm h-100 border-0">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="card-img-top rounded-top-4"
                    style={{ height: "220px", objectFit: "cover" }}
                  />
                  <div className="card-body">
                    <h5 className="fw-bold mb-2 text-primary">{blog.title}</h5>

                    <p className="text-muted">
                      {isExpanded ? blog.description : `${shortText}...`}
                    </p>

                    <button
                      onClick={() => toggleReadMore(blog.id)}
                      className="btn btn-outline-primary rounded-pill w-100"
                    >
                      {isExpanded ? "Read Less" : "Read More"}
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </div>
    </>
  );
};

export default BlogPage;
