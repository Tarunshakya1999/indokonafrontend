import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { 
  FaMapMarkerAlt, 
  FaPhoneAlt, 
  FaEnvelope, 
  FaGlobe, 
  FaLinkedin, 
  FaFacebook, 
  FaTwitter 
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="bg-gradient-to-r from-dark to-secondary text-light pt-5 pb-4 mt-5"
      style={{ background: "#1c1c1c", color: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">Indokona Fintech Pvt. Ltd.</h4>
            <p className="small">
              Building the next-gen fintech ecosystem with automation, AI, and SaaS
              platforms for businesses, startups, and entrepreneurs. <br />
              CIN : U66190HR2014PTC118000
            </p>
            <p className="small mb-1">
              <FaMapMarkerAlt className="me-2 text-warning" /> Faridabad, Haryana, India
            </p>
            <p className="small mb-1">
              <FaPhoneAlt className="me-2 text-warning" /> +91 96259 95155
            </p>
            <p className="small mb-0">
              <FaEnvelope className="me-2 text-warning" /> support@indokona.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              <li className="mb-2">
                <Link to="/privacy" className="text-light text-decoration-none hover-link">
                  <i className="fa-solid fa-shield-halved"></i> Privacy Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/terms" className="text-light text-decoration-none hover-link">
                  <i className="fa-solid fa-file"></i> Terms & Conditions
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/disclaimer" className="text-light text-decoration-none hover-link">
                  <i className="fa-solid fa-newspaper"></i> Disclaimer
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/cookie-policy" className="text-light text-decoration-none hover-link">
                  <i className="fa-solid fa-cookie"></i> Cookie Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/support-policy" className="text-light text-decoration-none hover-link">
                  <i className="fa-solid fa-headset"></i> Support & Grievance Policy
                </Link>
              </li>
              <li className="mb-2">
                <Link to="/disclouser" className="text-light text-decoration-none hover-link">
                  <i className="fa-solid fa-scroll"></i> Disclosure
                </Link>
              </li>
            </ul>

            {/* Glowing Rating & Reviews Button */}
            <div className="text-center mt-4">
              <Link to="/feedback" className="rating-btn text-decoration-none fw-bold">
                ⭐ Rate & Review Us
              </Link>
            </div>
          </div>

          {/* Socials */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="#" className="text-light fs-4 social-icon">
                <FaGlobe />
              </a>
              <a href="#" className="text-light fs-4 social-icon">
                <FaLinkedin />
              </a>
              <a href="#" className="text-light fs-4 social-icon">
                <FaFacebook />
              </a>
              <a href="#" className="text-light fs-4 social-icon">
                <FaTwitter />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved
        </p>
      </div>

      {/* Inline CSS */}
      <style jsx>{`
        .hover-link:hover {
          color: #ffc107;
          text-decoration: underline;
        }

        .social-icon:hover {
          color: #ffc107;
          transform: scale(1.2);
          transition: all 0.3s ease;
        }

        /* Glowing Rating & Reviews Button */
        .rating-btn {
          display: inline-block;
          background: linear-gradient(45deg, #ffcc00, #ff9900);
          color: #1c1c1c;
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 0.95rem;
          box-shadow: 0 0 15px rgba(255, 200, 0, 0.7);
          transition: all 0.3s ease-in-out;
          animation: pulseGlow 2s infinite;
        }

        .rating-btn:hover {
          color: #000;
          background: linear-gradient(45deg, #ffe259, #ffa751);
          box-shadow: 0 0 25px rgba(255, 200, 0, 0.9);
          transform: translateY(-2px) scale(1.05);
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 5px rgba(255, 200, 0, 0.3);
          }
          50% {
            box-shadow: 0 0 20px rgba(255, 200, 0, 0.8);
          }
          100% {
            box-shadow: 0 0 5px rgba(255, 200, 0, 0.3);
          }
        }
      `}</style>
    </footer>
  );
}
