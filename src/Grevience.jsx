import "bootstrap/dist/css/bootstrap.min.css";
import { FaHeadset, FaUserShield, FaClock, FaBalanceScale, FaUsers, FaLock, FaFileSignature } from "react-icons/fa";
import { MdSupportAgent, MdPolicy, MdReportProblem } from "react-icons/md";
import { IoMail, IoCall, IoShieldCheckmark } from "react-icons/io5";
import { HiOfficeBuilding } from "react-icons/hi";

export default function SupportPolicy() {
  return (
    <div className="container my-5">
      <div className="card shadow-lg border-0 rounded-3">
        <div className="card-body p-5">
          {/* Grievance Policy */}
          <h1 className="card-title mb-4 text-center">
            <MdSupportAgent className="me-2 text-primary" />
            Grievance Redressal & Support Policy
          </h1>
          <p>
            At <strong>Indokona Credit Bazar Pvt. Ltd.</strong>, including its
            associated brands <em>Indokona Suite, Indokona Fintech, and Indokona SAAS</em>, 
            we are committed to offering transparent, fair, and responsive 
            customer support. This policy outlines how customers, partners, and 
            users can raise issues and how we address them.
          </p>

          <h3 className="mt-4">
            <FaBalanceScale className="me-2 text-warning" /> 1. Scope
          </h3>
          <p>
            This policy applies to all services and products offered under
            Indokona Credit Bazar Pvt. Ltd., including fintech solutions, SaaS
            platforms, digital tools, and distribution services.
          </p>

          <h3 className="mt-4">
            <FaHeadset className="me-2 text-success" /> 2. Customer Support
          </h3>
          <ul>
            <li>📞 Helpline: +91 96259 95155</li>
            <li>📧 Email: support@indokona.com</li>
            <li>🕒 Availability: Monday to Saturday, 10:00 AM – 6:00 PM (IST)</li>
          </ul>
          <p>
            Our support team is trained to handle queries related to service
            usage, onboarding, troubleshooting, and partner communication.
          </p>

          <h3 className="mt-4">
            <FaUserShield className="me-2 text-danger" /> 3. Grievance Officer
          </h3>
          <ul>
            <li>Name: Support Team</li>
            <li>Email: indokonaoutsourcing@gmail.com</li>
            <li>Phone: +91 96259 95155</li>
            <li>Registered Office: Faridabad, Haryana, India 121003</li>
          </ul>
          <p>The Grievance Officer is responsible for:</p>
          <ul>
            <li>Addressing unresolved complaints.</li>
            <li>Coordinating with third-party partners (banks, NBFCs, insurers, SaaS providers, etc.).</li>
            <li>Ensuring timely responses and resolutions within defined timelines.</li>
          </ul>

          <h3 className="mt-4">
            <FaUsers className="me-2 text-info" /> 4. Escalation Matrix
          </h3>
          <ul>
            <li><strong>Level 1:</strong> Customer Support Team – via helpline or email.</li>
            <li><strong>Level 2:</strong> Grievance Redressal Officer – if unresolved within 3–5 business days.</li>
            <li><strong>Level 3:</strong> Senior Management – escalated to the Board of Directors.</li>
          </ul>

          <h3 className="mt-4">
            <FaClock className="me-2 text-secondary" /> 5. Resolution Timelines
          </h3>
          <ul>
            <li>Acknowledgement: within 48 working hours</li>
            <li>First-level resolution: within 7 working days</li>
            <li>Final resolution (complex cases): within 30 working days</li>
          </ul>

          <h3 className="mt-4">
            <IoShieldCheckmark className="me-2 text-success" /> 6. Community Guidelines
          </h3>
          <ul>
            <li>Abusive, threatening, or fraudulent complaints will not be entertained.</li>
            <li>Users must provide complete and accurate information.</li>
            <li>Company reserves rights to restrict/terminate access for misuse.</li>
          </ul>

          <h3 className="mt-4">
            <FaFileSignature className="me-2 text-danger" /> 7. Limitation of Responsibility
          </h3>
          <p>
            While we aim to resolve all customer complaints fairly, we are not
            liable for delays or decisions made by third-party service providers.
          </p>

          <h3 className="mt-4">📌 Contact Information</h3>
          <ul>
            <li><IoMail className="me-2 text-primary" /> support@indokona.com</li>
            <li><IoCall className="me-2 text-success" /> +91 96259 95155</li>
            <li><HiOfficeBuilding className="me-2 text-secondary" /> Faridabad, Haryana, India</li>
          </ul>

          <p className="text-center mt-4">
            © 2025 Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved
          </p>

          {/* User Responsibility Policy Section */}
          <hr className="my-5" />
          <h1 className="card-title mb-4 text-center">
            <MdPolicy className="me-2 text-primary" />
            User Responsibility Policy
          </h1>
          <p>
            At <strong>Indokona Credit Bazar Pvt. Ltd.</strong>, including{" "}
            <em>Indokona Suite, Indokona Fintech, and Indokona SAAS</em>, users
            play a crucial role in ensuring safe and proper use of our platform.
            This policy outlines user obligations and expectations.
          </p>

          <h3 className="mt-4"><FaFileSignature className="me-2 text-warning" /> 1. Accurate Information</h3>
          <ul>
            <li>Users must provide true, accurate, and complete information.</li>
            <li>False/misleading information may lead to suspension or termination.</li>
          </ul>

          <h3 className="mt-4"><FaLock className="me-2 text-danger" /> 2. Account Security</h3>
          <ul>
            <li>Users must keep login credentials secure.</li>
            <li>Immediately notify support of unauthorized access.</li>
            <li>Account sharing is strictly prohibited.</li>
          </ul>

          <h3 className="mt-4"><FaUsers className="me-2 text-info" /> 3. Responsible Usage</h3>
          <ul>
            <li>Use services legally and ethically.</li>
            <li>No spamming, fraud, hacking, or misuse of third-party APIs.</li>
            <li>Comply with applicable laws and policies.</li>
          </ul>

          <h3 className="mt-4"><MdSupportAgent className="me-2 text-success" /> 4. Third-Party Services</h3>
          <p>
            Many services involve third-party partners (banks, NBFCs, insurance,
            telecom, SaaS). Users must comply with their policies. Indokona is
            not liable for their errors or delays.
          </p>

          <h3 className="mt-4"><MdReportProblem className="me-2 text-danger" /> 5. Reporting Issues</h3>
          <ul>
            <li>Report issues, fraud, or suspicious activity promptly.</li>
            <li>Support Contacts: 📞 +91 96259 95155 | 📧 support@indokona.com | WhatsApp: 8800905879</li>
          </ul>

          <h3 className="mt-4"><IoShieldCheckmark className="me-2 text-success" /> 6. Compliance & Ethical Conduct</h3>
          <ul>
            <li>Act with integrity and respect for others.</li>
            <li>Violations may result in warnings, suspension, or reporting to authorities.</li>
          </ul>

          <h3 className="mt-4"><FaFileSignature className="me-2 text-danger" /> 7. Limitation of Liability</h3>
          <p>
            Indokona Credit Bazar Pvt. Ltd. is not responsible for losses caused
            by user negligence or violations of third-party policies.
          </p>

          <h3 className="mt-4">📌 Contact Information</h3>
          <ul>
            <li><IoMail className="me-2 text-primary" /> support@indokona.com</li>
            <li><IoCall className="me-2 text-success" /> +91 96259 95155</li>
            <li><HiOfficeBuilding className="me-2 text-secondary" /> Faridabad, Haryana, India</li>
          </ul>

          <p className="text-center mt-4">
            © 2025 Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved
          </p>
        </div>
      </div>
    </div>
  );
}
