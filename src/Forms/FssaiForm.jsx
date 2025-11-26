// React + Bootstrap + Django API Integrated
// FSSAI Basic Registration – Full Production-Ready Component
// -----------------------------------------------------------
// Frontend React JSX file (FssaiForm.jsx)
// Integrates with Django REST API at /api/fssai/
// Features:
// - Multi-step wizard with progress bar
// - Auto-filter Processing Method based on Business Type
// - All fields + documents required
// - Application No + Auto-Status (Auto-Approved / Pending Review)
// - Legal-format PDF generation (jsPDF)
// - Basic in-browser Admin panel (listing + search)
// - QR display via Google Charts (no extras npm package)
// -----------------------------------------------------------

import React, { useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import jsPDF from "jspdf";

export default function FssaiForm() {
  const [step, setStep] = useState(1);

  const [formData, setFormData] = useState({
    applicant_name: "",
    business_name: "",
    address: "",
    business_type: "",
    turnover: "",
    processing: "",
    aadhar: null,
    photo: null,
    shop_docs: null,
    layout: null,
  });

  const [appNo, setAppNo] = useState("");
  const [status, setStatus] = useState("");
  const [submissions, setSubmissions] = useState([]); // admin list (local)
  const [adminSearch, setAdminSearch] = useState("");

  // -------------------------------
  // AUTO-FILTER PROCESSING LIST
  // -------------------------------
  const processingMap = {
    "Meat Shop": [
      "Fresh Chicken Sale",
      "Meat Cutting & Selling",
      "Cutting & Dressing",
      "Slaughtering",
      "Marination & Packing",
      "Cold Storage",
      "Retail Meat Sale",
      "Wholesale Meat Supply",
    ],
    "Chicken Shop": [
      "Fresh Chicken Sale",
      "Cutting & Dressing",
      "Slaughtering",
      "Cold Storage",
    ],
    "Fish Shop": ["Fish Processing", "Cutting & Dressing", "Cold Storage"],
    "Restaurant (Small)": [
      "Restaurant Food Preparation",
      "Food Handling / Storage",
      "Marination & Packing",
    ],
    "Food Stall": ["Food Handling / Storage", "Food Packaging"],
  };

  // (Reserved for future per-business doc rules)
  const requiredDocs = {
    "Meat Shop": ["aadhar", "photo", "shop_docs", "layout"],
    "Chicken Shop": ["aadhar", "photo", "shop_docs", "layout"],
    "Fish Shop": ["aadhar", "photo", "shop_docs", "layout"],
    "Restaurant (Small)": ["aadhar", "photo", "shop_docs", "layout"],
    "Food Stall": ["aadhar", "photo", "shop_docs"],
  };

  // -------------------------------
  // HANDLE TEXT/SELECT FIELDS
  // -------------------------------
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // -------------------------------
  // HANDLE FILE FIELDS
  // -------------------------------
  const handleFile = (e) => {
    const { name, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files[0] || null,
    }));
  };

  // -------------------------------
  // PDF GENERATOR (LEGAL FORMAT BASIC TEMPLATE)
  // -------------------------------
  const generatePdf = (finalAppNo, finalStatus) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("FSSAI Basic Registration Application", 14, 20);

    doc.setFontSize(11);
    if (finalAppNo) {
      doc.text(`Application No: ${finalAppNo}`, 14, 28);
    }
    if (finalStatus) {
      doc.text(`Status: ${finalStatus}`, 14, 34);
    }

    let y = 44;
    doc.setFontSize(12);

    const fieldsToPrint = [
      ["Applicant Name", formData.applicant_name],
      ["Business Name", formData.business_name],
      ["Address", formData.address],
      ["Business Type", formData.business_type],
      [
        "Annual Turnover",
        formData.turnover === "below12"
          ? "Below ₹12 Lakhs"
          : formData.turnover === "above12"
          ? "Above ₹12 Lakhs"
          : formData.turnover,
      ],
      ["Processing Method", formData.processing],
    ];

    fieldsToPrint.forEach(([label, value]) => {
      const line = `${label}: ${value || ""}`;
      doc.text(line, 14, y);
      y += 8;
    });

    doc.save("FSSAI_Application.pdf");
  };

  // -------------------------------
  // SUBMIT HANDLER
  // -------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Frontend validation: ensure ALL required fields filled
    const {
      applicant_name,
      business_name,
      address,
      business_type,
      turnover,
      processing,
      aadhar,
      photo,
      shop_docs,
      layout,
    } = formData;

    if (
      !applicant_name.trim() ||
      !business_name.trim() ||
      !address.trim() ||
      !business_type.trim() ||
      !turnover.trim() ||
      !processing.trim() ||
      !aadhar ||
      !photo ||
      !shop_docs ||
      !layout
    ) {
      alert("All fields and documents are required as per FSSAI norms.");
      return;
    }

    // Application No + simple auto-approval workflow
    const newAppNo = `FSSAI-${Date.now()}`;
    const autoStatus =
      turnover === "below12" &&
      processing &&
      processing.toLowerCase().includes("sale")
        ? "Auto-Approved"
        : "Pending Review";

    setAppNo(newAppNo);
    setStatus(autoStatus);

    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));
    fd.append("application_no", newAppNo);
    fd.append("status", autoStatus);

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/fssai/",
        fd,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log(res.data);

      // Add to local admin table
      setSubmissions((prev) => [
        {
          appNo: newAppNo,
          applicant_name,
          business_name,
          business_type,
          processing,
          status: autoStatus,
          created_at: new Date().toLocaleString(),
        },
        ...prev,
      ]);

      // Generate legal format PDF after successful submission
      generatePdf(newAppNo, autoStatus);

      alert("FSSAI Registration Submitted Successfully!");
      setStep(5);
    } catch (error) {
      console.error(error);
      alert("Error submitting form! Please try again.");
    }
  };

  const progressWidth = `${(Math.min(step, 4) / 4) * 100}%`;
  const qrUrl = appNo
    ? `https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=${encodeURIComponent(
        appNo
      )}`
    : "";

  return (
    <>
      <div
        className="container mt-4 p-4 shadow-lg bg-white rounded"
        style={{ maxWidth: "850px" }}
      >
        <h2 className="text-center mb-4 fw-bold">
          FSSAI BASIC REGISTRATION FORM
        </h2>

        {/* PROGRESS BAR */}
        <div className="progress mb-4" style={{ height: "10px" }}>
          <div
            className="progress-bar bg-success"
            role="progressbar"
            style={{ width: progressWidth }}
          ></div>
        </div>

        {/* SUCCESS SCREEN */}
        {step === 5 && (
          <div className="alert alert-success text-center p-4">
            <h3>
              <i className="fa fa-check-circle me-2" /> Application Submitted
              Successfully!
            </h3>
            {appNo && (
              <>
                <p className="mb-1">Your Application No:</p>
                <h4 className="fw-bold">{appNo}</h4>
              </>
            )}
            {status && (
              <p className="mt-2">
                Status:{" "}
                <span
                  className={
                    "badge " +
                    (status === "Auto-Approved"
                      ? "bg-success"
                      : "bg-warning text-dark")
                  }
                >
                  {status}
                </span>
              </p>
            )}
            {qrUrl && (
              <div className="mt-3">
                <img src={qrUrl} alt="Application QR" />
              </div>
            )}
            <p className="mt-3 mb-0">
              A printable PDF copy has been downloaded. Attach it with
              supporting documents for legal processing.
            </p>
          </div>
        )}

        {step !== 5 && (
          <form onSubmit={handleSubmit}>
            {/* STEP 1 – BASIC DETAILS */}
            {step === 1 && (
              <>
                <div className="mb-3">
                  <label className="form-label">Applicant Name</label>
                  <input
                    type="text"
                    name="applicant_name"
                    className="form-control"
                    value={formData.applicant_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Business Name</label>
                  <input
                    type="text"
                    className="form-control"
                    name="business_name"
                    value={formData.business_name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Full Address</label>
                  <textarea
                    name="address"
                    className="form-control"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button
                  type="button"
                  className="btn btn-primary w-100"
                  onClick={() => setStep(2)}
                >
                  Next
                </button>
              </>
            )}

            {/* STEP 2 – BUSINESS TYPE & TURNOVER */}
            {step === 2 && (
              <>
                <div className="mb-3">
                  <label>Type of Business</label>
                  <select
                    name="business_type"
                    className="form-control"
                    value={formData.business_type}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option>Meat Shop</option>
                    <option>Chicken Shop</option>
                    <option>Fish Shop</option>
                    <option>Restaurant (Small)</option>
                    <option>Food Stall</option>
                  </select>
                </div>

                <div className="mb-3">
                  <label>Annual Turnover</label>
                  <select
                    name="turnover"
                    className="form-control"
                    value={formData.turnover}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    <option value="below12">Below ₹12 Lakhs</option>
                    <option value="above12">Above ₹12 Lakhs</option>
                  </select>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => setStep(1)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setStep(3)}
                >
                  Next
                </button>
              </>
            )}

            {/* STEP 3 – DOCUMENT UPLOADS */}
            {step === 3 && (
              <>
                <div className="mb-3">
                  <label>Aadhar Card *</label>
                  <input
                    type="file"
                    name="aadhar"
                    className="form-control"
                    onChange={handleFile}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Applicant Photo *</label>
                  <input
                    type="file"
                    name="photo"
                    className="form-control"
                    onChange={handleFile}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Shop Documents *</label>
                  <input
                    type="file"
                    name="shop_docs"
                    className="form-control"
                    onChange={handleFile}
                    required
                  />
                </div>

                <div className="mb-3">
                  <label>Layout Photo *</label>
                  <input
                    type="file"
                    name="layout"
                    className="form-control"
                    onChange={handleFile}
                    required
                  />
                </div>

                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => setStep(2)}
                >
                  Back
                </button>
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={() => setStep(4)}
                >
                  Next
                </button>
              </>
            )}

            {/* STEP 4 – PROCESSING METHOD & DECLARATION */}
            {step === 4 && (
              <>
                <div className="mb-3">
                  <label>Processing Method</label>
                  <select
                    name="processing"
                    className="form-control"
                    value={formData.processing}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select</option>
                    {(processingMap[formData.business_type] || []).map((p) => (
                      <option key={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div className="form-check mb-3 bg-warning p-3 rounded">
                  <input className="form-check-input" type="checkbox" required />
                  <label className="form-check-label ms-2">
                    I hereby declare that all the information is true.
                  </label>
                </div>

                <button
                  type="button"
                  className="btn btn-secondary me-2"
                  onClick={() => setStep(3)}
                >
                  Back
                </button>
                <button type="submit" className="btn btn-success">
                  Submit Application
                </button>
              </>
            )}
          </form>
        )}
      </div>

      {/* ADMIN PANEL (LOCAL VIEW) */}
      <div className="container mt-4 mb-5">
        <div className="card shadow-sm border-0">
          <div className="card-body">
            <div className="d-flex flex-column flex-md-row justify-content-between align-items-md-center mb-3 gap-2">
              <h5 className="mb-0 fw-bold">Admin – FSSAI Applications (Browser Session)</h5>
              <input
                type="text"
                className="form-control form-control-sm"
                style={{ maxWidth: "280px" }}
                placeholder="Search by App No / Name / Business"
                value={adminSearch}
                onChange={(e) => setAdminSearch(e.target.value)}
              />
            </div>

            {submissions.length === 0 ? (
              <p className="text-muted small mb-0">
                No applications in this session yet. Submit the form above to see entries here.
              </p>
            ) : (
              <div className="table-responsive">
                <table className="table table-sm table-bordered align-middle mb-0">
                  <thead className="table-light">
                    <tr>
                      <th>Application No</th>
                      <th>Applicant</th>
                      <th>Business</th>
                      <th>Type</th>
                      <th>Processing</th>
                      <th>Status</th>
                      <th>Time</th>
                    </tr>
                  </thead>
                  <tbody>
                    {submissions
                      .filter((row) => {
                        const term = adminSearch.toLowerCase();
                        if (!term) return true;
                        return (
                          row.appNo.toLowerCase().includes(term) ||
                          row.applicant_name.toLowerCase().includes(term) ||
                          row.business_name.toLowerCase().includes(term)
                        );
                      })
                      .map((row) => (
                        <tr key={row.appNo}>
                          <td>{row.appNo}</td>
                          <td>{row.applicant_name}</td>
                          <td>{row.business_name}</td>
                          <td>{row.business_type}</td>
                          <td>{row.processing}</td>
                          <td>
                            <span
                              className={
                                "badge " +
                                (row.status === "Auto-Approved"
                                  ? "bg-success"
                                  : "bg-warning text-dark")
                              }
                            >
                              {row.status}
                            </span>
                          </td>
                          <td>{row.created_at}</td>
                        </tr>
                      ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
