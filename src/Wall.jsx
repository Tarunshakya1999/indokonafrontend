/* =====================
   FEED — Facebook style with Create Post Popup
   ===================== */
   function Feed() {
    const [posts, setPosts] = useState([]);
    const [success, setSuccess] = useState("");
    const [error, setError] = useState("");
  
    const [showModal, setShowModal] = useState(false);
  
    const [formData, setFormData] = useState({
      author: "",
      title: "",
      body: "",
      image: null,
      time: "",
    });
  
    const [editingId, setEditingId] = useState(null);
  
    // 🔥 Fetch posts
    useEffect(() => {
      const getPost = async () => {
        try {
          const response = await axios.get(
            "https://indokonabackend-1.onrender.com/api/mypost/"
          );
          setPosts(response.data);
        } catch (err) {
          setError("Failed to fetch posts");
        }
      };
      getPost();
    }, []);
  
    // Input change
    function handleChange(e) {
      const { name, value } = e.target;
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  
    // File
    function handleImage(e) {
      setFormData((prev) => ({ ...prev, image: e.target.files[0] }));
    }
  
    // 🔥 Add / Edit
    async function handleSubmit(e) {
      e.preventDefault();
  
      const fd = new FormData();
      fd.append("author", formData.author);
      fd.append("title", formData.title);
      fd.append("body", formData.body);
      fd.append("time", formData.time);
      if (formData.image) fd.append("image", formData.image);
  
      try {
        let response;
  
        if (editingId === null) {
          response = await axios.post(
            "https://indokonabackend-1.onrender.com/api/mypost/",
            fd,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          setPosts((prev) => [response.data, ...prev]);
          toast.success("Post added");
        } else {
          response = await axios.patch(
            `https://indokonabackend-1.onrender.com/api/mypost/${editingId}/`,
            fd,
            { headers: { "Content-Type": "multipart/form-data" } }
          );
          setPosts((ps) => ps.map((p) => (p.id === editingId ? response.data : p)));
          toast.info("Post updated");
        }
  
        setShowModal(false);
        setFormData({ author: "", title: "", body: "", image: null, time: "" });
        setEditingId(null);
      } catch {
        toast.error("Something went wrong!");
      }
    }
  
    // 🔥 Edit Button
    function loadToForm(post) {
      setEditingId(post.id);
      setFormData({
        author: post.author,
        title: post.title,
        body: post.body,
        image: null,
        time: post.time,
      });
      setShowModal(true);
    }
  
    // 🔥 Delete
    async function handleDelete(id) {
      const ok = window.confirm("Delete this post?");
      if (!ok) return;
      try {
        await axios.delete(
          `https://indokonabackend-1.onrender.com/api/mypost/${id}/`
        );
        setPosts((ps) => ps.filter((p) => p.id !== id));
        toast.success("Deleted");
      } catch {
        toast.error("Delete failed");
      }
    }
  
    return (
      <div className="container py-4">
  
        {/* ------------------ CREATE POST CLICK BOX ------------------ */}
        <div
          className="card shadow-sm border-0 mb-4"
          style={{ borderRadius: 18 }}
        >
          <div className="card-body d-flex align-items-center gap-3">
            <FaUserCircle size={45} className="text-secondary" />
  
            <div
              className="form-control rounded-pill px-4 py-2"
              style={{
                background: "#f0f2f5",
                cursor: "pointer",
                border: "1px solid #e0e0e0",
              }}
              onClick={() => setShowModal(true)}
            >
              Post something about your business…
            </div>
          </div>
        </div>
  
        {/* ------------------ POPUP MODAL ------------------ */}
        {showModal && (
          <div
            className="position-fixed top-0 start-0 w-100 h-100 d-flex justify-content-center align-items-center"
            style={{
              background: "rgba(0,0,0,0.55)",
              backdropFilter: "blur(4px)",
              zIndex: 9999,
            }}
          >
            <div
              className="bg-white shadow-lg p-4"
              style={{
                width: "95%",
                maxWidth: 500,
                borderRadius: 18,
                animation: "popup 0.25s ease",
              }}
            >
              {/* Modal Header */}
              <div className="d-flex justify-content-between align-items-center mb-3">
                <h5 className="fw-bold m-0">
                  {editingId ? "Edit Post" : "Create Post"}
                </h5>
                <button
                  className="btn btn-light"
                  onClick={() => {
                    setEditingId(null);
                    setShowModal(false);
                  }}
                >
                  ✕
                </button>
              </div>
  
              {/* Modal Body Form */}
              <form onSubmit={handleSubmit}>
                <input
                  name="author"
                  className="form-control mb-2"
                  placeholder="Business / Page name"
                  value={formData.author}
                  onChange={handleChange}
                  required
                />
  
                <input
                  name="title"
                  className="form-control mb-2"
                  placeholder="Headline (eg. New offers)"
                  value={formData.title}
                  onChange={handleChange}
                  required
                />
  
                <textarea
                  name="body"
                  className="form-control mb-2"
                  placeholder="Write something…"
                  rows={3}
                  value={formData.body}
                  onChange={handleChange}
                  required
                />
  
                <input
                  type="time"
                  name="time"
                  className="form-control mb-2"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
  
                <input
                  type="file"
                  className="form-control mb-3"
                  onChange={handleImage}
                />
  
                <button className="btn btn-primary w-100" type="submit">
                  {editingId ? "Update Post" : "Post"}
                </button>
              </form>
            </div>
          </div>
        )}
  
        {/* ------------------ POSTS LIST ------------------ */}
        <div className="row justify-content-center">
          {posts.map((p) => (
            <div key={p.id} className="col-xl-7 col-lg-8 col-md-10 mb-4">
              <div className="card shadow-sm border-0" style={{ borderRadius: 18 }}>
                <div className="card-body pb-2">
                  {/* HEADER */}
                  <div className="d-flex justify-content-between mb-2">
                    <div className="d-flex align-items-center">
                      <FaUserCircle size={40} className="text-secondary" />
                      <div className="ms-2">
                        <div className="fw-semibold">{p.author}</div>
                        <small className="text-muted">{p.time}</small>
                      </div>
                    </div>
  
                    <div className="d-flex gap-1">
                      <button
                        className="btn btn-sm btn-outline-secondary"
                        onClick={() => loadToForm(p)}
                      >
                        <FaEdit />
                      </button>
                      <button
                        className="btn btn-sm btn-outline-danger"
                        onClick={() => handleDelete(p.id)}
                      >
                        <FaTrash />
                      </button>
                    </div>
                  </div>
  
                  {/* CONTENT */}
                  <h5 className="fw-bold">{p.title}</h5>
                  <div className="text-muted">{renderWithTags(p.body)}</div>
                </div>
  
                {p.image && (
                  <img
                    src={p.image}
                    className="img-fluid"
                    style={{
                      maxHeight: 420,
                      objectFit: "cover",
                    }}
                    alt=""
                  />
                )}
  
                {/* BUTTONS */}
                <div className="px-3 pt-2 pb-3">
                  <div className="d-flex gap-2">
                    <button
                      className="btn btn-sm btn-light flex-fill"
                      onClick={() => {
                        setPosts((ps) =>
                          ps.map((x) =>
                            x.id === p.id ? { ...x, likes: (x.likes || 0) + 1 } : x
                          )
                        );
                      }}
                    >
                      <FaThumbsUp className="me-1" /> {p.likes || 0} Like
                    </button>
                    <button className="btn btn-sm btn-light flex-fill">
                      <FaCommentDots className="me-1" /> Comment
                    </button>
                    <button className="btn btn-sm btn-light flex-fill">
                      <FaShareAlt className="me-1" /> Share
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
  
          {posts.length === 0 && (
            <div className="text-center text-muted mt-4">
              No posts yet. Create your first business update!
            </div>
          )}
        </div>
  
        {/* Popup Animation */}
        <style>
          {`
            @keyframes popup {
              from { opacity: 0; transform: scale(0.94); }
              to { opacity: 1; transform: scale(1); }
            }
          `}
        </style>
      </div>
    );
  }