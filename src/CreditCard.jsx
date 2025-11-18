// CREDIT CARD APPLY CRM – PREMIUM DARK (OneCard style)
// React.js only – Apply Now + KYC form integrated

import React, { useState } from 'react';

// ---------- THEME ----------
export const crmTheme = {
  colors: {
    pageBg: '#050815',
    surface: 'linear-gradient(145deg,#050816,#020617)',
    cardOuter: 'linear-gradient(145deg,#111827,#020617)',
    cardInner: 'linear-gradient(135deg,#1f2937,#020617)',
    neonBlue: '#38bdf8',
    neonPurple: '#a855f7',
    neonGreen: '#4ade80',
    textMain: '#f9fafb',
    textSub: '#9ca3af',
    borderSoft: 'rgba(148,163,184,0.4)',
    borderStrong: 'rgba(56,189,248,0.8)',
    chip: '#facc15',
  },
  radii: {
    card3d: 24,
    pill: 999,
    button: 999,
    panel: 16,
  },
};

const styles = {
  pageWrapper: {
    minHeight: '100vh',
    padding: '28px 24px',
    boxSizing: 'border-box',
    background: crmTheme.colors.pageBg,
    color: crmTheme.colors.textMain,
    fontFamily:
      'system-ui, -apple-system, BlinkMacSystemFont, "SF Pro Text", sans-serif',
  },
};

// ---------- BRAND + CARD MASTER DATA ----------
const brandCards = [
  {
    code: 'IDFC',
    brand: 'IDFC FIRST Bank',
    cardName: 'IDFC FIRST Classic Credit Card',
    tag: 'Lifetime Free',
    joiningFee: '₹0 (Lifetime Free)',
    annualFee: '₹0',
    segment: 'Mass / Salaried / Self-employed',
    accent: 'linear-gradient(135deg,#22c55e,#16a34a)',
  },
  {
    code: 'AXIS',
    brand: 'Axis Bank',
    cardName: 'Axis ACE Credit Card',
    tag: 'Cashback • Bills',
    joiningFee: '₹499 + GST',
    annualFee: '₹499 (waiver on spends)',
    segment: 'Salaried with digital spends',
    accent: 'linear-gradient(135deg,#0ea5e9,#22c55e)',
  },
  {
    code: 'HSBC',
    brand: 'HSBC Bank',
    cardName: 'HSBC Smart Value Credit Card',
    tag: 'Dining • International',
    joiningFee: '₹999 + GST',
    annualFee: '₹999',
    segment: 'Metro • High income',
    accent: 'linear-gradient(135deg,#6366f1,#22c55e)',
  },
  {
    code: 'KIWI',
    brand: 'Kiwi',
    cardName: 'Kiwi UPI Credit Card',
    tag: 'UPI • App First',
    joiningFee: '₹0 – App Journey',
    annualFee: 'As per variant',
    segment: 'Young • UPI savvy',
    accent: 'linear-gradient(135deg,#22d3ee,#a855f7)',
  },
  {
    code: 'HDFC',
    brand: 'HDFC Bank',
    cardName: 'HDFC Millennia Credit Card',
    tag: 'Online • Cashback',
    joiningFee: '₹1,000 + GST',
    annualFee: '₹1,000 (spend based)',
    segment: 'Digital shoppers',
    accent: 'linear-gradient(135deg,#0ea5e9,#1d4ed8)',
  },
  {
    code: 'YES',
    brand: 'YES BANK',
    cardName: 'YES Prosperity Rewards',
    tag: 'Rewards • Entry',
    joiningFee: '₹399 + GST',
    annualFee: '₹399',
    segment: 'Entry salaried / self-employed',
    accent: 'linear-gradient(135deg,#22c55e,#a855f7)',
  },
  {
    code: 'RBL',
    brand: 'RBL Bank',
    cardName: 'RBL Popcorn / Movies',
    tag: 'Movies • Lifestyle',
    joiningFee: '₹500 – ₹2,000',
    annualFee: 'As per variant',
    segment: 'Entertainment heavy',
    accent: 'linear-gradient(135deg,#f97316,#ec4899)',
  },
  {
    code: 'BOB',
    brand: 'Bank of Baroda',
    cardName: 'BOB Easy / Select',
    tag: 'Low Fee • Value',
    joiningFee: '₹250 – ₹499',
    annualFee: '₹250 – ₹499',
    segment: 'Mass retail',
    accent: 'linear-gradient(135deg,#22c55e,#16a34a)',
  },
  {
    code: 'AU',
    brand: 'AU Small Finance Bank',
    cardName: 'AU LIT / Zenith',
    tag: 'UPI • Premium',
    joiningFee: '₹0 – ₹7,999',
    annualFee: 'As per variant',
    segment: 'UPI + Premium',
    accent: 'linear-gradient(135deg,#facc15,#f97316)',
  },
  {
    code: 'SBI',
    brand: 'SBI Card',
    cardName: 'SBI SimplySAVE / SimplyCLICK',
    tag: 'Rewards • Online',
    joiningFee: '₹499 + GST',
    annualFee: '₹499',
    segment: 'Mass salaried',
    accent: 'linear-gradient(135deg,#38bdf8,#6366f1)',
  },
  {
    code: 'ICICI',
    brand: 'ICICI Bank',
    cardName: 'ICICI Amazon / Coral',
    tag: 'Online • Lifestyle',
    joiningFee: '₹0 – ₹1,500',
    annualFee: 'As per variant',
    segment: 'Online & mall shoppers',
    accent: 'linear-gradient(135deg,#22c55e,#16a34a)',
  },
  {
    code: 'EQUITAS',
    brand: 'Equitas Small Finance Bank',
    cardName: 'Equitas Credit Card',
    tag: 'Starter • Small finance',
    joiningFee: '₹300 + GST (approx.)',
    annualFee: '₹300',
    segment: 'New to credit / tier 2–3',
    accent: 'linear-gradient(135deg,#a855f7,#6366f1)',
  },
  {
    code: 'FEDERAL',
    brand: 'Federal Bank',
    cardName: 'Federal Signet / Imperio',
    tag: 'Bills • Rewards',
    joiningFee: '₹500 – ₹1,999',
    annualFee: 'As per variant',
    segment: 'Online bills + travel',
    accent: 'linear-gradient(135deg,#0ea5e9,#22c55e)',
  },
  {
    code: 'CSB',
    brand: 'CSB Bank',
    cardName: 'CSB Credit Card',
    tag: 'Simple • Low fee',
    joiningFee: '₹250 + GST (approx.)',
    annualFee: '₹250',
    segment: 'Conservative / traditional',
    accent: 'linear-gradient(135deg,#22c55e,#16a34a)',
  },
];

