import React from 'react';

const SuiteDisclaimer = () => {

  // --- Inline CSS Styles (Styles object) ---
  const styles = {
    container: {
      fontFamily: "'Roboto', Arial, sans-serif",
      maxWidth: '850px',
      margin: '40px auto',
      padding: '0 25px',
      backgroundColor: '#fff',
      borderRadius: '12px',
      boxShadow: '0 6px 15px rgba(0, 0, 0, 0.1)',
      border: '1px solid #ffc107', // Warning theme border
    },
    header: {
      backgroundColor: '#ffc107', // Warning/Yellow theme for Disclaimer
      color: '#343a40',
      padding: '30px 20px',
      textAlign: 'center',
      borderTopLeftRadius: '12px',
      borderTopRightRadius: '12px',
      marginBottom: '30px',
    },
    title: {
      fontSize: '2.2rem',
      fontWeight: '700',
      marginBottom: '5px',
    },
    subtitle: {
      fontSize: '1.1rem',
      fontWeight: '500',
      marginTop: '5px',
    },
    updatedText: {
      fontSize: '0.9rem',
      opacity: '0.9',
    },
    section: {
      marginBottom: '30px',
      padding: '10px 0',
      borderBottom: '1px solid #eee',
    },
    sectionTitle: {
      fontSize: '1.6rem',
      color: '#dc3545', // Use red for high visibility sections
      borderLeft: '4px solid #ffc107',
      paddingLeft: '15px',
      marginBottom: '15px',
      fontWeight: '700',
    },
    ruleCard: {
        backgroundColor: '#fef7e6',
        padding: '20px',
        borderRadius: '8px',
        border: '1px solid #ffc107',
        marginBottom: '20px',
    },
    highlightText: {
        fontWeight: 'bold',
        color: '#dc3545',
        fontSize: '1.1rem',
    },
    list: {
      listStyleType: 'none',
      paddingLeft: '0',
    },
    listItem: {
      padding: '8px 0',
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.95rem',
      color: '#495057',
    },
    icon: {
      color: '#dc3545', // Red icon for warnings
      marginRight: '10px',
      fontSize: '1.1rem',
    },
    contactBlock: {
        backgroundColor: '#f8f9fa',
        padding: '20px',
        borderRadius: '8px',
        textAlign: 'center',
        border: '1px solid #ced4da',
    },
    contactDetail: {
        fontSize: '1.1rem',
        fontWeight: '600',
        margin: '10px 0',
        color: '#007bff',
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
        <h1 style={styles.title}>⚠️ DISCLAIMER (Meta Approved)</h1>
        <p style={styles.subtitle}>Indokona Suite</p>
        <p style={styles.updatedText}>Last Updated: December 2025</p>
      </header>

      {/* Intro */}
      <p style={{ ...styles.subtitle, padding: '0 20px', color: '#dc3545', textAlign: 'center' }}>
        This disclaimer follows Meta Ads Policy and Indian SaaS compliance standards.
      </p>

      <div style={{ padding: '0 20px' }}>
        
        {/* Section 1: No Guaranteed Results */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>1. No Guaranteed Results</h2>
          <div style={styles.ruleCard}>
            <p style={{ marginBottom: '10px' }}>
                Indokona Suite provides tools, automation, and AI systems to support business growth, but we <span style={styles.highlightText}>DO NOT guarantee:</span>
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                <div style={{ width: '50%' }}>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.icon}>✖</span> Sales results</li>
                        <li style={styles.listItem}><span style={styles.icon}>✖</span> Leads or Profit numbers</li>
                    </ul>
                </div>
                <div style={{ width: '50%' }}>
                    <ul style={styles.list}>
                        <li style={styles.listItem}><span style={styles.icon}>✖</span> Business success</li>
                        <li style={styles.listItem}><span style={styles.icon}>✖</span> Faster verification</li>
                    </ul>
                </div>
            </div>
            <p style={{ fontStyle: 'italic', marginTop: '10px', color: '#007bff' }}>
                Outcomes depend entirely on user execution and market conditions.
            </p>
          </div>
        </div>

        {/* Section 2: No Financial/Legal Advice */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>2. No Financial/Legal Advice</h2>
          <p style={{ marginBottom: '10px', fontWeight: 'bold' }}>Our tools and AI suggestions are <span style={styles.highlightText}>NOT:</span></p>
          <ul style={styles.list}>
            <li style={styles.listItem}><span style={styles.icon}>•</span> Financial advice</li>
            <li style={styles.listItem}><span style={styles.icon}>•</span> Legal advice or Tax advice</li>
            <li style={styles.listItem}><span style={styles.icon}>•</span> Investment guidance</li>
          </ul>
          <p style={{ marginTop: '10px' }}>
            Users must consult **professionals** for such matters.
          </p>
        </div>

        {/* Section 3 & 4: AI Content & Third-Party */}
        <div style={{ display: 'flex', gap: '25px' }}>
            {/* 3. AI-Generated Content */}
            <div style={{ flex: 1, ...styles.section, borderBottom: 'none' }}>
                <h2 style={{...styles.sectionTitle, fontSize: '1.4rem'}}>3. AI-Generated Content</h2>
                <ul style={styles.list}>
                    <li style={styles.listItem}><span style={styles.icon}>•</span> Provided for convenience only.</li>
                    <li style={styles.listItem}><span style={styles.icon}>•</span> Users must **review accuracy** before use.</li>
                    <li style={styles.listItem}><span style={styles.icon}>•</span> Ownership belongs to the business owner.</li>
                </ul>
            </div>
            {/* 4. Third-Party Integrations */}
            <div style={{ flex: 1, ...styles.section, borderBottom: 'none' }}>
                <h2 style={{...styles.sectionTitle, fontSize: '1.4rem'}}>4. Third-Party Integrations</h2>
                <p style={{ fontWeight: '600' }}>We are <span style={styles.highlightText}>NOT responsible for:</span></p>
                <ul style={styles.list}>
                    <li style={styles.listItem}><span style={styles.icon}>•</span> Payment gateway outages (Razorpay, Stripe)</li>
                    <li style={styles.listItem}><span style={styles.icon}>•</span> Changes in third-party pricing</li>
                    <li style={styles.listItem}><span style={styles.icon}>•</span> Government KYC API downtimes</li>
                </ul>
            </div>
        </div>

        {/* Section 5: User Responsibility */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>5. User Responsibility</h2>
          <p style={{ fontWeight: 'bold' }}>Users are responsible for:</p>
          <ul style={styles.list}>
            <li style={styles.listItem}><span style={{...styles.icon, color: '#28a745'}}>✓</span> Verifying accuracy of posts</li>
            <li style={styles.listItem}><span style={{...styles.icon, color: '#28a745'}}>✓</span> Ensuring legal compliance</li>
            <li style={styles.listItem}><span style={{...styles.icon, color: '#28a745'}}>✓</span> Ethical use of tools</li>
            <li style={styles.listItem}><span style={{...styles.icon, color: '#28a745'}}>✓</span> Avoiding misleading claims</li>
          </ul>
        </div>

        {/* Section 6: Limitation of Liability */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>6. Limitation of Liability</h2>
          <div style={styles.ruleCard}>
            <p style={{ fontWeight: 'bold' }}>Indokona Suite is <span style={styles.highlightText}>not liable</span> for:</p>
            <ul style={styles.list}>
                <li style={styles.listItem}><span style={styles.icon}>•</span> Business losses or Client disputes</li>
                <li style={styles.listItem}><span style={styles.icon}>•</span> Data errors caused by user</li>
                <li style={styles.listItem}><span style={styles.icon}>•</span> Platform misuse</li>
                <li style={styles.listItem}><span style={styles.icon}>•</span> Downtime beyond our control</li>
            </ul>
          </div>
        </div>
        
        {/* Section 7: Contact */}
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>7. Contact for Clarification</h2>
          <div style={styles.contactBlock}>
            <p style={{ fontWeight: '500', marginBottom: '5px' }}>If you have questions about this disclaimer, contact us:</p>
            <p style={styles.contactDetail}>
                📧 Email: <a href="mailto:indokonaoutsourcing@gmail.com" style={{ color: '#007bff', textDecoration: 'none' }}>indokonaoutsourcing@gmail.com</a>
            </p>
            <p style={styles.contactDetail}>
                📞 Phone: <a href="tel:+918800905879" style={{ color: '#007bff', textDecoration: 'none' }}>+91 88009 05879</a>
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

export default SuiteDisclaimer;