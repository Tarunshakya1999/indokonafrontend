import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ShieldLock,
  Person,          // ✅ for User
  FileText,
  Lock,
  Globe,
  Database,
  Bell,
  Envelope,        // ✅ for Mail
  Telephone,       // ✅ for Phone
  GeoAlt,          // ✅ for MapPin
  Printer,
  ArrowLeftCircle,
} from "react-bootstrap-icons";
import Navbar from "./Nav";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4">
              <h1 className="card-title mb-3 text-center">
                <ShieldLock className="me-2 text-primary" />
                Privacy Policy
              </h1>
              <p className="text-muted text-center">
                <strong>Indokona Credit Bazar Pvt. Ltd.</strong> values your
                privacy and is committed to safeguarding your personal
                information across our business verticals — Indokona Suite,
                Indokona Fintech, and Indokona SaaS.
              </p>

              <hr />

              <h5>
                <Person className="me-2 text-primary" /> 1. Information We Collect
              </h5>
              <ul>
                <li>Personal details (Name, Email, Mobile, DOB).</li>
                <li>KYC documents (PAN, Aadhaar, Bank details).</li>
                <li>Business details (GST, licenses, addresses).</li>
                <li>
                  Transactional info for AEPS, DMT, BBPS, recharges, loans,
                  etc.
                </li>
                <li>Technical details (Device, IP, cookies).</li>
              </ul>

              <h5 className="mt-4">
                <FileText className="me-2 text-success" /> 2. How We Use
                Information
              </h5>
              <ul>
                <li>Registration, KYC, and account activation.</li>
                <li>Processing transactions & payments.</li>
                <li>Regulatory compliance (RBI, NPCI, SEBI, IRDAI).</li>
                <li>Customer support & grievance redressal.</li>
                <li>Analytics, improvements & updates.</li>
              </ul>

              <h5 className="mt-4">
                <Lock className="me-2 text-danger" /> 3. Data Sharing Policy
              </h5>
              <ul>
                <li>No selling or renting user data.</li>
                <li>Shared only with authorized financial institutions.</li>
                <li>Confidentiality enforced with tech partners.</li>
              </ul>

              <h5 className="mt-4">
                <ShieldLock className="me-2 text-warning" /> 4. Data Security
              </h5>
              <ul>
                <li>Encryption, firewalls, and secure servers.</li>
                <li>Access limited to authorized personnel.</li>
                <li>Regular audits & monitoring.</li>
              </ul>

              <h5 className="mt-4">
                <Person className="me-2 text-info" /> 5. User Responsibility
              </h5>
              <ul>
                <li>Provide accurate KYC details.</li>
                <li>Do not share login credentials.</li>
                <li>We are not liable for negligence or wrong info.</li>
              </ul>

              <h5 className="mt-4">
                <Globe className="me-2 text-primary" /> 6. Cookies Policy
              </h5>
              <ul>
                <li>We use cookies to enhance experience.</li>
                <li>Users may disable cookies, but features may break.</li>
              </ul>

              <h5 className="mt-4">
                <Database className="me-2 text-success" /> 7. Data Retention
              </h5>
              <ul>
                <li>Data retained only as long as needed.</li>
                <li>Deleted/anonymized once not required.</li>
              </ul>

              <h5 className="mt-4">
                <ShieldLock className="me-2 text-danger" /> 8. Legal Compliance
              </h5>
              <ul>
                <li>Compliant with IT Act, 2000 & Indian data laws.</li>
                <li>Data may be shared with authorities when required.</li>
              </ul>

              <h5 className="mt-4">
                <Bell className="me-2 text-warning" /> 9. Updates to Privacy
                Policy
              </h5>
              <ul>
                <li>We may update policies anytime.</li>
                <li>Major changes will be communicated via email.</li>
              </ul>

              <h5 className="mt-4">
                <Envelope className="me-2 text-primary" /> 10. Contact Information
              </h5>
              <ul>
                <li>
                  <Envelope className="me-1" /> Email:{" "}
                  <a href="mailto:indokonaoutsourcing@gmail.com">
                  indokonaoutsourcing@gmail.com
                  </a>
                </li>
                <li>
                  <Telephone className="me-1" /> Phone:{" "}
                  <a href="tel:+919625995155">+91 96259 95155</a>
                </li>
                <li>
                  <GeoAlt className="me-1" /> Registered Office: Faridabad,
                  Haryana, India 121003
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
                Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
}
