import React, { useState } from "react";
import axios from "axios";
import { jsPDF } from "jspdf";

export default function FssaiForm() {
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

  const [finalAppNo, setFinalAppNo] = useState("");
  const [finalStatus, setFinalStatus] = useState("");

  // -------------------------------
  // Handle Input Changes
  // -------------------------------
  const handleChange = (e) => {
    const { name, value, files } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // -------------------------------
  // PDF GENERATOR FUNCTION
  // -------------------------------
  const generatePdf = (finalAppNo, finalStatus) => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("FSSAI Basic Registration Application", 14, 20);

    doc.setFontSize(11);
    if (finalAppNo) doc.text(`Application No: ${finalAppNo}`, 14, 28);
    if (finalStatus) doc.text(`Status: ${finalStatus}`, 14, 34);

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
      doc.text(`${label}: ${value || ""}`, 14, y);
      y += 8;
    });

    y += 6;
    doc.setFontSize(13);
    doc.text("Document Download Links:", 14, y);
    y += 8;

    const fileLinks = [
      ["Aadhar Card", formData.aadhar?.name],
      ["Applicant Photo", formData.photo?.name],
      ["Shop Documents", formData.shop_docs?.name],
      ["Layout Photo", formData.layout?.name],
    ];

    fileLinks.forEach(([label, file]) => {
      if (file) {
        doc.textWithLink(`${label}: ${file}`, 14, y, {
          url: `https://indokonabackend-1.onrender.com/media/fssai_docs/${file}`,
        });
        y += 8;
      }
    });

    doc.save("FSSAI_Application.pdf");
  };

  // -------------------------------
  // Submit Function
  // -------------------------------
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    Object.keys(formData).forEach((key) => data.append(key, formData[key]));

    try {
      const res = await axios.post(
        "https://indokonabackend-1.onrender.com/api/fssai/",
        data,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      setFinalAppNo(res.data.application_no);
      setFinalStatus(res.data.status);

      generatePdf(res.data.application_no, res.data.status);
      alert("Form submitted successfully!");
    } catch (error) {
      alert("Error submitting form!");
      console.log(error);
    }
  };

  // -------------------------------
  // UI
  // -------------------------------
  return (
    <div className="container mt-4">
      <h2>FSSAI Registration Form</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="applicant_name"
          className="form-control mt-2"
          placeholder="Applicant Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="business_name"
          className="form-control mt-2"
          placeholder="Business Name"
          onChange={handleChange}
        />

        <input
          type="text"
          name="address"
          className="form-control mt-2"
          placeholder="Address"
          onChange={handleChange}
        />

        <input
          type="text"
          name="business_type"
          className="form-control mt-2"
          placeholder="Business Type"
          onChange={handleChange}
        />

        <select
          name="turnover"
          className="form-control mt-2"
          onChange={handleChange}
        >
          <option value="">Select Turnover</option>
          <option value="below12">Below ₹12 Lakhs</option>
          <option value="above12">Above ₹12 Lakhs</option>
        </select>

        <input
          type="text"
          name="processing"
          className="form-control mt-2"
          placeholder="Processing Method"
          onChange={handleChange}
        />

        <label className="mt-3">Upload Aadhar Card</label>
        <input
          type="file"
          name="aadhar"
          className="form-control"
          onChange={handleChange}
        />

        <label className="mt-3">Upload Applicant Photo</label>
        <input
          type="file"
          name="photo"
          className="form-control"
          onChange={handleChange}
        />

        <label className="mt-3">Upload Shop Documents</label>
        <input
          type="file"
          name="shop_docs"
          className="form-control"
          onChange={handleChange}
        />

        <label className="mt-3">Upload Layout Photo</label>
        <input
          type="file"
          name="layout"
          className="form-control"
          onChange={handleChange}
        />

        <button className="btn btn-success mt-4" type="submit">
          Submit & Generate PDF
        </button>
      </form>
    </div>
  );
}
