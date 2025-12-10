import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  Building,
  Bank,
  People,
  PatchCheck,
  SlashCircle,
  Envelope,
  Telephone,
  GeoAlt,
  Printer,
  ArrowLeftCircle,
} from "react-bootstrap-icons";
import Navbar from "./Nav";

export default function Disclosure() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4">
              <h1 className="card-title mb-3 text-center">
                <Building className="me-2 text-primary" />
                Disclosure – Indokona Credit Bazar Pvt. Ltd.
              </h1>
              <p className="text-muted text-center">
                <strong>Effective Date:</strong> 15 September 2025 <br />
                <strong>Jurisdiction:</strong> Faridabad, Haryana, India
              </p>

              <hr />

              <h5>
                <Building className="me-2 text-primary" /> 1. Company Information
              </h5>
              <ul>
                <li>
                  Indokona Credit Bazar Pvt. Ltd. is an MCA-registered private limited company
                  headquartered in Faridabad, Haryana, India.
                </li>
                <li>We operate multiple products and services, including:</li>
                <ul>
                  <li>Indokona Suite (WhatsApp API, SaaS, Digital Marketing Tools)</li>
                  <li>
                    Indokona Fintech (Aggregator Model for AEPS, DMT, BBPS, Loan Assistance,
                    Credit Cards, Insurance, etc. – through third-party tie-ups only)
                  </li>
                  <li>Indokona SaaS (Software-as-a-Service solutions for businesses)</li>
                </ul>
              </ul>

              <h5 className="mt-4">
                <Bank className="me-2 text-danger" /> 2. Regulatory Disclaimer
              </h5>
              <ul>
                <li>
                  We are not directly regulated by the Reserve Bank of India (RBI), Securities
                  and Exchange Board of India (SEBI), Insurance Regulatory and Development
                  Authority of India (IRDAI), or any other financial regulator.
                </li>
                <li>
                  Our fintech services operate only through integration and facilitation with
                  third-party partner banks, NBFCs, and service providers.
                </li>
                <li>
                  Loan, credit card, insurance, and other financial products are provided
                  exclusively by our authorized partners.
                </li>
              </ul>

              <h5 className="mt-4">
                <People className="me-2 text-success" /> 3. Third-Party Relationships
              </h5>
              <ul>
                <li>Indokona acts solely as a technology and facilitation platform.</li>
                <li>
                  We have no control over approval, eligibility, interest rates, or charges
                  for any loan, insurance, or financial product.
                </li>
                <li>
                  All liabilities related to financial products remain with the respective
                  partner institutions.
                </li>
              </ul>

              <h5 className="mt-4">
                <PatchCheck className="me-2 text-info" /> 4. Fair Use Disclosure
              </h5>
              <ul>
                <li>
                  All logos, trademarks, and product names displayed on our website and apps
                  are the property of their respective owners.
                </li>
                <li>Indokona does not claim ownership of any third-party brand.</li>
              </ul>

              <h5 className="mt-4">
                <SlashCircle className="me-2 text-dark" /> 5. Limitation of Liability
              </h5>
              <p>Indokona shall not be responsible for any:</p>
              <ul>
                <li>financial loss,</li>
                <li>service downtime,</li>
                <li>unauthorized use, or</li>
                <li>errors from third-party services.</li>
              </ul>
              <p>
                Users are expected to conduct all transactions responsibly and carefully.
              </p>

              <h5 className="mt-4">
                <Envelope className="me-2 text-primary" /> 6. Contact Information
              </h5>
              <ul>
                <li>
                  <strong>Company:</strong> Indokona Credit Bazar Pvt. Ltd.
                </li>
                <li>
                  <Envelope className="me-1" /> Email:{" "}
                  <a href="mailto:indokonaoutsourcing@gmail.com">indokonaoutsourcing@gmail.com</a>
                </li>
                <li>
                  <Telephone className="me-1" /> Phone:{" "}
                  <a href="tel:+919625995155">+91 96259 95155</a>
                </li>
                <li>
                  <GeoAlt className="me-1" /> Registered Office: Faridabad, Haryana, India
                </li>
              </ul>

              <div className="d-flex gap-2 mt-4">
                <button className="btn btn-primary" onClick={() => window.print()}>
                  <Printer className="me-1" /> Print / Save
                </button>
                <a className="btn btn-outline-secondary" href="/">
                  <ArrowLeftCircle className="me-1" /> Back to Home
                </a>
              </div>

              <p className="text-muted small mt-3 text-center">
                © 2025 Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
