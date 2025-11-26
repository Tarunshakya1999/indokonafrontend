import React, { useState } from "react";

export default function FssaiForm() {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(null);
  const [error, setError] = useState(null);

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

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleFile = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.files[0] });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateStep = () => {
    let temp = {};

    if (step === 1) {
      if (!formData.applicant_name) temp.applicant_name = "Required";
      if (!formData.business_name) temp.business_name = "Required";
      if (!formData.address) temp.address = "Required";
    }

    if (step === 2) {
      if (!formData.business_type) temp.business_type = "Required";
      if (!formData.turnover) temp.turnover = "Required";
    }

    if (step === 3) {
      if (!formData.aadhar) temp.aadhar = "Required";
      if (!formData.photo) temp.photo = "Required";
      if (!formData.shop_docs) temp.shop_docs = "Required";
      if (!formData.layout) temp.layout = "Required";
    }

    if (step === 4) {
      if (!formData.processing) temp.processing = "Required";
    }

    setErrors(temp);
    return Object.keys(temp).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setStep(step + 1);
    }
  };

  const handleSubmit = async () => {
    if (!validateStep()) return;

    setLoading(true);
    setError(null);

    const fd = new FormData();
    Object.entries(formData).forEach(([k, v]) => fd.append(k, v));

    try {
      const response = await fetch("https://indokonabackend-1.onrender.com/api/fssai/", {
        method: "POST",
        body: fd
      });

      if (!response.ok) throw new Error('Failed');
      
      setLoading(false);
      setSubmitted(true);
    } catch (err) {
      setLoading(false);
      setError("Something went wrong!");
    }
  };

  if (submitted) {
    return (
      <div style={styles.container}>
        <style>{cssStyles}</style>
        <div style={styles.successCard} className="success-animation">
          <div className="checkmark-circle">
            <div className="checkmark">✓</div>
          </div>
          <h2 style={styles.successTitle}>Application Submitted!</h2>
          <p style={styles.successText}>We will contact you soon.</p>
          <a href="/" style={styles.homeButton} className="btn-hover">Go Home</a>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div style={styles.container}>
        <style>{cssStyles}</style>
        <div style={styles.errorCard} className="error-animation">
          <div className="error-icon">✕</div>
          <h2 style={styles.errorTitle}>Submission Failed</h2>
          <p style={styles.errorText}>{error}</p>
          <button style={styles.retryButton} className="btn-hover" onClick={() => setError(null)}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={styles.container}>
      <style>{cssStyles}</style>
      <div style={styles.formCard} className="card-animation">
        <div style={styles.header}>
          <h2 style={styles.title}>FSSAI Registration</h2>
          <p style={styles.subtitle}>Step {step} of 4</p>
        </div>

        {/* Progress Steps */}
        <div style={styles.stepsContainer}>
          {[1, 2, 3, 4].map((s) => (
            <div key={s} style={styles.stepItem}>
              <div style={{
                ...styles.stepCircle,
                ...(s <= step ? styles.stepCircleActive : {})
              }} className={s === step ? "pulse" : ""}>
                {s < step ? "✓" : s}
              </div>
              {s < 4 && <div style={{
                ...styles.stepLine,
                ...(s < step ? styles.stepLineActive : {})
              }}></div>}
            </div>
          ))}
        </div>

        {/* STEP 1 */}
        {step === 1 && (
          <div className="step-content">
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Applicant Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                style={{...styles.input, ...(errors.applicant_name ? styles.inputError : {})}}
                name="applicant_name"
                value={formData.applicant_name}
                onChange={handleChange}
                className="input-focus"
              />
              {errors.applicant_name && <div style={styles.errorMsg}>{errors.applicant_name}</div>}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Business Name <span style={styles.required}>*</span>
              </label>
              <input
                type="text"
                style={{...styles.input, ...(errors.business_name ? styles.inputError : {})}}
                name="business_name"
                value={formData.business_name}
                onChange={handleChange}
                className="input-focus"
              />
              {errors.business_name && <div style={styles.errorMsg}>{errors.business_name}</div>}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Full Address <span style={styles.required}>*</span>
              </label>
              <textarea
                style={{...styles.textarea, ...(errors.address ? styles.inputError : {})}}
                name="address"
                value={formData.address}
                onChange={handleChange}
                rows="3"
                className="input-focus"
              ></textarea>
              {errors.address && <div style={styles.errorMsg}>{errors.address}</div>}
            </div>

            <button onClick={handleNext} type="button" style={styles.nextButton} className="btn-hover">
              Next →
            </button>
          </div>
        )}

        {/* STEP 2 */}
        {step === 2 && (
          <div className="step-content">
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Type of Business <span style={styles.required}>*</span>
              </label>
              <select
                name="business_type"
                value={formData.business_type}
                style={{...styles.input, ...(errors.business_type ? styles.inputError : {})}}
                onChange={handleChange}
                className="input-focus"
              >
                <option value="">Select</option>
                <option>Meat Shop</option>
                <option>Chicken Shop</option>
                <option>Fish Shop</option>
                <option>Restaurant (Small)</option>
                <option>Food Stall</option>
              </select>
              {errors.business_type && <div style={styles.errorMsg}>{errors.business_type}</div>}
            </div>

            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Annual Turnover <span style={styles.required}>*</span>
              </label>
              <select
                name="turnover"
                value={formData.turnover}
                style={{...styles.input, ...(errors.turnover ? styles.inputError : {})}}
                onChange={handleChange}
                className="input-focus"
              >
                <option value="">Select</option>
                <option value="below12">Below ₹12 Lakhs</option>
                <option value="above12">Above ₹12 Lakhs</option>
              </select>
              {errors.turnover && <div style={styles.errorMsg}>{errors.turnover}</div>}
            </div>

            <div style={styles.buttonGroup}>
              <button style={styles.backButton} onClick={() => setStep(1)} type="button" className="btn-hover">
                ← Back
              </button>
              <button style={styles.nextButton} type="button" onClick={handleNext} className="btn-hover">
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 3 */}
        {step === 3 && (
          <div className="step-content">
            {[
              { field: "aadhar", label: "Aadhar Card" },
              { field: "photo", label: "Passport Photo" },
              { field: "shop_docs", label: "Shop Documents" },
              { field: "layout", label: "Layout Plan" }
            ].map(({ field, label }) => (
              <div style={styles.inputGroup} key={field}>
                <label style={styles.label}>
                  {label} <span style={styles.required}>*</span>
                </label>
                <input
                  type="file"
                  name={field}
                  style={{...styles.fileInput, ...(errors[field] ? styles.inputError : {})}}
                  onChange={handleFile}
                  className="input-focus"
                />
                {errors[field] && <div style={styles.errorMsg}>{errors[field]}</div>}
              </div>
            ))}

            <div style={styles.buttonGroup}>
              <button style={styles.backButton} onClick={() => setStep(2)} type="button" className="btn-hover">
                ← Back
              </button>
              <button style={styles.nextButton} type="button" onClick={handleNext} className="btn-hover">
                Next →
              </button>
            </div>
          </div>
        )}

        {/* STEP 4 */}
        {step === 4 && (
          <div className="step-content">
            <div style={styles.inputGroup}>
              <label style={styles.label}>
                Processing Method <span style={styles.required}>*</span>
              </label>
              <select
                name="processing"
                value={formData.processing}
                style={{...styles.input, ...(errors.processing ? styles.inputError : {})}}
                onChange={handleChange}
                className="input-focus"
              >
                <option value="">Select</option>
                <option>Fresh Chicken Sale</option>
                <option>Meat Cutting & Selling</option>
                <option>Food Handling / Storage</option>
              </select>
              {errors.processing && <div style={styles.errorMsg}>{errors.processing}</div>}
            </div>

            <div style={styles.declarationBox}>
              <input type="checkbox" id="declaration" required style={styles.checkbox} />
              <label htmlFor="declaration" style={styles.declarationLabel}>
                I hereby declare that all the details provided are true and accurate.
              </label>
            </div>

            <div style={styles.buttonGroup}>
              <button style={styles.backButton} onClick={() => setStep(3)} type="button" className="btn-hover">
                ← Back
              </button>
              <button onClick={handleSubmit} style={styles.submitButton} disabled={loading} className="btn-hover">
                {loading && <span className="spinner-border"></span>}
                {loading ? "Submitting..." : "Submit Application"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

const styles = {
  container: {
    minHeight: "100vh",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "20px",
    fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif"
  },
  formCard: {
    background: "white",
    borderRadius: "20px",
    padding: "40px",
    maxWidth: "700px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
  },
  header: {
    textAlign: "center",
    marginBottom: "30px"
  },
  title: {
    fontSize: "32px",
    fontWeight: "700",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px"
  },
  subtitle: {
    color: "#666",
    fontSize: "16px"
  },
  stepsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
    padding: "0 20px"
  },
  stepItem: {
    display: "flex",
    alignItems: "center",
    flex: 1
  },
  stepCircle: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#e0e0e0",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "600",
    fontSize: "18px",
    color: "#666",
    transition: "all 0.3s ease"
  },
  stepCircleActive: {
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    transform: "scale(1.1)"
  },
  stepLine: {
    flex: 1,
    height: "3px",
    background: "#e0e0e0",
    margin: "0 10px",
    transition: "all 0.3s ease"
  },
  stepLineActive: {
    background: "linear-gradient(90deg, #667eea 0%, #764ba2 100%)"
  },
  inputGroup: {
    marginBottom: "25px"
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "600",
    color: "#333",
    fontSize: "15px"
  },
  required: {
    color: "#e74c3c"
  },
  input: {
    width: "100%",
    padding: "12px 16px",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "15px",
    transition: "all 0.3s ease",
    outline: "none",
    boxSizing: "border-box"
  },
  textarea: {
    width: "100%",
    padding: "12px 16px",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "15px",
    transition: "all 0.3s ease",
    outline: "none",
    resize: "vertical",
    fontFamily: "inherit",
    boxSizing: "border-box"
  },
  fileInput: {
    width: "100%",
    padding: "12px 16px",
    border: "2px solid #e0e0e0",
    borderRadius: "10px",
    fontSize: "15px",
    transition: "all 0.3s ease",
    outline: "none",
    cursor: "pointer",
    boxSizing: "border-box"
  },
  inputError: {
    borderColor: "#e74c3c"
  },
  errorMsg: {
    color: "#e74c3c",
    fontSize: "13px",
    marginTop: "5px"
  },
  buttonGroup: {
    display: "flex",
    gap: "15px",
    marginTop: "30px"
  },
  nextButton: {
    flex: 1,
    padding: "14px 30px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  backButton: {
    padding: "14px 30px",
    background: "#f0f0f0",
    color: "#333",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  },
  submitButton: {
    flex: 1,
    padding: "14px 30px",
    background: "linear-gradient(135deg, #11998e 0%, #38ef7d 100%)",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  declarationBox: {
    background: "#fff9e6",
    border: "2px solid #ffd93d",
    borderRadius: "10px",
    padding: "20px",
    display: "flex",
    alignItems: "flex-start",
    gap: "12px",
    marginTop: "20px"
  },
  checkbox: {
    width: "20px",
    height: "20px",
    cursor: "pointer",
    marginTop: "2px"
  },
  declarationLabel: {
    fontSize: "14px",
    color: "#666",
    lineHeight: "1.6",
    cursor: "pointer"
  },
  successCard: {
    background: "white",
    borderRadius: "20px",
    padding: "60px 40px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    textAlign: "center"
  },
  successTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#27ae60",
    marginBottom: "15px"
  },
  successText: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px"
  },
  homeButton: {
    display: "inline-block",
    padding: "14px 40px",
    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "white",
    textDecoration: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    transition: "all 0.3s ease"
  },
  errorCard: {
    background: "white",
    borderRadius: "20px",
    padding: "60px 40px",
    maxWidth: "500px",
    width: "100%",
    boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
    textAlign: "center"
  },
  errorTitle: {
    fontSize: "28px",
    fontWeight: "700",
    color: "#e74c3c",
    marginBottom: "15px"
  },
  errorText: {
    fontSize: "16px",
    color: "#666",
    marginBottom: "30px"
  },
  retryButton: {
    display: "inline-block",
    padding: "14px 40px",
    background: "#f39c12",
    color: "white",
    border: "none",
    borderRadius: "10px",
    fontSize: "16px",
    fontWeight: "600",
    cursor: "pointer",
    transition: "all 0.3s ease"
  }
};

const cssStyles = `
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

  @keyframes pulse {
    0%, 100% {
      transform: scale(1.1);
    }
    50% {
      transform: scale(1.2);
    }
  }

  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }

  @keyframes checkmark {
    0% {
      transform: scale(0) rotate(45deg);
    }
    50% {
      transform: scale(1.2) rotate(45deg);
    }
    100% {
      transform: scale(1) rotate(45deg);
    }
  }

  @keyframes circleGrow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .card-animation {
    animation: fadeInUp 0.6s ease-out;
  }

  .step-content {
    animation: fadeInUp 0.4s ease-out;
  }

  .pulse {
    animation: pulse 1.5s ease-in-out infinite;
  }

  .input-focus:focus {
    border-color: #667eea !important;
    box-shadow: 0 0 0 3px rgba(102, 126, 234, 0.1) !important;
  }

  .btn-hover:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0,0,0,0.15);
  }

  .btn-hover:active {
    transform: translateY(0);
  }

  .spinner-border {
    width: 16px;
    height: 16px;
    border: 3px solid rgba(255,255,255,0.3);
    border-top: 3px solid white;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
    animation: spin 0.8s linear infinite;
  }

  .success-animation {
    animation: fadeInUp 0.6s ease-out;
  }

  .checkmark-circle {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #11998e 0%, #38ef7d 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    animation: circleGrow 0.5s ease-out;
  }

  .checkmark {
    color: white;
    font-size: 50px;
    font-weight: bold;
    animation: checkmark 0.6s ease-out 0.3s both;
  }

  .error-animation {
    animation: fadeInUp 0.6s ease-out;
  }

  .error-icon {
    width: 100px;
    height: 100px;
    background: linear-gradient(135deg, #e74c3c 0%, #c0392b 100%);
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 30px;
    color: white;
    font-size: 60px;
    font-weight: bold;
    animation: circleGrow 0.5s ease-out;
  }

  select {
    cursor: pointer;
  }

  input[type="file"]::file-selector-button {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    padding: 8px 16px;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-weight: 600;
    margin-right: 10px;
    transition: all 0.3s ease;
  }

  input[type="file"]::file-selector-button:hover {
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);
  }
`;