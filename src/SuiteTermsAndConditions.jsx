import React from 'react';

const SuiteTermsAndConditions = () => {

  // --- Inline CSS Styles (Styles object) ---
  const styles = {
    container: {
      fontFamily: "'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '1000px',
      margin: '40px auto',
      padding: '0 30px',
      backgroundColor: '#ffffff',
      borderRadius: '15px',
      boxShadow: '0 10px 30px rgba(0, 0, 0, 0.08)',
    },
    header: {
      backgroundColor: '#17a2b8', // Info/Cyan theme for T&C
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
    },
    title: {
      fontSize: '3rem',
      fontWeight: '800',
      marginBottom: '5px',
    },
    updatedText: {
      fontSize: '0.9rem',
      opacity: '0.9',
    },
    intro: {
      fontSize: '1.1rem',
      lineHeight: '1.7',
      color: '#495057',
      padding: '20px 0',
      textAlign: 'center',
      borderBottom: '1px solid #e9ecef',
      marginBottom: '30px',
    },
    section: {
      marginBottom: '30px',
      padding: '15px 0',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#17a2b8',
      borderLeft: '4px solid #ffc107',
      paddingLeft: '15px',
      marginBottom: '20px',
      fontWeight: '700',
    },
    subTitle: {
      fontSize: '1.3rem',
      color: '#343a40',
      marginBottom: '10px',
      fontWeight: '600',
    },
    list: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    listItem: {
      padding: '10px 0',
      display: 'flex',
      alignItems: 'center',
      fontSize: '1rem',
    },
    checkIcon: {
      color: '#28a745', // Green for positive/duty
      marginRight: '10px',
      fontSize: '1.2rem',
    },
    crossIcon: {
      color: '#dc3545', // Red for restrictions
      marginRight: '10px',
      fontSize: '1.2rem',
    },
    cardGrid: {
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
        gap: '20px',
        marginTop: '20px',
    },
    serviceCard: {
        backgroundColor: '#eaf8fa',
        padding: '15px',
        borderRadius: '8px',
        borderLeft: '4px solid #17a2b8',
        fontWeight: '500',
    },
    ruleCard: {
      backgroundColor: '#f8d7da',
      padding: '20px',
      borderRadius: '8px',
      border: '1px solid #dc3545',
    },
    noteText: {
        backgroundColor: '#ffeeba',
        color: '#856404',
        padding: '10px 15px',
        borderRadius: '5px',
        marginTop: '15px',
        fontSize: '0.9rem',
        fontWeight: '500',
    },
    contactBlock: {
        backgroundColor: '#f8f9fa',
        padding: '25px',
        borderRadius: '10px',
        textAlign: 'center',
        border: '1px solid #ced4da',
    },
    contactDetail: {
        fontSize: '1.2rem',
        fontWeight: '600',
        margin: '10px 0',
    },
    footer: {
      textAlign: 'center',
      padding: '20px 0',
      color: '#6c757d',
      borderTop: '1px solid #e9ecef',
      marginTop: '30px',
    }
  };
  // --- End of Styles object ---

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>📜 TERMS & CONDITIONS</h1>
        <p>Indokona Suite</p>
        <p style={styles.updatedText}>Last Updated: December 2025</p>
      </header>

      {/* Intro */}
      <p style={styles.intro}>
        By accessing Indokona Suite, you agree to these Terms and Conditions. Please read them carefully.
      </p>

      {/* Section 1: Eligibility */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>1. Eligibility</h2>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.checkIcon}>•</span> You must be **18+**</li>
          <li style={styles.listItem}><span style={styles.checkIcon}>•</span> Only **verified businesses** can use the system</li>
          <li style={styles.listItem}><span style={styles.checkIcon}>•</span> **KYC is mandatory** for posting & CRM access</li>
        </ul>
      </div>

      {/* Section 2: Services Provided */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>2. Services Provided</h2>
        <p style={styles.subTitle}>The platform includes the following key utilities:</p>
        <div style={styles.cardGrid}>
            {[
                "KYC Verification", 
                "Verified Posting Hub", 
                "AI Business Builder", 
                "Ads Automation Hub", 
                "CRM & Lead Management", 
                "Proposal/Pitch Deck Generator", 
                "Admin Control Panel", 
                "White-label integration"
            ].map((service, index) => (
                <div key={index} style={styles.serviceCard}>
                    {service}
                </div>
            ))}
        </div>
      </div>

      {/* Section 3: Account Responsibilities */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>3. Account Responsibilities</h2>
        <p style={styles.subTitle}>Users agree to:</p>
        <ul style={styles.list}>
          <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Provide correct KYC details</li>
          <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Not misuse posting and CRM features</li>
          <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Avoid misleading ads or spam</li>
          <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Protect login credentials</li>
          <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Follow Indian IT and marketing laws</li>
        </ul>
      </div>

      {/* Section 4 & 5: Rules (Side-by-Side View) */}
      <div style={{ display: 'flex', gap: '30px', marginBottom: '30px' }}>
        
        {/* Section 4: Plan Usage Rules */}
        <div style={{ flex: 1, ...styles.section }}>
            <h2 style={styles.sectionTitle}>4. Plan Usage Rules</h2>
            <ul style={styles.list}>
              <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Plans are **non-transferable**</li>
              <li style={styles.listItem}><span style={styles.checkIcon}>•</span> White-label access only for eligible plans</li>
              <li style={styles.listItem}><span style={styles.checkIcon}>•</span> AI content generated belongs to the business owner</li>
              <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Illegal or misleading use results in **termination**</li>
            </ul>
        </div>

        {/* Section 5: Posting & Community Rules */}
        <div style={{ flex: 1, ...styles.section }}>
            <h2 style={styles.sectionTitle}>5. Posting & Community Rules</h2>
            <div style={styles.ruleCard}>
                <p style={{ fontWeight: '600', color: '#dc3545' }}>You must NOT:</p>
                <ul style={styles.list}>
                  <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> Post copyrighted material</li>
                  <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> Share fake business claims</li>
                  <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> Upload adult, harmful, or misleading content</li>
                  <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> Violate digital ad policies</li>
                  <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> Promote hate or violence</li>
                </ul>
            </div>
            <p style={styles.noteText}>
                <span style={{ fontWeight: 'bold' }}>Note:</span> Admin can remove content without notice.
            </p>
        </div>
      </div>
      
      {/* Section 6, 7, 8: Financials and Liability */}
      <div style={styles.cardGrid}>
        
        {/* 6. Payments & Billing */}
        <div style={{...styles.section, border: '1px solid #ccc', borderRadius: '10px', padding: '15px'}}>
            <h2 style={styles.subTitle}>6. Payments & Billing</h2>
            <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.checkIcon}>•</span> All prices in INR</li>
                <li style={styles.listItem}><span style={styles.checkIcon}>•</span> Payment gateways are secure</li>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> No refunds after activation (See Policy)</li>
                <li style={styles.listItem}><span style={styles.checkIcon}>•</span> Subscription may auto-renew (user-controlled)</li>
            </ul>
        </div>

        {/* 7. Liability Limit */}
        <div style={{...styles.section, border: '1px solid #ccc', borderRadius: '10px', padding: '15px'}}>
            <h2 style={styles.subTitle}>7. Liability Limit</h2>
            <p style={{ fontWeight: '600', color: '#dc3545' }}>Indokona is not liable for:</p>
            <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Loss of revenue</li>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Wrong decisions made by user</li>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Downtime due to third-party APIs</li>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Errors due to user-provided data</li>
            </ul>
        </div>
        
        {/* 8. Termination */}
        <div style={{...styles.section, border: '1px solid #ccc', borderRadius: '10px', padding: '15px'}}>
            <h2 style={styles.subTitle}>8. Termination</h2>
            <p style={{ fontWeight: '600' }}>Your account can be terminated if:</p>
            <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Fake KYC found</li>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Policy violation occurs</li>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Fraudulent activity detected</li>
                <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Misuse of white-label or posting hub</li>
            </ul>
            <p style={{ fontStyle: 'italic', color: '#dc3545', marginTop: '10px' }}>
                **No refund** is provided for terminated accounts.
            </p>
        </div>
      </div>
      
      {/* Section 9: Contact */}
      <div style={styles.section}>
        <h2 style={styles.sectionTitle}>9. Contact</h2>
        <div style={styles.contactBlock}>
            <p style={styles.contactDetail}>
                📧 Email: <a href="mailto:indokonaoutsourcing@gmail.com" style={{ color: '#17a2b8', textDecoration: 'none' }}>indokonaoutsourcing@gmail.com</a>
            </p>
            <p style={styles.contactDetail}>
                📞 Phone: <a href="tel:+918800905879" style={{ color: '#17a2b8', textDecoration: 'none' }}>+91 88009 05879</a>
            </p>
        </div>
      </div>

      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. | All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default SuiteTermsAndConditions;