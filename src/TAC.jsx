import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsBuilding,
  BsShieldCheck,
  BsPersonCheck,
  BsGear,
  BsExclamationTriangle,
  BsCardChecklist,
  BsXCircle,
  BsGlobe,
  BsEnvelope,
  BsTelephone,
} from "react-icons/bs";
import { FaBalanceScale } from "react-icons/fa";
import Navbar from "./Nav";

export default function TermsAndConditions() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card shadow-lg border-0 rounded-3">
            <div className="card-body p-5">
              {/* Header */}
              <h1 className="text-center mb-3">📜 Terms & Conditions</h1>
              <p className="text-muted text-center">
                Welcome to <strong>Indokona Credit Bazar Pvt Ltd</strong>. By
                using our products and services, you agree to the following
                terms and conditions. Please read them carefully.
              </p>
              <hr className="mb-4" />

              {/* Sections */}
              <h5 className="mt-3">
                <BsBuilding className="me-2 text-primary" /> 1. Company Information
              </h5>
              <p>
                <strong>Indokona Credit Bazar Pvt Ltd</strong> is a Private
                Limited company (CIN:{" "}
                <code>U66190HR2014PTC118000</code>) registered under the Ministry
                of Corporate Affairs, Government of India.
              </p>
              <p>Our products and services include:</p>
              <ul>
                <li>🏢 Indokona Suite (WhatsApp API, Digital Marketing, SaaS)</li>
                <li>💳 Indokona Fintech (Financial services via banks & NBFCs)</li>
                <li>⚙️ Indokona SaaS (Automation, CRM, software solutions)</li>
              </ul>

              <h5 className="mt-4">
                <BsShieldCheck className="me-2 text-success" /> 2. Third Party Services
              </h5>
              <p>
                Indokona acts as a technology and service facilitator. Banking,
                loan, or insurance services are delivered only through
                third-party authorized partners (RBI, SEBI, IRDAI, etc.).
              </p>

              <h5 className="mt-4">
                <BsPersonCheck className="me-2 text-info" /> 3. User Responsibility
              </h5>
              <ul>
                <li>✅ Provide accurate details when using any Indokona service.</li>
                <li>🔑 Maintain confidentiality of login credentials.</li>
                <li>🚫 Do not misuse services for unlawful activities.</li>
              </ul>

              <h5 className="mt-4">
                <BsGear className="me-2 text-warning" /> 4. Service Usage
              </h5>
              <p>
                <strong>Indokona Suite</strong> – Communication & marketing tools
                <br />
                <strong>Indokona Fintech</strong> – Access to financial products via
                partners
                <br />
                <strong>Indokona SaaS</strong> – Business automation software
              </p>
              <p>Usage is subject to partner compliance & guidelines.</p>

              <h5 className="mt-4">
                <BsExclamationTriangle className="me-2 text-danger" /> 5. Limitation of Liability
              </h5>
              <ul>
                <li>
                  Indokona is not liable for delays, losses, or failures caused by
                  third-party services or user errors.
                </li>
                <li>
                  Financial transactions & loan approvals are the sole
                  responsibility of partner institutions.
                </li>
              </ul>

              <h5 className="mt-4">
                <BsCardChecklist className="me-2 text-secondary" /> 6. Intellectual Property
              </h5>
              <p>
                All content, branding, logos, and software are the intellectual
                property of Indokona Credit Bazar Pvt Ltd. Unauthorized use is
                prohibited.
              </p>

              <h5 className="mt-4">
                <BsXCircle className="me-2 text-dark" /> 7. Termination of Service
              </h5>
              <p>
                Indokona reserves the right to suspend or terminate services in
                case of misuse, non-compliance, or breach of these terms.
              </p>

              <h5 className="mt-4">
                <FaBalanceScale className="me-2 text-primary" /> 8. Governing Law
              </h5>
              <p>
                Governed by Indian law. Jurisdiction: Courts of Faridabad,
                Haryana.
              </p>

              <h5 className="mt-4">
                <BsGlobe className="me-2 text-success" /> 9. Contact Us
              </h5>
              <ul>
                <li>
                  <BsEnvelope className="me-2" /> <strong>Email:</strong>{" "}
                  <a href="mailto:hello@indokona.com">hello@indokona.com</a>
                </li>
                <li>
                  <BsTelephone className="me-2" /> <strong>Phone:</strong>{" "}
                  <a href="tel:+919625995155">+91 96259 95155</a>
                </li>
                <li>
                  🏢 <strong>Office:</strong> Faridabad, Haryana, India 121003
                </li>
              </ul>

              {/* Buttons */}
              <div className="d-flex gap-2 mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => window.print()}
                >
                  🖨️ Print / Save
                </button>
                <a className="btn btn-outline-secondary" href="/">
                  ⬅️ Back to Home
                </a>
              </div>

              <p className="text-muted small mt-3 text-center">
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
