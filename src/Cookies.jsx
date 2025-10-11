import "bootstrap/dist/css/bootstrap.min.css";
import { FaCookieBite, FaLock, FaChartLine, FaCogs, FaBullseye } from "react-icons/fa";
import { MdSecurity, MdOutlineSettingsApplications, MdOutlineCampaign } from "react-icons/md";
import { IoBusinessSharp, IoMail, IoCall } from "react-icons/io5";
import { HiOfficeBuilding } from "react-icons/hi";
import Navbar from "./Nav";

export default function CookiePolicy() {
  return (
    <>
    <Navbar/>
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-12 col-lg-9">
          <div className="card shadow-sm border-0 rounded-3">
            <div className="card-body p-5">
              <h1 className="card-title mb-4 text-center">
                <FaCookieBite className="me-2 text-warning" />
                Cookie Policy
              </h1>
              <p className="text-muted text-center">
                <strong>Effective Date:</strong> 15 September 2025
              </p>

              <p>
                This Cookie Policy explains how{" "}
                <strong>
                  Indokona Credit Bazar Pvt. Ltd., Indokona Suite, Indokona
                  Fintech, and Indokona SaaS
                </strong>{" "}
                (“we,” “our,” or “us”) use cookies and similar technologies on
                our websites, applications, and digital platforms.
              </p>

              <h5 className="mt-4">
                <FaCookieBite className="me-2 text-warning" /> 1️⃣ What Are
                Cookies
              </h5>
              <p>
                Cookies are small text files placed on your device (computer,
                smartphone, or tablet) when you visit a website or use an
                application. They help us improve functionality, analyze
                performance, and provide a better user experience.
              </p>

              <h5 className="mt-4">
                <FaCogs className="me-2 text-primary" /> 2️⃣ Types of Cookies We
                Use
              </h5>
              <ul>
                <li>
                  <FaLock className="me-2 text-success" />
                  <strong>Essential Cookies:</strong> Required for proper
                  functioning (login, transactions, secure sessions).
                </li>
                <li>
                  <FaChartLine className="me-2 text-info" />
                  <strong>Performance & Analytics Cookies:</strong> Understand
                  user interactions, traffic measurement, and insights (e.g.,
                  Google Analytics, Meta Pixel).
                </li>
                <li>
                  <MdOutlineSettingsApplications className="me-2 text-secondary" />
                  <strong>Functional Cookies:</strong> Remember preferences
                  (language, region) for a personalized experience.
                </li>
                <li>
                  <FaBullseye className="me-2 text-danger" />
                  <strong>Advertising & Targeting Cookies:</strong> Deliver
                  relevant ads and campaigns based on browsing behavior. Data may
                  be shared with trusted third-party platforms.
                </li>
              </ul>

              <h5 className="mt-4">
                <MdSecurity className="me-2 text-danger" /> 3️⃣ How We Use
                Cookies
              </h5>
              <ul>
                <li>Ensure secure login and authentication</li>
                <li>Monitor usage patterns and improve services</li>
                <li>Remember user preferences and settings</li>
                <li>Measure marketing campaign effectiveness</li>
                <li>Display relevant offers and advertisements</li>
              </ul>

              <h5 className="mt-4">
                <MdOutlineCampaign className="me-2 text-warning" /> 4️⃣
                Third-Party Cookies
              </h5>
              <p>
                Some cookies may be set by third-party services (payment
                gateways, analytics tools, ad networks). These third parties
                have their own privacy and cookie policies.
              </p>

              <h5 className="mt-4">
                <FaCogs className="me-2 text-primary" /> 5️⃣ Managing Cookies
              </h5>
              <p>
                You can manage or disable cookies through your browser settings.
                However, disabling cookies may affect functionality, and some
                services may not work properly.
              </p>

              <h5 className="mt-4">
                <FaCookieBite className="me-2 text-warning" /> 6️⃣ Consent
              </h5>
              <p>
                By continuing to use our website, applications, or services, you
                consent to our use of cookies in accordance with this Cookie
                Policy.
              </p>

              <h5 className="mt-4">📌 Contact Information</h5>
              <ul>
                <li>
                  <IoBusinessSharp className="me-2 text-dark" />
                  <strong>Company:</strong> Indokona Credit Bazar Pvt. Ltd.
                </li>
                <li>
                  <IoMail className="me-2 text-primary" />
                  <strong>Email:</strong>{" "}
                  <a href="mailto:support@indokona.com">
                    support@indokona.com
                  </a>
                </li>
                <li>
                  <IoCall className="me-2 text-success" />
                  <strong>Phone:</strong>{" "}
                  <a href="tel:+919625995155">+91 96259 95155</a>
                </li>
                <li>
                  <HiOfficeBuilding className="me-2 text-secondary" />
                  <strong>Registered Office:</strong> Faridabad, Haryana, India
                </li>
              </ul>

              <div className="d-flex gap-2 mt-4">
                <button
                  className="btn btn-primary"
                  onClick={() => window.print()}
                >
                  Print / Save
                </button>
                <a className="btn btn-outline-secondary" href="/">
                  Back to Home
                </a>
              </div>

              <p className="text-muted small text-center mt-4">
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
