// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import { useParams, useNavigate } from "react-router-dom";

// const ShareProduct = () => {
//   const { id } = useParams();
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchProduct = async () => {
//       try {
//         const res = await axios.get(
//           `https://indokonabackend-1.onrender.com/api/share/product/${id}/`
//         );
//         setProduct(res.data);
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchProduct();
//   }, [id]);

//   if (!product) return <h2 className="text-center mt-5">Loading...</h2>;

//   const shareUrl = product.share_url;

//   return (
//     <div className="container text-center mt-4 p-3">
//       <h2>{product.title}</h2>
      
//       <img 
//         src={product.image}
//         alt={product.title}
//         style={{
//           width: "100%",
//           maxWidth: "350px",
//           borderRadius: "10px",
//           marginTop: "15px"
//         }}
//       />

//       <p className="mt-3">{product.description}</p>
//       <h4>₹ {product.discounted_price || "—"}</h4>

//       <button
//         className="btn btn-primary mt-3"
//         onClick={() => navigate(`/product/${id}`)}
//       >
//         Go to Buy Page
//       </button>

//       <button
//         className="btn btn-success mt-3"
//         onClick={() => {
//           if (navigator.share) {
//             navigator.share({
//               title: product.title,
//               text: product.description,
//               url: shareUrl,
//             });
//           } else {
//             navigator.clipboard.writeText(shareUrl);
//             alert("✅ Product link copied! Share anywhere");
//           }
//         }}
//       >
//         Share Product 📩
//       </button>

//       <p className="text-muted mt-3">Powered by Indonakona</p>
//     </div>
//   );
// };

// export default ShareProduct;
