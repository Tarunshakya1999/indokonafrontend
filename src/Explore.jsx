import React from "react";
import { Link } from "react-router-dom";

export default function ExploreBusinessForms() {
  const forms = [
    { name: "MSME Registration", path: "/msmeform", icon: "🏢", color: "primary" },
    { name: "FSSAI Registration", path: "/fssaiform", icon: "🍽️", color: "secondary" },
    { name: "Trademark Registration", path: "/trademark", icon: "🌍", color: "success" },
    { name: "Trade License", path: "/", icon: "📜", color: "warning" },
    { name: "Shop Act License", path: "/", icon: "🏪", color: "danger" },
    { name: "Food License", path: "/", icon: "🍽️", color: "info" }
  ];

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes gradient {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }

        .forms-page {
          min-height: 100vh;
          background: linear-gradient(-45deg, #667eea 0%, #764ba2 25%, #f093fb 50%, #4facfe 75%, #00f2fe 100%);
          background-size: 400% 400%;
          animation: gradient 15s ease infinite;
          padding: 60px 20px;
          position: relative;
          overflow: hidden;
        }

        .forms-page::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: 
            radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%),
            radial-gradient(circle at 80% 80%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
          pointer-events: none;
        }

        .forms-container {
          max-width: 1200px;
          margin: 0 auto;
          position: relative;
          z-index: 1;
        }

        .page-title {
          text-align: center;
          margin-bottom: 60px;
          animation: fadeInUp 0.8s ease;
        }

        .page-title h1 {
          font-size: 3.5rem;
          font-weight: 800;
          color: white;
          text-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
          margin-bottom: 15px;
          letter-spacing: -1px;
        }

        .page-title p {
          font-size: 1.2rem;
          color: rgba(255, 255, 255, 0.9);
          text-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
        }

        .forms-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
          padding: 0;
          list-style: none;
        }

        .form-card {
          position: relative;
          animation: fadeInUp 0.8s ease backwards;
        }

        .form-card:nth-child(1) { animation-delay: 0.1s; }
        .form-card:nth-child(2) { animation-delay: 0.2s; }
        .form-card:nth-child(3) { animation-delay: 0.3s; }
        .form-card:nth-child(4) { animation-delay: 0.4s; }
        .form-card:nth-child(5) { animation-delay: 0.5s; }
        .form-card:nth-child(6) { animation-delay: 0.6s; }

        .form-link {
          display: block;
          background: rgba(255, 255, 255, 0.95);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          padding: 40px 30px;
          text-decoration: none;
          color: inherit;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
          overflow: hidden;
          border: 2px solid transparent;
        }

        .form-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.3),
            transparent
          );
          transition: left 0.5s;
        }

        .form-link:hover::before {
          left: 100%;
        }

        .form-link:hover {
          transform: translateY(-10px) scale(1.02);
          box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
          border-color: currentColor;
        }

        .form-icon {
          font-size: 3.5rem;
          margin-bottom: 20px;
          display: inline-block;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 10px rgba(0, 0, 0, 0.1));
        }

        .form-name {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #2d3748;
        }

        .form-subtitle {
          font-size: 0.95rem;
          color: #718096;
          margin-bottom: 20px;
        }

        .form-button {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border-radius: 10px;
          font-weight: 600;
          font-size: 0.95rem;
          transition: all 0.3s ease;
          border: none;
          cursor: pointer;
        }

        .btn-primary {
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
        }

        .btn-secondary {
          background: linear-gradient(135deg, #6b7280 0%, #4b5563 100%);
          color: white;
        }

        .btn-success {
          background: linear-gradient(135deg, #10b981 0%, #059669 100%);
          color: white;
        }

        .btn-warning {
          background: linear-gradient(135deg, #f59e0b 0%, #d97706 100%);
          color: white;
        }

        .btn-danger {
          background: linear-gradient(135deg, #ef4444 0%, #dc2626 100%);
          color: white;
        }

        .btn-info {
          background: linear-gradient(135deg, #3b82f6 0%, #2563eb 100%);
          color: white;
        }

        .form-button:hover {
          transform: translateX(5px);
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
        }

        .arrow {
          transition: transform 0.3s ease;
        }

        .form-link:hover .arrow {
          transform: translateX(5px);
        }

        @media (max-width: 768px) {
          .page-title h1 {
            font-size: 2.5rem;
          }
          
          .forms-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }
          
          .form-link {
            padding: 30px 20px;
          }
        }
      `}</style>

      <div className="forms-page">
        <div className="forms-container">
          <div className="page-title">
            <h1>Business Forms</h1>
            <p>Select the form you need to get started</p>
          </div>

          <ul className="forms-grid">
            {forms.map((form, index) => (
              <li key={index} className="form-card">
                <Link to={form.path} className="form-link">
                  <div className="form-icon">{form.icon}</div>
                  <h3 className="form-name">{form.name}</h3>
                  <p className="form-subtitle">Quick and easy registration process</p>
                  <button className={`form-button btn-${form.color}`}>
                    Apply Now
                    <span className="arrow">→</span>
                  </button>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}