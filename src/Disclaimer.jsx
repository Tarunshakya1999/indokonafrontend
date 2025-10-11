import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  ShieldExclamation,
  FileText,
  ExclamationTriangle,
  ClipboardCheck,
  Gear,
  SlashCircle,
  ExclamationCircle,
  Envelope,
  Telephone,
  GeoAlt,
  Printer,
  ArrowLeftCircle,
} from "react-bootstrap-icons";
import Navbar from "./Nav";

export default function Disclaimer() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-4">
              <h1 className="card-title mb-3 text-center">
                <ShieldExclamation className="me-2 text-danger" />
                Disclaimer
              </h1>
              <p className="text-muted">
                This website, platform, and all associated products and services
                offered under the names{" "}
                <strong>Indokona Credit Bazar Pvt. Ltd.</strong>,{" "}
                <strong>Indokona Suite</strong>, <strong>Indokona Fintech</strong>, and{" "}
                <strong>Indokona SaaS</strong> are provided for informational and service
                facilitation purposes only.
              </p>

              <hr />

              <h5>
                <FileText className="me-2 text-primary" /> 1. No Direct Lending or Insurance
              </h5>
              <ul>
                <li>Indokona Credit Bazar Pvt. Ltd. is a service aggregator and technology provider.</li>
                <li>We are not a bank, NBFC, lender, insurer, or financial institution.</li>
                <li>
                  All financial products such as loans, credit cards, and insurance are
                  offered exclusively by our authorized third-party partners including Banks,
                  NBFCs, and Insurance Companies. Final approval, rejection, or disbursement
                  is at the sole discretion of the respective partner institution.
                </li>
              </ul>

              <h5 className="mt-4">
                <ExclamationTriangle className="me-2 text-warning" /> 2. No Guarantee of Approval
              </h5>
              <ul>
                <li>
                  While we connect customers with suitable financial and technological
                  solutions, we do not guarantee loan approvals, credit limits, or insurance
                  claim settlements.
                </li>
                <li>
                  Eligibility depends solely on the policies of the respective partner
                  institutions.
                </li>
              </ul>

              <h5 className="mt-4">
                <ClipboardCheck className="me-2 text-success" /> 3. Accuracy of Information
              </h5>
              <ul>
                <li>
                  We strive to provide updated and accurate information about our services,
                  but we do not warrant that all details (such as product availability,
                  partner offers, or third-party information) are always error-free or
                  complete.
                </li>
                <li>Users are advised to verify all details before making decisions.</li>
              </ul>

              <h5 className="mt-4">
                <ShieldExclamation className="me-2 text-danger" /> 4. Third-Party Responsibility
              </h5>
              <ul>
                <li>
                  All third-party products and services listed or offered through our
                  platform are subject to the terms and conditions of the respective
                  providers.
                </li>
                <li>
                  Indokona Credit Bazar Pvt. Ltd. is not responsible for any delay, error,
                  or dispute arising from third-party actions or decisions.
                </li>
              </ul>

              <h5 className="mt-4">
                <Gear className="me-2 text-info" /> 5. Technology and Automation Services
              </h5>
              <ul>
                <li>
                  Services under Indokona Suite, Indokona Fintech, and Indokona SaaS (such as
                  WhatsApp API, SaaS software, and digital marketing tools) are provided as
                  technology solutions.
                </li>
                <li>
                  Performance may vary depending on third-party platforms (Meta, Google,
                  telecom providers, etc.), and we do not claim ownership of or liability for
                  their systems.
                </li>
              </ul>

              <h5 className="mt-4">
                <SlashCircle className="me-2 text-dark" /> 6. Limitation of Liability
              </h5>
              <ul>
                <li>
                  Indokona Credit Bazar Pvt. Ltd. and its associated brands shall not be
                  liable for any direct, indirect, incidental, or consequential damages,
                  including but not limited to financial losses, delays, service
                  interruptions, or technical issues.
                </li>
              </ul>

              <h5 className="mt-4">
                <ExclamationCircle className="me-2 text-danger" /> 7. Use at Your Own Risk
              </h5>
              <ul>
                <li>
                  By accessing or using our website, applications, or services, you
                  acknowledge and agree that you do so at your own risk, and you are solely
                  responsible for verifying product suitability, regulatory compliance, and
                  financial decisions.
                </li>
              </ul>

              <h5 className="mt-4">
                <Envelope className="me-2 text-primary" /> Contact Information
              </h5>
              <ul>
                <li>
                  <strong>Company:</strong> Indokona Credit Bazar Pvt. Ltd.
                </li>
                <li>
                  <Envelope className="me-1" /> Email:{" "}
                  <a href="mailto:support@indokona.com">support@indokona.com</a>
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
