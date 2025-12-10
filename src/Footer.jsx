import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaGlobe,
  FaLinkedin,
  FaFacebook,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="pt-5 pb-4 mt-5"
      style={{ background: "#1c1c1c", color: "#f8f9fa" }}
    >
      <div className="container">
        <div className="row gy-4">
          {/* Company Info */}
          <div className="col-md-4">
            <h4 className="fw-bold mb-3">Indokona Fintech Pvt. Ltd.</h4>
            <p className="small">
              Building the next-gen fintech ecosystem with automation, AI, and
              SaaS platforms for businesses, startups, and entrepreneurs.
              <br />
              CIN : U66190HR2014PTC118000
            </p>
            <p className="small mb-1">
              <FaMapMarkerAlt className="me-2 text-warning" />
              Faridabad, Haryana, India
            </p>
            <p className="small mb-1">
              <FaPhoneAlt className="me-2 text-warning" />
              +91 96259 95155
            </p>
            <p className="small mb-0">
              <FaEnvelope className="me-2 text-warning" />
              indokonacreditbazar@gmail.com
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-md-4 text-center text-md-start">
            <h5 className="fw-bold mb-3">Quick Links</h5>
            <ul className="list-unstyled">
              {[
                ["Privacy Policy", "/privacy", "fa-shield-halved"],
                ["Terms & Conditions", "/terms", "fa-file"],
                ["Disclaimer", "/disclaimer", "fa-newspaper"],
                ["Cookie Policy", "/cookie-policy", "fa-cookie"],
                ["Support & Grievance Policy", "/support-policy", "fa-headset"],
                ["Disclosure", "/disclouser", "fa-scroll"],
                ["Blog Manager", "/admin/blogs", "fa-blog"],
                ["Useful Links", "/links", "fa-link"],
                ["Our Gallery", "/feedbacklist", "fa-image"],
                ["View Your Dream Job", "/jobs", "fa-magnifying-glass"],
              ].map(([text, path, icon]) => (
                <li key={path} className="mb-2 footer-item">
                  <Link to={path} className="footer-link">
                    <i className={`fa-solid ${icon}`}></i>
                    {text}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Rating Button */}
            <div className="text-center mt-4">
              <Link to="/feedback" className="rating-btn text-decoration-none">
                <i className="fa-solid fa-star me-2"></i>
                Rate & Review Us
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="col-md-4">
            <h5 className="fw-bold mb-3">Follow Us</h5>
            <div className="d-flex gap-3">
              <a href="https://www.indokona.com/" className="social-icon">
                <FaGlobe />
              </a>
              
              <a href="https://www.facebook.com/profile.php?id=61583635665469" className="social-icon">
                <FaFacebook />
              </a>
              <a href="https://www.instagram.com/indokonaofficial/" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <hr className="border-secondary my-4" />
        <p className="text-center small mb-0">
          © {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. | All Rights
          Reserved
        </p>
      </div>

      {/* INLINE CSS */}
      <style jsx>{`
        /* QUICK LINKS */
        .footer-item {
          padding: 4px 8px;
          border-radius: 8px;
          transition: background 0.3s ease;
        }

        .footer-item:hover {
          background: rgba(255, 193, 7, 0.08);
        }

        .footer-link {
          position: relative;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          color: #e9ecef;
          font-size: 0.95rem;
          transition: all 0.35s ease;
        }

        .footer-link i {
          color: #adb5bd;
          transition: all 0.35s ease;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: -4px;
          width: 0%;
          height: 2px;
          background: linear-gradient(90deg, #ffc107, #ff9800);
          transition: width 0.35s ease;
          border-radius: 4px;
        }

        .footer-link:hover {
          color: #ffc107;
          transform: translateX(6px);
        }

        .footer-link:hover i {
          color: #ffc107;
          transform: scale(1.15) rotate(-5deg);
        }

        .footer-link:hover::after {
          width: 100%;
        }

        /* SOCIAL ICONS */
        .social-icon {
          font-size: 1.6rem;
          color: #e9ecef;
          transition: all 0.3s ease;
        }

        .social-icon:hover {
          color: #ffc107;
          transform: scale(1.2);
        }

        /* RATING BUTTON */
        .rating-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: linear-gradient(45deg, #ffcc00, #ff9900);
          color: #1c1c1c;
          padding: 10px 22px;
          border-radius: 50px;
          font-size: 0.95rem;
          font-weight: 600;
          box-shadow: 0 0 15px rgba(255, 200, 0, 0.7);
          animation: pulseGlow 2s infinite;
          transition: all 0.3s ease;
        }

        .rating-btn:hover {
          transform: translateY(-2px) scale(1.05);
          box-shadow: 0 0 25px rgba(255, 200, 0, 0.9);
          color: #000;
        }

        @keyframes pulseGlow {
          0% {
            box-shadow: 0 0 6px rgba(255, 200, 0, 0.4);
          }
          50% {
            box-shadow: 0 0 22px rgba(255, 200, 0, 0.9);
          }
          100% {
            box-shadow: 0 0 6px rgba(255, 200, 0, 0.4);
          }
        }
      `}</style>
    </footer>
  );
}
