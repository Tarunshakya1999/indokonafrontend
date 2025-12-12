import React from 'react';

const SuiteRefundPolicy = () => {

  // --- Inline CSS Styles (Styles object) ---
  const styles = {
    container: {
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      maxWidth: '900px',
      margin: '40px auto',
      padding: '0 20px',
      backgroundColor: '#f9f9f9',
      borderRadius: '15px',
      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
      border: '1px solid #e0e0e0',
    },
    header: {
      backgroundColor: '#dc3545', // Red/Maroon theme for Refund
      color: 'white',
      padding: '40px 20px',
      textAlign: 'center',
      borderTopLeftRadius: '15px',
      borderTopRightRadius: '15px',
      marginBottom: '30px',
    },
    title: {
      fontSize: '2.5rem',
      fontWeight: '700',
      marginBottom: '5px',
    },
    updatedText: {
      fontSize: '0.9rem',
      opacity: '0.8',
    },
    section: {
      padding: '20px 0',
    },
    sectionTitle: {
      fontSize: '1.8rem',
      color: '#dc3545',
      borderBottom: '2px solid #ffc107',
      paddingBottom: '10px',
      marginBottom: '25px',
      fontWeight: '600',
    },
    intro: {
      fontSize: '1.1rem',
      lineHeight: '1.6',
      color: '#495057',
      padding: '0 20px 20px',
    },
    card: {
      backgroundColor: 'white',
      padding: '25px',
      borderRadius: '10px',
      boxShadow: '0 4px 10px rgba(0, 0, 0, 0.05)',
      marginBottom: '20px',
      minHeight: '180px',
    },
    cardTitle: {
      fontSize: '1.3rem',
      fontWeight: '600',
      color: '#dc3545',
      borderBottom: '1px dashed #e9ecef',
      paddingBottom: '10px',
      marginBottom: '15px',
    },
    list: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    listItem: {
      padding: '8px 0',
      display: 'flex',
      alignItems: 'flex-start',
      fontSize: '0.95rem',
    },
    checkIcon: {
      color: '#28a745', // Green for allowed
      marginRight: '10px',
      fontSize: '1.2rem',
    },
    crossIcon: {
      color: '#dc3545', // Red for NOT covered
      marginRight: '10px',
      fontSize: '1.2rem',
    },
    noteBlock: {
      backgroundColor: '#fff3cd',
      color: '#856404',
      borderLeft: '5px solid #ffc107',
      padding: '15px',
      borderRadius: '5px',
      marginTop: '15px',
    },
    eligibilitySection: {
      display: 'flex',
      gap: '30px',
      marginBottom: '30px',
    },
    processCard: {
      backgroundColor: '#e6f7ff',
      border: '1px solid #007bff',
      padding: '25px',
      borderRadius: '10px',
    },
    emailLink: {
      color: '#007bff',
      fontWeight: 'bold',
      textDecoration: 'none',
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
        <h1 style={styles.title}>💸 REFUND POLICY</h1>
        <p>Indokona Suite</p>
        <p style={styles.updatedText}>Last Updated: December 2025</p>
      </header>

      {/* Intro */}
      <p style={styles.intro}>
        Indokona Suite is a cloud-based digital SaaS platform providing instant access to tools, AI features, CRM, and verified posting capabilities. 
        Since all services are non-returnable digital utilities, we follow a **strict yet fair refund policy**.
      </p>

      <div style={{ padding: '0 20px' }}>
        <div style={styles.eligibilitySection}>
            {/* Section 1: No Refund After Activation */}
            <div style={{ flex: 1 }}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>1. No Refund After Activation</h3>
                    <p style={{ fontWeight: '600', color: '#dc3545' }}>Once your account is activated and KYC is verified:</p>
                    <div style={styles.noteBlock}>
                        Refunds **cannot** be issued, because:
                        <ul style={styles.list}>
                            <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Dashboard access is instantly unlocked</li>
                            <li style={styles.listItem}><span style={styles.crossIcon}>•</span> AI tools and CRM utilities activate immediately</li>
                            <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Resources become downloadable</li>
                            <li style={styles.listItem}><span style={styles.crossIcon}>•</span> Admin verification costs are incurred</li>
                        </ul>
                    </div>
                </div>
            </div>
            
            {/* Section 2: Refund Allowed Only If */}
            <div style={{ flex: 1 }}>
                <div style={styles.card}>
                    <h3 style={styles.cardTitle}>2. Refund Allowed Only If:</h3>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Duplicate payment</li>
                        <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Payment deducted but account not activated</li>
                        <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Technical error preventing login for 48+ hours</li>
                        <li style={styles.listItem}><span style={styles.checkIcon}>✓</span> Wrong plan activated by system error</li>
                    </ul>
                </div>
            </div>
        </div>

        {/* Section 3: Subscription Not Covered */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>3. Subscription Not Covered</h2>
          <div style={styles.card}>
            <p style={{ fontWeight: '600', color: '#dc3545' }}>Refund is **NOT** provided for:</p>
            <div style={{ display: 'flex', flexWrap: 'wrap', marginTop: '15px' }}>
                <div style={{ width: '50%' }}>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> Plan already activated</li>
                        <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> KYC already processed</li>
                        <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> User misunderstanding</li>
                    </ul>
                </div>
                <div style={{ width: '50%' }}>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> CRM, AI, Ads tools already used</li>
                        <li style={styles.listItem}><span style={styles.crossIcon}>✗</span> Partial use of any plan</li>
                    </ul>
                </div>
            </div>
          </div>
        </div>

        {/* Section 4: Refund Processing */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>4. Refund Processing (If Eligible)</h2>
          <div style={styles.processCard}>
            <p style={{ fontWeight: '600', marginBottom: '15px' }}>To request a refund, email us with the following details:</p>
            
            <p style={{ marginBottom: '15px' }}>
                Email: <a href="mailto:indokonaoutsourcing@gmail.com" style={styles.emailLink}>indokonaoutsourcing@gmail.com</a>
            </p>

            <p style={{ fontWeight: 'bold', borderBottom: '1px solid #b3d9ff', paddingBottom: '5px' }}>Include:</p>
            <ul style={{ listStyleType: 'disc', paddingLeft: '20px', lineHeight: '1.8' }}>
                <li>Name</li>
                <li>Phone</li>
                <li>Plan type</li>
                <li>Payment screenshot (Proof of transaction)</li>
                <li>Issue description (Clear explanation for eligibility)</li>
            </ul>
            
            <p style={{ marginTop: '20px', fontWeight: 'bold', color: '#28a745', fontSize: '1.1rem' }}>
                <span style={{ marginRight: '5px' }}>✅</span>Approved refunds processed within **5–7 business days**.
            </p>
          </div>
        </div>
      </div>
      
      {/* Footer */}
      <footer style={styles.footer}>
        <p>&copy; {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd.</p>
      </footer>
    </div>
  );
};

export default SuiteRefundPolicy;