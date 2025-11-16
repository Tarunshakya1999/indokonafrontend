import React, { useState } from 'react';
import axios from 'axios';

// ---------- Indokona Theme (inline) ----------
export const crmTheme = {
  colors: {
    pageBg: '#0f0f0f',
    sidebarBg: 'linear-gradient(180deg, #1a1a1a 0%, #2b2b2b 100%)',
    topbarGradient:
      'linear-gradient(135deg, #FFD700 0%, #FFB700 30%, #D4AF37 70%, #B8860B 100%)',
    cardBg: 'linear-gradient(145deg, #1c1c1c, #2b2b2b)',
    cardBorder: '#3a3a3a',
    darkPanelBg: '#1e1e1e',
    darkPanelBorder: '#3a3a3a',
    gold: '#FFD700',
    goldBorder: '#D4AF37',
    textLight: '#f9f9f9',
    textMuted: '#bbbbbb',
  },
  radii: {
    card: 16,
    panel: 12,
    button: 8,
    tag: 999,
  },
};

export const styles = {
  pageWrapper: {
    padding: '30px',
    boxSizing: 'border-box' as const,
  },
  premiumCard: {
    background: crmTheme.colors.cardBg,
    border: `1px solid ${crmTheme.colors.cardBorder}`,
    borderRadius: `${crmTheme.radii.card}px`,
    color: crmTheme.colors.gold,
    padding: '24px',
    boxSizing: 'border-box' as const,
    boxShadow: '0 4px 15px rgba(0,0,0,0.6)',
  },
  darkPanel: {
    background: crmTheme.colors.darkPanelBg,
    border: `1px solid ${crmTheme.colors.darkPanelBorder}`,
    borderRadius: `${crmTheme.radii.panel}px`,
    color: crmTheme.colors.textLight,
    padding: '16px',
    boxSizing: 'border-box' as const,
  },
  goldText: {
    color: crmTheme.colors.gold,
  },
};

export const SectionTitle: React.FC<{
  icon?: React.ReactNode;
  title: string;
  subtitle?: string;
}> = ({ icon, title, subtitle }) => (
  <div style={{ marginBottom: '20px' }}>
    <h2
      style={{
        margin: 0,
        fontSize: '1.6rem',
        fontWeight: 800,
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        color: crmTheme.colors.gold,
      }}
    >
      {icon && <span style={{ fontSize: '1.4rem' }}>{icon}</span>}
      {title}
    </h2>
    {subtitle && (
      <p
        style={{
          margin: '4px 0 0',
          fontSize: '0.9rem',
          color: crmTheme.colors.textMuted,
        }}
      >
        {subtitle}
      </p>
    )}
  </div>
);

// Utility to calculate age from a date
const calcAge = (date: string) => {
  if (!date) return 0;
  return Math.floor(
    (Date.now() - new Date(date).getTime()) / (365.25 * 24 * 60 * 60 * 1000)
  );
};

type TenureType = 'months' | 'years';

type EmiResult = {
  emi: number;
  totalPay: number;
  totalInterest: number;
};

const products = [
  {
    name: 'Instant Loan',
    minAmount: 50000,
    maxAmount: 5000000,
    tenure: '3 – 60 Months',
    interest: '9% – 36% PM',
    processing: '0% – 3%',
  },
  {
    name: 'Personal Loan',
    minAmount: 50000,
    maxAmount: 5000000,
    tenure: '12 – 60 Months',
    interest: '10% – 24% PA',
    processing: '1% – 3%',
  },
  {
    name: 'Business Loan',
    minAmount: 100000,
    maxAmount: 20000000,
    tenure: '12 – 48 Months',
    interest: '12% – 28% PA',
    processing: '1% – 4%',
  },
  {
    name: 'Home Loan',
    minAmount: 500000,
    maxAmount: 20000000,
    tenure: '5 – 30 Years',
    interest: '8.5% – 10% PA',
    processing: '0.5% – 2%',
  },
  {
    name: 'Loan Against Property',
    minAmount: 200000,
    maxAmount: 50000000,
    tenure: '5 – 15 Years',
    interest: '9% – 15% PA',
    processing: '1% – 2%',
  },
  {
    name: 'Education Loan',
    minAmount: 50000,
    maxAmount: 3000000,
    tenure: '1 – 7 Years',
    interest: '8% – 12% PA',
    processing: '0% – 2%',
  },
  {
    name: 'Shop Loan',
    minAmount: 100000,
    maxAmount: 5000000,
    tenure: '12 – 48 Months',
    interest: '12% – 24% PA',
    processing: '1% – 3%',
  },
  {
    name: 'Tractor Loan',
    minAmount: 150000,
    maxAmount: 1500000,
    tenure: '12 – 60 Months',
    interest: '9% – 18% PA',
    processing: '1% – 3%',
  },
  {
    name: 'New Car Loan',
    minAmount: 100000,
    maxAmount: 5000000,
    tenure: '12 – 84 Months',
    interest: '8% – 12% PA',
    processing: '0.5% – 2%',
  },
  {
    name: 'Used Car Loan',
    minAmount: 50000,
    maxAmount: 2000000,
    tenure: '12 – 60 Months',
    interest: '10% – 18% PA',
    processing: '1% – 3%',
  },
  {
    name: 'Gold Loan',
    minAmount: 10000,
    maxAmount: 5000000,
    tenure: '3 – 36 Months',
    interest: '7% – 18% PA',
    processing: '0% – 2%',
  },
  {
    name: 'Working Capital Loan',
    minAmount: 50000,
    maxAmount: 50000000,
    tenure: '12 – 48 Months',
    interest: '12% – 24% PA',
    processing: '1% – 3%',
  },
];