// ---------- MAIN COMPONENT ----------
function CreditCardCRMModule() {
  const [activeCode, setActiveCode] = useState('IDFC');

  const activeCard = brandCards.find((c) => c.code === activeCode) || brandCards[0];

  const topButtons = ['Details', 'Variants', 'Share Contents', 'Customer', 'Earnings'];
  const bottomButtons = ['Benefits', 'Whom To Sell', 'How It Works', 'T&C', 'FAQ'];

  // KYC / Apply form state
  const [showApply, setShowApply] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    mobile: '',
    email: '',
    pan: '',
    dob: '',
    monthlyIncome: '',
    city: '',
    employmentType: '',
    existingCard: '',
    consent: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleMobileChange = (e) => {
    const onlyDigits = e.target.value.replace(/[^0-9]/g, '').slice(0, 10);
    setFormData((prev) => ({ ...prev, mobile: onlyDigits }));
  };

  const handlePanChange = (e) => {
    const v = e.target.value.toUpperCase().slice(0, 10);
    setFormData((prev) => ({ ...prev, pan: v }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitMessage('');

    if (!formData.fullName || !formData.mobile || !formData.pan || !formData.employmentType) {
      setSubmitMessage('Please fill all mandatory fields (Name, Mobile, PAN, Employment Type).');
      return;
    }
    if (formData.mobile.length !== 10) {
      setSubmitMessage('Mobile number must be 10 digits.');
      return;
    }
    if (!formData.consent) {
      setSubmitMessage('Please accept consent before submitting.');
      return;
    }

    // Here you will call your Django API (demo: console.log)
    console.log('CREDIT CARD LEAD:', {
      ...formData,
      productCode: activeCard.code,
      productBrand: activeCard.brand,
    });

    setSubmitMessage('✅ Application submitted for ' + activeCard.brand + ' • This is a demo front-end message.');

    // Optionally reset form lightly
    setFormData((prev) => ({
      ...prev,
      fullName: prev.fullName,
      mobile: prev.mobile,
      email: prev.email,
    }));
  };

  return (
    <div style={styles.pageWrapper}>
      {/* PAGE HEADER */}
      <div
        style={{
          borderRadius: crmTheme.radii.panel,
          padding: '18px 20px',
          marginBottom: 22,
          background:
            'radial-gradient(circle at top left, rgba(56,189,248,0.15), transparent 55%), radial-gradient(circle at top right, rgba(168,85,247,0.18), transparent 55%), #020617',
          border: `1px solid ${crmTheme.colors.borderSoft}`,
          boxShadow: '0 0 40px rgba(15,23,42,0.8)',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 16,
            flexWrap: 'wrap',
          }}
        >
          <div>
            <div
              style={{
                fontSize: 12,
                letterSpacing: 3,
                textTransform: 'uppercase',
                color: crmTheme.colors.textSub,
                marginBottom: 4,
              }}
            >
              Indokona Credit Bazar • Cards CRM
            </div>
            <h1
              style={{
                margin: 0,
                fontSize: 24,
                fontWeight: 800,
                backgroundImage:
                  'linear-gradient(90deg,#38bdf8,#a855f7,#4ade80)',
                WebkitBackgroundClip: 'text',
                color: 'transparent',
              }}
            >
              Credit Card Origination & Partner CRM
            </h1>
            <p
              style={{
                margin: '6px 0 0',
                fontSize: 12,
                color: crmTheme.colors.textSub,
                maxWidth: 520,
              }}
            >
              Track all brands, variants, payouts and customer journeys in one premium
              dark dashboard. Click a brand below to focus.
            </p>
          </div>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 10,
              fontSize: 11,
              color: crmTheme.colors.textSub,
            }}
          >
            <div
              style={{
                padding: '6px 10px',
                borderRadius: crmTheme.radii.pill,
                border: `1px solid ${crmTheme.colors.borderSoft}`,
                background: 'rgba(15,23,42,0.8)',
              }}
            >
              Total Brands:{' '}
              <span style={{ color: crmTheme.colors.neonBlue }}>{brandCards.length}</span>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN 2-COLUMN LAYOUT */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.7fr) minmax(0, 1.1fr)',
          gap: 20,
        }}
      >
        {/* LEFT: 3D CREDIT CARD + BUTTONS */}
        <div>
          {/* 3D CARD WRAPPER */}
          <div
            style={{
              borderRadius: crmTheme.radii.card3d,
              padding: 2,
              background:
                'radial-gradient(circle at top left, rgba(56,189,248,0.6), transparent 55%), radial-gradient(circle at bottom right, rgba(74,222,128,0.6), transparent 55%)',
              boxShadow:
                '0 30px 80px rgba(15,23,42,0.9), 0 0 0 1px rgba(15,23,42,0.9)',
            }}
          >
            <div
              style={{
                borderRadius: crmTheme.radii.card3d - 2,
                padding: '18px 20px',
                background: crmTheme.colors.cardInner,
                border: '1px solid rgba(15,23,42,0.9)',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Accent gradient overlay */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background: activeCard.accent,
                  opacity: 0.16,
                  mixBlendMode: 'screen',
                  pointerEvents: 'none',
                }}
              />

              {/* Top Row: brand + logo placeholder */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  position: 'relative',
                  zIndex: 1,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: 11,
                      textTransform: 'uppercase',
                      letterSpacing: 2,
                      color: crmTheme.colors.textSub,
                    }}
                  >
                    Credit Card Partner
                  </div>
                  <div
                    style={{
                      marginTop: 4,
                      fontSize: 18,
                      fontWeight: 700,
                    }}
                  >
                    {activeCard.brand}
                  </div>
                </div>

                {/* Fake card image placeholder like PaisaBazaar */}
                <div
                  style={{
                    width: 120,
                    height: 72,
                    borderRadius: 16,
                    background: activeCard.accent,
                    boxShadow: '0 14px 30px rgba(15,23,42,0.8)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: '8px 10px',
                  }}
                >
                  <div
                    style={{
                      width: 26,
                      height: 18,
                      borderRadius: 6,
                      background: 'rgba(15,23,42,0.85)',
                    }}
                  />
                  <div
                    style={{
                      fontSize: 10,
                      fontWeight: 600,
                      textAlign: 'right',
                    }}
                  >
                    {activeCard.code} CARD
                  </div>
                </div>
              </div>

              {/* Card number row */}
              <div
                style={{
                  marginTop: 20,
                  display: 'flex',
                  gap: 10,
                  fontSize: 14,
                  letterSpacing: 3,
                }}
              >
                <span>5423</span>
                <span>76••</span>
                <span>••••</span>
                <span>12•8</span>
              </div>

              {/* Name + validity */}
              <div
                style={{
                  marginTop: 16,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  fontSize: 11,
                }}
              >
                <div>
                  <div style={{ opacity: 0.7 }}>Card Name</div>
                  <div style={{ marginTop: 2, fontWeight: 600 }}>
                    {activeCard.cardName}
                  </div>
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ opacity: 0.7 }}>Ideal Segment</div>
                  <div style={{ marginTop: 2 }}>{activeCard.segment}</div>
                </div>
              </div>

              {/* Tag strip */}
              <div
                style={{
                  marginTop: 18,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 6,
                  padding: '4px 10px',
                  borderRadius: crmTheme.radii.pill,
                  background: 'rgba(15,23,42,0.9)',
                  border: `1px solid ${crmTheme.colors.borderSoft}`,
                  fontSize: 11,
                }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: 999,
                    background: crmTheme.colors.neonGreen,
                  }}
                />
                <span>{activeCard.tag}</span>
              </div>
            </div>
          </div>

          {/* TOP BUTTON STRIP (5) */}
          <div
            style={{
              marginTop: 16,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {topButtons.map((label) => (
              <button
                key={label}
                type="button"
                style={{
                  padding: '8px 14px',
                  borderRadius: crmTheme.radii.button,
                  border: `1px solid rgba(148,163,184,0.5)`,
                  background:
                    'radial-gradient(circle at top left, rgba(56,189,248,0.32), transparent 60%)',
                  color: crmTheme.colors.textMain,
                  fontSize: 11,
                  cursor: 'pointer',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                }}
              >
                {label}
              </button>
            ))}
          </div>

          {/* BOTTOM BUTTON STRIP (5) */}
          <div
            style={{
              marginTop: 10,
              display: 'flex',
              flexWrap: 'wrap',
              gap: 8,
            }}
          >
            {bottomButtons.map((label) => (
              <button
                key={label}
                type="button"
                style={{
                  padding: '7px 13px',
                  borderRadius: crmTheme.radii.button,
                  border: '1px solid rgba(31,41,55,0.9)',
                  background: 'rgba(15,23,42,0.95)',
                  color: crmTheme.colors.textSub,
                  fontSize: 11,
                  cursor: 'pointer',
                }}
              >
                {label}
              </button>
            ))}
          </div>
        </div>

        {/* RIGHT: PRODUCT + COMMERCIALS PANEL + APPLY CTA */}
        <div
          style={{
            borderRadius: crmTheme.radii.panel,
            padding: 16,
            background: crmTheme.colors.surface,
            border: `1px solid ${crmTheme.colors.borderSoft}`,
            boxShadow: '0 18px 40px rgba(15,23,42,0.9)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
              gap: 10,
            }}
          >
            <div>
              <div style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                Selected Brand
              </div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>{activeCard.brand}</div>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div
                style={{
                  padding: '6px 10px',
                  borderRadius: crmTheme.radii.pill,
                  border: `1px solid ${crmTheme.colors.borderStrong}`,
                  fontSize: 11,
                  color: crmTheme.colors.neonBlue,
                }}
              >
                Live Product • CRM View
              </div>
              <button
                type="button"
                onClick={() => setShowApply(true)}
                style={{
                  padding: '8px 14px',
                  borderRadius: crmTheme.radii.button,
                  border: 'none',
                  background:
                    'linear-gradient(135deg,rgba(56,189,248,1),rgba(168,85,247,1))',
                  color: '#0b1120',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 10px 25px rgba(15,23,42,0.8)',
                }}
              >
                Apply Now
              </button>
            </div>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2,minmax(0,1fr))',
              gap: 10,
              marginTop: 10,
            }}
          >
            <div
              style={{
                borderRadius: 12,
                padding: 10,
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(31,41,55,0.9)',
                fontSize: 11,
              }}
            >
              <div style={{ opacity: 0.7 }}>Joining Fee</div>
              <div style={{ marginTop: 4, fontWeight: 600 }}>
                {activeCard.joiningFee}
              </div>
            </div>
            <div
              style={{
                borderRadius: 12,
                padding: 10,
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(31,41,55,0.9)',
                fontSize: 11,
              }}
            >
              <div style={{ opacity: 0.7 }}>Annual Fee</div>
              <div style={{ marginTop: 4, fontWeight: 600 }}>{activeCard.annualFee}</div>
            </div>
            <div
              style={{
                borderRadius: 12,
                padding: 10,
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(31,41,55,0.9)',
                fontSize: 11,
              }}
            >
              <div style={{ opacity: 0.7 }}>Ideal Customer Segment</div>
              <div style={{ marginTop: 4 }}>{activeCard.segment}</div>
            </div>
            <div
              style={{
                borderRadius: 12,
                padding: 10,
                background: 'rgba(15,23,42,0.95)',
                border: '1px solid rgba(31,41,55,0.9)',
                fontSize: 11,
              }}
            >
              <div style={{ opacity: 0.7 }}>Tag / Positioning</div>
              <div style={{ marginTop: 4 }}>{activeCard.tag}</div>
            </div>
          </div>

          <div style={{ marginTop: 14 }}>
            <div style={{ fontSize: 11, color: crmTheme.colors.textSub }}>Usage Notes</div>
            <p
              style={{
                marginTop: 4,
                fontSize: 11,
                lineHeight: 1.5,
                color: crmTheme.colors.textSub,
              }}
            >
              Use the top bar buttons to open internal CRM views for this product
              (details, variants, content, earnings, customer mapping). Use the
              bottom bar buttons for training content – whom to sell, how it works,
              T&C & FAQ.
            </p>
          </div>
        </div>
      </div>

      {/* KYC / APPLY FORM PANEL */}
      {showApply && (
        <div
          style={{
            marginTop: 26,
            borderRadius: crmTheme.radii.panel,
            padding: 18,
            background: '#020617',
            border: `1px solid ${crmTheme.colors.borderSoft}`,
            boxShadow: '0 18px 40px rgba(15,23,42,0.9)',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: 10,
            }}
          >
            <div>
              <div style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                Apply Now – KYC for
              </div>
              <div style={{ fontSize: 16, fontWeight: 700 }}>
                {activeCard.brand} • {activeCard.cardName}
              </div>
            </div>
            <button
              type="button"
              onClick={() => setShowApply(false)}
              style={{
                padding: '6px 10px',
                borderRadius: crmTheme.radii.button,
                border: '1px solid rgba(148,163,184,0.5)',
                background: 'rgba(15,23,42,0.9)',
                color: crmTheme.colors.textSub,
                fontSize: 11,
                cursor: 'pointer',
              }}
            >
              Close
            </button>
          </div>

          <form onSubmit={handleSubmit}>
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))',
                gap: 12,
              }}
            >
              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  Full Name *
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                  placeholder="As per PAN / Aadhaar"
                />
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="mobile"
                  value={formData.mobile}
                  onChange={handleMobileChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                  placeholder="10 digit mobile"
                  maxLength={10}
                />
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  Email ID
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                  placeholder="Optional but recommended"
                />
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  PAN Number *
                </label>
                <input
                  type="text"
                  name="pan"
                  value={formData.pan}
                  onChange={handlePanChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                    letterSpacing: 2,
                  }}
                  placeholder="ABCDE1234F"
                  maxLength={10}
                />
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                />
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  Monthly Net Income (₹)
                </label>
                <input
                  type="number"
                  name="monthlyIncome"
                  value={formData.monthlyIncome}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                  placeholder="Example: 35000"
                  min={0}
                />
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  City
                </label>
                <input
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                  placeholder="City / Town"
                />
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  Employment Type *
                </label>
                <select
                  name="employmentType"
                  value={formData.employmentType}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                >
                  <option value="">Select</option>
                  <option value="salaried">Salaried</option>
                  <option value="self">Self Employed</option>
                  <option value="business">Business Owner</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
                  Existing Credit Card
                </label>
                <select
                  name="existingCard"
                  value={formData.existingCard}
                  onChange={handleInputChange}
                  style={{
                    width: '100%',
                    marginTop: 4,
                    padding: '7px 9px',
                    borderRadius: 8,
                    border: '1px solid rgba(31,41,55,0.9)',
                    background: 'rgba(15,23,42,0.95)',
                    color: crmTheme.colors.textMain,
                    fontSize: 12,
                  }}
                >
                  <option value="">Select (optional)</option>
                  <option value="none">No existing card</option>
                  <option value="sbi">SBI Card</option>
                  <option value="hdfc">HDFC Bank</option>
                  <option value="icici">ICICI Bank</option>
                  <option value="axis">Axis Bank</option>
                  <option value="other">Other bank</option>
                </select>
              </div>
            </div>

            <div
              style={{
                marginTop: 14,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'flex-start',
                gap: 12,
                flexWrap: 'wrap',
              }}
            >
              <label
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: 6,
                  fontSize: 11,
                  color: crmTheme.colors.textSub,
                  maxWidth: 520,
                  cursor: 'pointer',
                }}
              >
                <input
                  type="checkbox"
                  name="consent"
                  checked={formData.consent}
                  onChange={handleInputChange}
                  style={{ marginTop: 2 }}
                />
                <span>
                  I confirm that the above information is correct and I authorise Indokona
                  Credit Bazar team to contact me and share my details with the selected
                  bank / NBFC partner for credit card application.
                </span>
              </label>

              <button
                type="submit"
                style={{
                  padding: '9px 18px',
                  borderRadius: crmTheme.radii.button,
                  border: 'none',
                  background:
                    'linear-gradient(135deg,rgba(56,189,248,1),rgba(74,222,128,1))',
                  color: '#0b1120',
                  fontSize: 12,
                  fontWeight: 600,
                  cursor: 'pointer',
                  boxShadow: '0 12px 30px rgba(15,23,42,0.9)',
                }}
              >
                Submit Application
              </button>
            </div>

            {submitMessage && (
              <div
                style={{
                  marginTop: 10,
                  fontSize: 11,
                  color: submitMessage.startsWith('✅')
                    ? crmTheme.colors.neonGreen
                    : '#f97316',
                }}
              >
                {submitMessage}
              </div>
            )}
          </form>
        </div>
      )}

      {/* BOTTOM: BRAND SELECTOR STRIP (LIKE CAROUSEL GRID) */}
      <div
        style={{
          marginTop: 26,
          borderRadius: crmTheme.radii.panel,
          padding: 14,
          background: '#020617',
          border: `1px solid ${crmTheme.colors.borderSoft}`,
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginBottom: 10,
          }}
        >
          <div style={{ fontSize: 12, color: crmTheme.colors.textSub }}>
            Click to switch brand
          </div>
          <div style={{ fontSize: 11, color: crmTheme.colors.textSub }}>
            Active:{' '}
            <span style={{ color: crmTheme.colors.neonBlue }}>{activeCard.code}</span>
          </div>
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))',
            gap: 10,
          }}
        >
          {brandCards.map((card) => {
            const isActive = card.code === activeCode;
            return (
              <button
                key={card.code}
                type="button"
                onClick={() => setActiveCode(card.code)}
                style={{
                  textAlign: 'left',
                  padding: '10px 10px',
                  borderRadius: 14,
                  border: isActive
                    ? `1px solid ${crmTheme.colors.borderStrong}`
                    : '1px solid rgba(31,41,55,0.9)',
                  background: isActive ? card.accent : 'rgba(15,23,42,0.95)',
                  color: isActive ? '#0b1120' : crmTheme.colors.textMain,
                  fontSize: 11,
                  boxShadow: isActive
                    ? '0 14px 30px rgba(15,23,42,0.9)'
                    : '0 8px 18px rgba(15,23,42,0.7)',
                  cursor: 'pointer',
                  transition: 'all 0.18s ease-out',
                }}
              >
                <div style={{ fontWeight: 600 }}>{card.code}</div>
                <div style={{ marginTop: 2 }}>{card.brand}</div>
                <div
                  style={{
                    marginTop: 4,
                    fontSize: 10,
                    opacity: isActive ? 0.85 : 0.65,
                  }}
                >
                  {card.tag}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CreditCardCRMModule;