export default function LoanCRMModulePreview() {
  // UI States
  const [activeProduct, setActiveProduct] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const [employmentType, setEmploymentType] = useState('');

  // EMI inputs
  const [loanAmount, setLoanAmount] = useState('');
  const [interestRate, setInterestRate] = useState('');
  const [tenure, setTenure] = useState('');
  const [tenureType, setTenureType] = useState<TenureType>('months');

  // Customer info
  const [fullName, setFullName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [mobile, setMobile] = useState('');
  const [customerDob, setCustomerDob] = useState('');
  const [customerAge, setCustomerAge] = useState('');
  const [spouseDob, setSpouseDob] = useState('');
  const [spouseAge, setSpouseAge] = useState('');
  const [panNumber, setPanNumber] = useState('');
  const [aadhaarNumber, setAadhaarNumber] = useState('');

  // OTP
  const [otp, setOtp] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  // Status
  const [submitting, setSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  // Advanced KYC states
  const [panVerified, setPanVerified] = useState(false);
  const [panVerifying, setPanVerifying] = useState(false);
  const [panError, setPanError] = useState('');
  const [aadhaarError, setAadhaarError] = useState('');
  const [ocrLoading, setOcrLoading] = useState(false);
  const [ocrMessage, setOcrMessage] = useState('');
  const [showPanPopup, setShowPanPopup] = useState(false);

  const digitOnly = (e: React.FormEvent<HTMLInputElement>, maxLen: number) => {
    e.currentTarget.value = e.currentTarget.value
      .replace(/[^0-9]/g, '')
      .slice(0, maxLen);
  };

  // EMI Calculator
  const calculateEMI = (): EmiResult | null => {
    if (!loanAmount || !interestRate || !tenure) return null;
    const principal = Number(loanAmount);
    const r = Number(interestRate) / 12 / 100;
    const months = tenureType === 'years' ? Number(tenure) * 12 : Number(tenure);
    if (!principal || !r || !months) return null;

    const emi =
      (principal * r * Math.pow(1 + r, months)) /
      (Math.pow(1 + r, months) - 1);
    const totalPay = emi * months;
    const totalInterest = totalPay - principal;
    return {
      emi: Math.round(emi),
      totalPay: Math.round(totalPay),
      totalInterest: Math.round(totalInterest),
    };
  };

  const emiResult = calculateEMI();
  const principalAmount = emiResult ? Number(loanAmount) || 0 : 0;
  const interestAmount = emiResult?.totalInterest ?? 0;
  const totalBreakdown = emiResult ? principalAmount + interestAmount : 0;
  const principalPct = totalBreakdown
    ? Math.round((principalAmount / totalBreakdown) * 100)
    : 0;
  const interestPct = totalBreakdown ? 100 - principalPct : 0;

  const bankEmis = emiResult
    ? [
        { name: 'HDFC Bank', emi: emiResult.emi + 120 },
        { name: 'ICICI Bank', emi: emiResult.emi + 180 },
        { name: 'Axis Bank', emi: emiResult.emi + 90 },
      ]
    : [];

  const openForm = () => {
    setShowForm(true);
    setSuccessMessage('');
    setErrorMessage('');
  };

  const closeForm = () => setShowForm(false);

  const handleSendOtp = async () => {
    try {
      setErrorMessage('');
      setSuccessMessage('');
      if (mobile.length !== 10) {
        setErrorMessage(
          'Please enter a valid 10-digit mobile number before sending OTP.'
        );
        return;
      }
      await axios.post('/api/send-otp/', { mobile });
      setOtpSent(true);
      setSuccessMessage('OTP sent to your mobile number.');
    } catch (err) {
      setErrorMessage('Failed to send OTP. Please try again.');
    }
  };

  const handleVerifyOtp = async () => {
    try {
      setErrorMessage('');
      setSuccessMessage('');
      if (!otp || otp.length < 4) {
        setErrorMessage('Please enter the OTP received on your mobile.');
        return;
      }
      await axios.post('/api/verify-otp/', { mobile, otp });
      setOtpVerified(true);
      setSuccessMessage('Mobile number verified successfully.');
    } catch (err) {
      setOtpVerified(false);
      setErrorMessage('Invalid OTP. Please try again.');
    }
  };

  const handleVerifyPan = async () => {
    setPanError('');
    setSuccessMessage('');
    if (!panNumber || panNumber.length !== 10) {
      setPanError('Please enter a valid 10-character PAN before verifying.');
      return;
    }
    try {
      setPanVerifying(true);
      const res = await axios.post('/api/verify-pan/', { pan_number: panNumber });
      const data = res.data || {};
      if (data.valid) {
        setPanVerified(true);
        // Auto-fill from PAN
        if (data.full_name) setFullName(data.full_name);
        if (data.father_name) setFatherName(data.father_name);
        if (data.dob) {
          setCustomerDob(data.dob);
          const age = calcAge(data.dob);
          setCustomerAge(age ? age.toString() : '');
        }
        setSuccessMessage('PAN verified successfully.');
        // Show popup for 5 seconds
        setShowPanPopup(true);
        setTimeout(() => setShowPanPopup(false), 5000);
      } else {
        setPanVerified(false);
        setPanError('PAN could not be verified. Please check details.');
      }
    } catch (err) {
      setPanVerified(false);
      setPanError('Error verifying PAN. Please try again.');
    } finally {
      setPanVerifying(false);
    }
  };

  const handleAadhaarBlur = () => {
    setAadhaarError('');
    if (!aadhaarNumber) return;
    if (aadhaarNumber.length !== 12) {
      setAadhaarError('Aadhaar must be 12 digits.');
      return;
    }
    if (/^([0-9])\1{11}$/.test(aadhaarNumber)) {
      setAadhaarError('Aadhaar number looks invalid. Please recheck.');
    }
  };

  const handleOcrUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setOcrMessage('');
    setErrorMessage('');
    setOcrLoading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);
      const res = await axios.post('/api/ocr-id/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      const data = res.data || {};
      if (data.pan_number) {
        setPanNumber(String(data.pan_number).toUpperCase());
      }
      if (data.aadhaar_number) {
        setAadhaarNumber(String(data.aadhaar_number));
      }
      setOcrMessage('Details fetched from document. Please verify and submit.');
    } catch (err) {
      setErrorMessage('Unable to read details from document. Please enter manually.');
    } finally {
      setOcrLoading(false);
      e.target.value = '';
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    setSuccessMessage('');
    setErrorMessage('');

    if (!otpVerified) {
      setErrorMessage('Please verify your mobile number with OTP before submitting.');
      setSubmitting(false);
      return;
    }

    try {
      const form = e.currentTarget;
      const formData = new FormData(form);
      formData.append('product', activeProduct || '');
      formData.append('employment_type', employmentType);

      await axios.post('/api/loan-leads/', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setSuccessMessage(
        'Application submitted successfully. You will receive WhatsApp / Email updates shortly.'
      );
    } catch (err) {
      setErrorMessage('Something went wrong while submitting the form. Please try again.');
    } finally {
      setSubmitting(false);
    }
  };

  const currentProduct = activeProduct
    ? products.find((p) => p.name === activeProduct)
    : null;

  const maskedAadhaar = aadhaarNumber
    ? `XXXX-XXXX-${aadhaarNumber.slice(-4)}`
    : '';

  return (
    <>
      {/* PAN Auto-fill Toast */}
      {showPanPopup && (
        <div
          style={{
            position: 'fixed',
            top: 20,
            right: 20,
            zIndex: 9999,
            background: 'rgba(0,0,0,0.9)',
            padding: '12px 18px',
            borderRadius: 10,
            border: '1px solid #22c55e',
            color: '#bbf7d0',
            fontSize: 13,
            boxShadow: '0 0 15px rgba(34,197,94,0.5)',
          }}
        >
          PAN details auto-filled successfully ✅
        </div>
      )}

      <style>{`
        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(24px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <div
        style={{
          ...styles.pageWrapper,
          background: crmTheme.colors.pageBg,
          color: crmTheme.colors.textLight,
        }}
      >
        <SectionTitle
          icon="💳"
          title="My Loan CRM Module"
          subtitle="Indokona premium loan origination & EMI engine"
        />

        {/* Product Cards */}
        <div style={{ ...styles.darkPanel, marginBottom: 20 }}>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
            {products.map((p) => (
              <button
                key={p.name}
                type="button"
                onClick={() => setActiveProduct(p.name)}
                style={{
                  ...styles.premiumCard,
                  padding: 16,
                  borderRadius: crmTheme.radii.card,
                  border: `1px solid ${
                    activeProduct === p.name
                      ? crmTheme.colors.goldBorder
                      : crmTheme.colors.cardBorder
                  }`,
                  boxShadow:
                    activeProduct === p.name
                      ? '0 0 25px rgba(255,215,0,0.35)'
                      : '0 4px 15px rgba(0,0,0,0.6)',
                  cursor: 'pointer',
                }}
                className="flex flex-col items-center gap-3"
              >
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: '50%',
                    background:
                      'radial-gradient(circle at 30% 0%, #fff7c2, #8b6b00)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: 24,
                  }}
                >
                  {p.name.includes('Car') && '🚗'}
                  {p.name.includes('Home') && '🏠'}
                  {p.name.includes('Business') && '🏢'}
                  {p.name.includes('Personal') && '👤'}
                  {p.name.includes('Instant') && '⚡'}
                  {p.name.includes('Education') && '🎓'}
                  {p.name.includes('Property') && '🏡'}
                  {p.name.includes('Tractor') && '🚜'}
                  {p.name.includes('Shop') && '🏪'}
                  {p.name.includes('Gold') && '🪙'}
                  {p.name.includes('Working Capital') && '💼'}
                </div>
                <h3
                  style={{
                    margin: 0,
                    fontSize: 13,
                    fontWeight: 600,
                    color: crmTheme.colors.textLight,
                    textAlign: 'center',
                  }}
                >
                  {p.name}
                </h3>
              </button>
            ))}
          </div>
        </div>

        {/* Product Details */}
        {currentProduct && (
          <div style={{ ...styles.premiumCard, marginBottom: 20 }}>
            <h3
              style={{
                marginTop: 0,
                marginBottom: 16,
                fontSize: 18,
                fontWeight: 700,
                color: crmTheme.colors.gold,
              }}
            >
              {currentProduct.name} - Product Details
            </h3>
            <div className="grid grid-cols-2 gap-4">
              <div style={styles.darkPanel}>
                <h4 style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>
                  Loan Amount
                </h4>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 13,
                    color: crmTheme.colors.textMuted,
                  }}
                >
                  ₹{currentProduct.minAmount.toLocaleString()} – ₹
                  {currentProduct.maxAmount.toLocaleString()}
                </p>
              </div>
              <div style={styles.darkPanel}>
                <h4 style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>Tenure</h4>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 13,
                    color: crmTheme.colors.textMuted,
                  }}
                >
                  {currentProduct.tenure}
                </p>
              </div>
              <div style={styles.darkPanel}>
                <h4 style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>
                  Interest Range
                </h4>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 13,
                    color: crmTheme.colors.textMuted,
                  }}
                >
                  {currentProduct.interest}
                </p>
              </div>
              <div style={styles.darkPanel}>
                <h4 style={{ margin: 0, fontSize: 13, fontWeight: 600 }}>
                  Processing Fee
                </h4>
                <p
                  style={{
                    margin: '4px 0 0',
                    fontSize: 13,
                    color: crmTheme.colors.textMuted,
                  }}
                >
                  {currentProduct.processing}
                </p>
              </div>
            </div>
            <div
              style={{
                display: 'flex',
                marginTop: 18,
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 12,
              }}
            >
              <button
                onClick={openForm}
                type="button"
                style={{
                  padding: '10px 20px',
                  borderRadius: crmTheme.radii.button,
                  border: `1px solid ${crmTheme.colors.goldBorder}`,
                  background: crmTheme.colors.topbarGradient,
                  color: '#1b1300',
                  fontWeight: 700,
                  cursor: 'pointer',
                }}
              >
                Apply Now
              </button>
              <span
                style={{
                  fontSize: 11,
                  color: crmTheme.colors.textMuted,
                }}
              >
                Tip: Choose loan amount below to see real-time EMI breakdown.
              </span>
            </div>
          </div>
        )}

        {/* Loan Application Form Modal */}
        {showForm && (
          <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center p-4 z-50">
            <div
              style={{
                ...styles.premiumCard,
                width: '100%',          // already full
                maxWidth: '100%',       // full screen stretch
                padding: 20,            // optional (looks better)
                maxHeight: '90vh',
                overflowY: 'auto',
                animation: 'slideInUp 0.35s ease-out',
                borderRadius: 0,  
              }}
            >
              <h2
                style={{
                  marginTop: 0,
                  marginBottom: 8,
                  fontSize: 18,
                  fontWeight: 700,
                  color: crmTheme.colors.gold,
                }}
              >
                Loan Application Form
              </h2>

              {successMessage && (
                <div
                  style={{
                    background: 'rgba(34,197,94,0.12)',
                    borderRadius: crmTheme.radii.panel,
                    padding: 8,
                    fontSize: 12,
                    color: '#bbf7d0',
                    border: '1px solid rgba(34,197,94,0.4)',
                    marginBottom: 8,
                  }}
                >
                  {successMessage}
                </div>
              )}
              {errorMessage && (
                <div
                  style={{
                    background: 'rgba(248,113,113,0.12)',
                    borderRadius: crmTheme.radii.panel,
                    padding: 8,
                    fontSize: 12,
                    color: '#fecaca',
                    border: '1px solid rgba(248,113,113,0.4)',
                    marginBottom: 8,
                  }}
                >
                  {errorMessage}
                </div>
              )}

              <form
                id="loan-application-form"
                onSubmit={handleSubmit}
                encType="multipart/form-data"
              >
                {/* OTP Section */}
                <div
                  style={{
                    ...styles.darkPanel,
                    background:
                      'linear-gradient(135deg, rgba(255,215,0,0.03), rgba(0,0,0,0.8))',
                    borderColor: crmTheme.colors.goldBorder,
                    marginBottom: 12,
                  }}
                >
                  <label
                    style={{
                      display: 'block',
                      marginBottom: 6,
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    Mobile Number (OTP Verification)
                  </label>
                  <div className="flex gap-2">
                    <input
                      style={{
                        flex: 1,
                        padding: '8px 10px',
                        borderRadius: crmTheme.radii.button,
                        border: '1px solid #3f3f46',
                        background: '#09090b',
                        color: crmTheme.colors.textLight,
                        fontSize: 13,
                      }}
                      name="mobile"
                      placeholder="Enter 10 Digit Mobile Number"
                      maxLength={10}
                      value={mobile}
                      onInput={(e) => digitOnly(e, 10)}
                      onChange={(e) => {
                        setMobile(e.target.value);
                        setOtpVerified(false);
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={handleSendOtp}
                      style={{
                        padding: '8px 12px',
                        borderRadius: crmTheme.radii.button,
                        border: `1px solid ${crmTheme.colors.goldBorder}`,
                        background: crmTheme.colors.topbarGradient,
                        color: '#1b1300',
                        fontWeight: 600,
                        fontSize: 12,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {otpSent ? 'Resend OTP' : 'Send OTP'}
                    </button>
                  </div>
                  <div className="mt-2 flex gap-2 items-center" style={{ marginTop: 8 }}>
                    <input
                      style={{
                        flex: 1,
                        padding: '8px 10px',
                        borderRadius: crmTheme.radii.button,
                        border: '1px solid #3f3f46',
                        background: '#09090b',
                        color: crmTheme.colors.textLight,
                        fontSize: 13,
                      }}
                      name="otp"
                      placeholder="Enter OTP"
                      maxLength={6}
                      value={otp}
                      onInput={(e) => digitOnly(e, 6)}
                      onChange={(e) => setOtp(e.target.value)}
                    />
                    <button
                      type="button"
                      onClick={handleVerifyOtp}
                      style={{
                        padding: '8px 12px',
                        borderRadius: crmTheme.radii.button,
                        border: '1px solid #16a34a',
                        background: 'linear-gradient(135deg,#4ade80,#16a34a)',
                        color: '#022c22',
                        fontWeight: 600,
                        fontSize: 12,
                        cursor: 'pointer',
                        whiteSpace: 'nowrap',
                      }}
                    >
                      Verify OTP
                    </button>
                    {otpVerified && (
                      <span
                        style={{
                          fontSize: 11,
                          color: '#bbf7d0',
                          fontWeight: 600,
                        }}
                      >
                        Verified ✅
                      </span>
                    )}
                  </div>
                </div>

                {/* KYC Card (moved just below OTP) */}
                <div
                  style={{
                    ...styles.darkPanel,
                    borderRadius: 18,
                    marginBottom: 12,
                  }}
                >
                  <div
                    className="flex items-center justify-between"
                    style={{ marginBottom: 8 }}
                  >
                    <span
                      style={{
                        fontWeight: 600,
                        fontSize: 12,
                        color: crmTheme.colors.textLight,
                      }}
                    >
                      KYC Details (PAN & Aadhaar)
                    </span>
                    {panVerified && (
                      <span
                        style={{
                          fontSize: 10,
                          padding: '3px 8px',
                          borderRadius: 999,
                          background: 'rgba(34,197,94,0.18)',
                          color: '#bbf7d0',
                          border: '1px solid rgba(34,197,94,0.6)',
                        }}
                      >
                        PAN Verified
                      </span>
                    )}
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: crmTheme.colors.textMuted,
                        }}
                      >
                        PAN Number
                      </label>
                      <div className="flex gap-2" style={{ marginTop: 4 }}>
                        <input
                          name="pan_number"
                          placeholder="ABCDE1234F"
                          maxLength={10}
                          value={panNumber}
                          onChange={(e) => {
                            const v = e.target.value
                              .toUpperCase()
                              .replace(/[^A-Z0-9]/g, '')
                              .slice(0, 10);
                            setPanNumber(v);
                            setPanVerified(false);
                            setPanError('');
                          }}
                          required
                          style={{
                            flex: 1,
                            padding: '8px 10px',
                            borderRadius: crmTheme.radii.button,
                            border: '1px solid #3f3f46',
                            background: '#020617',
                            color: crmTheme.colors.textLight,
                            fontSize: 13,
                          }}
                        />
                        <button
                          type="button"
                          onClick={handleVerifyPan}
                          disabled={panVerifying}
                          style={{
                            padding: '7px 10px',
                            borderRadius: crmTheme.radii.button,
                            border: `1px solid ${crmTheme.colors.goldBorder}`,
                            background: crmTheme.colors.topbarGradient,
                            color: '#1b1300',
                            fontWeight: 600,
                            fontSize: 11,
                            cursor: 'pointer',
                            whiteSpace: 'nowrap',
                            opacity: panVerifying ? 0.7 : 1,
                          }}
                        >
                          {panVerifying ? 'Checking…' : 'Verify'}
                        </button>
                      </div>
                      {panError && (
                        <p
                          style={{
                            fontSize: 10,
                            color: '#fecaca',
                            marginTop: 2,
                          }}
                        >
                          {panError}
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        style={{
                          fontSize: 11,
                          fontWeight: 500,
                          color: crmTheme.colors.textMuted,
                        }}
                      >
                        Aadhaar Number
                      </label>
                      <input
                        name="aadhaar_number"
                        placeholder="12 Digit Aadhaar"
                        maxLength={12}
                        value={aadhaarNumber}
                        onInput={(e) => digitOnly(e, 12)}
                        onChange={(e) => setAadhaarNumber(e.target.value)}
                        onBlur={handleAadhaarBlur}
                        required
                        style={{
                          marginTop: 4,
                          padding: '8px 10px',
                          borderRadius: crmTheme.radii.button,
                          border: '1px solid #3f3f46',
                          background: '#020617',
                          color: crmTheme.colors.textLight,
                          fontSize: 13,
                        }}
                      />
                      {aadhaarNumber && (
                        <p
                          style={{
                            fontSize: 10,
                            color: crmTheme.colors.textMuted,
                            marginTop: 2,
                          }}
                        >
                          Masked: {maskedAadhaar}
                        </p>
                      )}
                      {aadhaarError && (
                        <p
                          style={{
                            fontSize: 10,
                            color: '#fecaca',
                            marginTop: 2,
                          }}
                        >
                          {aadhaarError}
                        </p>
                      )}
                    </div>
                  </div>

                  <div style={{ marginTop: 10 }}>
                    <label
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: crmTheme.colors.textMuted,
                      }}
                    >
                      Upload PAN / Aadhaar for Auto Read (OCR)
                    </label>
                    <input
                      type="file"
                      accept="image/*,application/pdf"
                      onChange={handleOcrUpload}
                      style={{
                        width: '100%',
                        marginTop: 4,
                        fontSize: 11,
                      }}
                    />
                    {ocrLoading && (
                      <p
                        style={{
                          fontSize: 10,
                          color: '#bfdbfe',
                          marginTop: 2,
                        }}
                      >
                        Reading document...
                      </p>
                    )}
                    {ocrMessage && (
                      <p
                        style={{
                          fontSize: 10,
                          color: '#bbf7d0',
                          marginTop: 2,
                        }}
                      >
                        {ocrMessage}
                      </p>
                    )}
                  </div>
                </div>

                {/* Employment Type */}
                <div style={{ ...styles.darkPanel, marginBottom: 12 }}>
                  <label
                    style={{
                      display: 'block',
                      marginBottom: 6,
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    Select Employment Type
                  </label>
                  <select
                    style={{
                      width: '100%',
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                    value={employmentType}
                    name="employment_type"
                    onChange={(e) => setEmploymentType(e.target.value)}
                    required
                  >
                    <option value="">Choose</option>
                    <option value="salaried">Salaried Person</option>
                    <option value="self">Self Employed</option>
                  </select>
                </div>

                {/* Customer Details */}
                <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 12 }}>
                  <input
                    name="full_name"
                    placeholder="Full Name"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                  />
                  <input
                    name="alternate_mobile"
                    placeholder="Alternate Number"
                    maxLength={10}
                    onInput={(e) => digitOnly(e, 10)}
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                  />
                  <input
                    name="email"
                    placeholder="Email ID"
                    type="email"
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                  />
                  <input
                    name="mother_name"
                    placeholder="Mother Name"
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                  />
                  <input
                    name="father_name"
                    placeholder="Father Name"
                    value={fatherName}
                    onChange={(e) => setFatherName(e.target.value)}
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                  />
                  <input
                    name="spouse_name"
                    placeholder="Spouse Name"
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                  />
                </div>

                {/* DOB + Age Cards */}
                <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 12 }}>
                  <div
                    style={{
                      borderRadius: 18,
                      padding: 12,
                      background: 'linear-gradient(135deg,#1e293b,#020617)',
                      border: '1px solid rgba(148,163,184,0.6)',
                      display: 'flex',
                      gap: 12,
                      alignItems: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: '50%',
                        background: 'rgba(148,163,184,0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: 20,
                      }}
                    >
                      🧍‍♂️
                    </div>
                    <div className="grid grid-cols-2 gap-2" style={{ fontSize: 11 }}>
                      <div>
                        <span style={{ opacity: 0.8 }}>Customer DOB</span>
                        <input
                          name="dob"
                          type="date"
                          value={customerDob}
                          onChange={(e) => {
                            const value = e.target.value;
                            setCustomerDob(value);
                            const age = calcAge(value);
                            setCustomerAge(age ? age.toString() : '');
                            if (age && age < 21) {
                              setErrorMessage(
                                'Minimum customer age should be 21 years.'
                              );
                            }
                          }}
                          style={{
                            marginTop: 4,
                            padding: '6px 8px',
                            borderRadius: crmTheme.radii.button,
                            border: '1px solid rgba(148,163,184,0.7)',
                            background: '#0b1120',
                            color: crmTheme.colors.textLight,
                            fontSize: 11,
                          }}
                        />
                      </div>
                     {/* CUSTOMER AGE CARD */}
<div
  style={{
    borderRadius: 18,
    padding: 16,
    background: "rgba(2, 6, 23, 0.85)",
    border: "1px solid rgba(148,163,184,0.3)",
    backdropFilter: "blur(8px)",
    boxShadow: "0 6px 25px rgba(0,0,0,0.45)",
    transition: "0.3s",
  }}
>
  <div style={{ fontSize: 12, opacity: 0.85, marginBottom: 6, fontWeight: 500 }}>
    Customer Age
  </div>

  <input
    value={customerAge}
    placeholder="Auto"
    readOnly
    style={{
      width: "100%",
      padding: "8px 10px",
      borderRadius: 10,
      border: "1px solid rgba(148,163,184,0.5)",
      background: "linear-gradient(135deg,#0f172a,#020617)",
      color: crmTheme.colors.textLight,
      fontSize: 13,
      boxShadow: "inset 0 0 10px rgba(0,0,0,0.35)",
    }}
  />
</div>

{/* SPOUSE SECTION */}
<div
  style={{
    marginTop: 16,
    borderRadius: 18,
    padding: 16,
    background: "linear-gradient(135deg,#4c0519,#020617)",
    border: "1px solid rgba(248,113,133,0.55)",
    boxShadow: "0 6px 25px rgba(248,113,133,0.20)",
    display: "flex",
    gap: 16,
    alignItems: "center",
    backdropFilter: "blur(6px)",
  }}
>
  {/* ICON */}
  <div
    style={{
      minWidth: 48,
      height: 48,
      borderRadius: "50%",
      background: "rgba(248,113,133,0.25)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: 22,
      boxShadow: "0 0 12px rgba(248,113,133,0.4)",
    }}
  >
    ❤️
  </div>

  {/* INPUT GRID */}
  <div className="grid grid-cols-2 gap-3" style={{ width: "100%" }}>
    {/* SPOUSE DOB */}
    <div>
      <span style={{ opacity: 0.8, fontSize: 12 }}>Spouse DOB</span>
      <input
        name="spouse_dob"
        type="date"
        value={spouseDob}
        onChange={(e) => {
          const value = e.target.value;
          setSpouseDob(value);

          const age = calcAge(value);
          setSpouseAge(age ? age.toString() : "");

          if (age && age < 21) {
            setErrorMessage("Minimum spouse age should be 21 years.");
          }
        }}
        style={{
          marginTop: 4,
          padding: "8px 10px",
          borderRadius: 10,
          border: "1px solid rgba(248,113,133,0.6)",
          background: "rgba(2, 6, 23, 0.9)",
          color: crmTheme.colors.textLight,
          fontSize: 13,
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.35)",
        }}
      />
    </div>

    {/* SPOUSE AGE */}
    <div>
      <span style={{ opacity: 0.8, fontSize: 12 }}>Spouse Age</span>
      <input
        value={spouseAge}
        placeholder="Auto"
        readOnly
        style={{
          marginTop: 4,
          padding: "8px 10px",
          borderRadius: 10,
          border: "1px solid rgba(248,113,133,0.6)",
          background: "rgba(2, 6, 23, 0.9)",
          color: crmTheme.colors.textLight,
          fontSize: 13,
          boxShadow: "inset 0 0 10px rgba(0,0,0,0.35)",
        }}
      />
    </div>
  </div>
</div>

                {/* Product & Loan Amount */}
                <div className="grid grid-cols-2 gap-4" style={{ marginBottom: 12 }}>
                  <select
                    className="col-span-2"
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                    name="product"
                    value={activeProduct || ''}
                    onChange={(e) => setActiveProduct(e.target.value)}
                  >
                    <option value="">Choose Product</option>
                    {products.map((p) => (
                      <option key={p.name} value={p.name}>
                        {p.name}
                      </option>
                    ))}
                  </select>
                  <input
                    className="col-span-2"
                    name="loan_amount"
                    placeholder="Loan Amount Required"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    required
                    style={{
                      padding: '8px 10px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #3f3f46',
                      background: '#09090b',
                      color: crmTheme.colors.textLight,
                      fontSize: 13,
                    }}
                  />
                </div>

                {/* EMI Calculator */}
                {loanAmount !== '' && (
                  <div
                    style={{
                      ...styles.darkPanel,
                      borderColor: crmTheme.colors.goldBorder,
                      marginBottom: 12,
                    }}
                  >
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: 8,
                        marginBottom: 8,
                      }}
                    >
                      <h3
                        style={{
                          margin: 0,
                          fontSize: 15,
                          fontWeight: 700,
                          color: crmTheme.colors.gold,
                        }}
                      >
                        Premium EMI Calculator
                      </h3>
                      {currentProduct && (
                        <span
                          style={{
                            fontSize: 10,
                            padding: '3px 10px',
                            borderRadius: 999,
                            background: crmTheme.colors.topbarGradient,
                            color: '#1b1300',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                          }}
                        >
                          {currentProduct.name}
                        </span>
                      )}
                    </div>

                    <label
                      style={{
                        fontSize: 11,
                        fontWeight: 500,
                        color: crmTheme.colors.textMuted,
                      }}
                    >
                      Adjust Loan Amount
                    </label>
                    <input
                      type="range"
                      min="10000"
                      max="5000000"
                      step="5000"
                      value={loanAmount}
                      onChange={(e) => setLoanAmount(e.target.value)}
                      className="w-full"
                    />
                    <p
                      style={{
                        fontSize: 11,
                        fontWeight: 600,
                        marginTop: 4,
                        color: crmTheme.colors.gold,
                      }}
                    >
                      ₹{Number(loanAmount || '0').toLocaleString()}
                    </p>

                    <div className="grid grid-cols-2 gap-4" style={{ marginTop: 8 }}>
                      <input
                        placeholder="Interest Rate (%)"
                        value={interestRate}
                        onChange={(e) => setInterestRate(e.target.value)}
                        style={{
                          padding: '8px 10px',
                          borderRadius: crmTheme.radii.button,
                          border: '1px solid #3f3f46',
                          background: '#020617',
                          color: crmTheme.colors.textLight,
                          fontSize: 13,
                        }}
                      />
                      <input
                        placeholder="Tenure"
                        value={tenure}
                        onChange={(e) => setTenure(e.target.value)}
                        style={{
                          padding: '8px 10px',
                          borderRadius: crmTheme.radii.button,
                          border: '1px solid #3f3f46',
                          background: '#020617',
                          color: crmTheme.colors.textLight,
                          fontSize: 13,
                        }}
                      />
                      <select
                        className="col-span-2"
                        value={tenureType}
                        onChange={(e) =>
                          setTenureType(e.target.value as TenureType)
                        }
                        style={{
                          padding: '8px 10px',
                          borderRadius: crmTheme.radii.button,
                          border: '1px solid #3f3f46',
                          background: '#020617',
                          color: crmTheme.colors.textLight,
                          fontSize: 13,
                        }}
                      >
                        <option value="months">Months</option>
                        <option value="years">Years</option>
                      </select>
                    </div>

                    {emiResult && (
                      <>
                        <div
                          style={{
                            marginTop: 10,
                            padding: 12,
                            borderRadius: 16,
                            background:
                              'linear-gradient(135deg,#1d4ed8,#4f46e5)',
                            display: 'flex',
                            flexDirection: 'column',
                            gap: 8,
                            color: 'white',
                          }}
                        >
                          <div>
                            <p
                              style={{
                                fontSize: 11,
                                textTransform: 'uppercase',
                                opacity: 0.85,
                                margin: 0,
                              }}
                            >
                              Estimated EMI
                            </p>
                            <p
                              style={{
                                fontSize: 22,
                                fontWeight: 800,
                                margin: 0,
                              }}
                            >
                              ₹{emiResult.emi}
                            </p>
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              gap: 20,
                              fontSize: 12,
                            }}
                          >
                            <div>
                              <p style={{ opacity: 0.9, margin: 0 }}>
                                Total Interest
                              </p>
                              <p
                                style={{ margin: 0, fontWeight: 600 }}
                              >
                                ₹{emiResult.totalInterest}
                              </p>
                            </div>
                            <div>
                              <p style={{ opacity: 0.9, margin: 0 }}>
                                Total Payable
                              </p>
                              <p
                                style={{ margin: 0, fontWeight: 600 }}
                              >
                                ₹{emiResult.totalPay}
                              </p>
                            </div>
                          </div>
                        </div>

                        <div
                          style={{
                            marginTop: 10,
                            padding: 10,
                            borderRadius: 14,
                            background: '#020617',
                          }}
                        >
                          <p
                            style={{
                              margin: 0,
                              marginBottom: 6,
                              fontSize: 12,
                              fontWeight: 600,
                            }}
                          >
                            EMI Breakdown
                          </p>
                          <div
                            style={{
                              height: 22,
                              width: '100%',
                              borderRadius: 999,
                              overflow: 'hidden',
                              display: 'flex',
                              background: '#111827',
                            }}
                          >
                            <div
                              style={{
                                width: `${principalPct}%`,
                                background: '#22c55e',
                                transition: 'width 0.4s ease-out',
                              }}
                              title={`Principal ${principalPct}%`}
                            />
                            <div
                              style={{
                                width: `${interestPct}%`,
                                background: '#facc15',
                                transition: 'width 0.4s ease-out',
                              }}
                              title={`Interest ${interestPct}%`}
                            />
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              marginTop: 4,
                              fontSize: 11,
                              color: crmTheme.colors.textMuted,
                            }}
                          >
                            <span>Principal: {principalPct}%</span>
                            <span>Interest: {interestPct}%</span>
                          </div>
                        </div>

                        {bankEmis.length > 0 && (
                          <div
                            style={{
                              marginTop: 10,
                              padding: 10,
                              borderRadius: 14,
                              background: '#020617',
                            }}
                          >
                            <p
                              style={{
                                margin: 0,
                                marginBottom: 6,
                                fontSize: 12,
                                fontWeight: 600,
                              }}
                            >
                              Bank-wise EMI Comparison
                            </p>
                            <table
                              style={{
                                width: '100%',
                                fontSize: 11,
                                borderCollapse: 'collapse',
                              }}
                            >
                              <thead>
                                <tr
                                  style={{
                                    borderBottom:
                                      '1px solid rgba(55,65,81,0.8)',
                                    textAlign: 'left',
                                  }}
                                >
                                  <th style={{ padding: '4px 0' }}>Bank</th>
                                  <th style={{ padding: '4px 0' }}>Approx. EMI</th>
                                </tr>
                              </thead>
                              <tbody>
                                {bankEmis.map((b) => (
                                  <tr
                                    key={b.name}
                                    style={{
                                      borderBottom:
                                        '1px solid rgba(31,41,55,0.7)',
                                    }}
                                  >
                                    <td style={{ padding: '4px 0' }}>{b.name}</td>
                                    <td style={{ padding: '4px 0' }}>₹{b.emi}</td>
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                            <p
                              style={{
                                margin: 0,
                                marginTop: 4,
                                fontSize: 10,
                                color: crmTheme.colors.textMuted,
                              }}
                            >
                              * Actual EMI may vary as per final bank offer.
                            </p>
                          </div>
                        )}
                      </>
                    )}
                  </div>
                )}

                {/* File Upload Section */}
                <h3
                  style={{
                    marginTop: 12,
                    marginBottom: 6,
                    fontSize: 14,
                    fontWeight: 700,
                  }}
                >
                  Upload Required Documents
                </h3>
                <div
                  style={{
                    ...styles.darkPanel,
                    borderRadius: 14,
                    marginBottom: 12,
                  }}
                >
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>Photo</span>
                    <input
                      type="file"
                      name="photo"
                      style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                    />
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>PAN Card</span>
                    <input
                      type="file"
                      name="pan_card"
                      style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                    />
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>
                      Aadhaar Front Side
                    </span>
                    <input
                      type="file"
                      name="aadhaar_front"
                      style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                    />
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>
                      Aadhaar Back Side
                    </span>
                    <input
                      type="file"
                      name="aadhaar_back"
                      style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                    />
                  </div>
                  <div style={{ marginBottom: 8 }}>
                    <span style={{ fontSize: 12, fontWeight: 500 }}>
                      1 Year Bank Statement (till today)
                    </span>
                    <input
                      type="file"
                      name="bank_statement"
                      style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                    />
                  </div>

                  {employmentType === 'self' && (
                    <>
                      <div style={{ marginBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>
                          GST / MSME (Upload one or multiple files)
                        </span>
                        <input
                          type="file"
                          name="gst_msme_docs"
                          multiple
                          style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                        />
                      </div>
                      <div style={{ marginBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>
                          ITR Last 1 Year
                        </span>
                        <input
                          type="file"
                          name="itr_1"
                          style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                        />
                      </div>
                      <div style={{ marginBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>
                          ITR Last 2 Years
                        </span>
                        <input
                          type="file"
                          name="itr_2"
                          style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                        />
                      </div>
                      <div style={{ marginBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>
                          ITR Last 3 Years
                        </span>
                        <input
                          type="file"
                          name="itr_3"
                          style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                        />
                      </div>
                      <div style={{ marginBottom: 8 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>
                          Additional Supporting Documents (Optional)
                        </span>
                        <input
                          type="file"
                          name="additional_docs"
                          multiple
                          style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                        />
                      </div>
                      <div style={{ marginBottom: 0 }}>
                        <span style={{ fontSize: 12, fontWeight: 500 }}>
                          Project File (Self-Employed Only)
                        </span>
                        <input
                          type="file"
                          name="project_file"
                          style={{ width: '100%', marginTop: 4, fontSize: 11 }}
                        />
                      </div>
                    </>
                  )}
                </div>

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: 8,
                  }}
                >
                  <button
                    type="button"
                    onClick={closeForm}
                    disabled={submitting}
                    style={{
                      padding: '8px 16px',
                      borderRadius: crmTheme.radii.button,
                      border: '1px solid #4b5563',
                      background: '#111827',
                      color: crmTheme.colors.textLight,
                      cursor: 'pointer',
                      fontSize: 13,
                    }}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={submitting || !otpVerified}
                    style={{
                      padding: '8px 16px',
                      borderRadius: crmTheme.radii.button,
                      border: `1px solid ${crmTheme.colors.goldBorder}`,
                      background: crmTheme.colors.topbarGradient,
                      color: '#1b1300',
                      fontWeight: 700,
                      cursor: submitting || !otpVerified ? 'not-allowed' : 'pointer',
                      opacity: submitting || !otpVerified ? 0.7 : 1,
                      fontSize: 13,
                    }}
                  >
                    {submitting ? 'Submitting...' : 'Submit Application'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}
      </div>
    </>
  );
}

// Behaviour checklist:
// 1. Product cards change active product and show details in Indokona theme.
// 2. Apply Now opens modal with OTP verification and full loan form.
// 3. Mobile accepts only 10 digits; OTP is required & verified before submit.
// 4. Customer & spouse DOB auto-calc ages; min age 21 validation via message.
// 5. PAN & Aadhaar validation, masked Aadhaar view, PAN verify API hook.
// 6. PAN verify auto-fills customer full name, father name & DOB.
// 7. PAN auto-fill success toast appears for 5 seconds.
// 8. OCR upload can pre-fill PAN/Aadhaar from /api/ocr-id/.
// 9. EMI calculator reacts to loan amount, interest, tenure, tenure type.
// 10. Bank-wise EMI comparison table shows approximate EMIs.
// 11. Self-employed type shows extra GST/MSME, ITR, additional docs & project file.
// 12. Final form submits multipart lead to /api/loan-leads/ with product & employment.
