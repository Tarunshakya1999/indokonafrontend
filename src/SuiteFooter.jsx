import React from 'react';

const SuiteFooter = () => {

  // --- Inline CSS Styles (Styles object) ---
  const styles = {
    footer: {
      backgroundColor: '#343a40', // Dark background for contrast
      color: '#f8f9fa', // Light text color
      padding: '40px 20px',
      borderTop: '5px solid #007bff', // Highlight color matching the brand
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      gap: '30px',
    },
    column: {
      flex: 1,
      minWidth: '200px',
    },
    brand: {
      fontSize: '1.8rem',
      fontWeight: '700',
      color: '#007bff', // Brand highlight color
      marginBottom: '10px',
    },
    tagline: {
      fontSize: '0.9rem',
      color: '#ced4da',
      lineHeight: '1.5',
    },
    heading: {
      fontSize: '1.1rem',
      fontWeight: '600',
      color: 'white',
      marginBottom: '15px',
      borderBottom: '2px solid #495057',
      paddingBottom: '5px',
    },
    list: {
      listStyleType: 'none',
      padding: 0,
    },
    link: {
      color: '#ced4da',
      textDecoration: 'none',
      display: 'block',
      padding: '5px 0',
      transition: 'color 0.3s, padding-left 0.3s',
      fontSize: '0.95rem',
    },
    linkHover: {
      color: '#ffc107', // Gold/Yellow hover effect
      paddingLeft: '5px',
    },
    contactInfo: {
      marginBottom: '10px',
      display: 'flex',
      alignItems: 'center',
      fontSize: '0.9rem',
    },
    icon: {
      marginRight: '10px',
      color: '#007bff',
    },
    socialIconContainer: {
      display: 'flex',
      gap: '15px',
      marginTop: '15px',
    },
    socialIcon: {
      color: 'white',
      fontSize: '1.5rem',
      transition: 'color 0.3s, transform 0.3s',
    },
    socialIconHover: {
      color: '#007bff',
      transform: 'scale(1.1)',
    },
    copyright: {
      textAlign: 'center',
      marginTop: '30px',
      paddingTop: '20px',
      borderTop: '1px solid #495057',
      fontSize: '0.85rem',
      color: '#adb5bd',
    },
  };
  // --- End of Styles object ---
  
  // State to manage hover effects
  const [hoveredLink, setHoveredLink] = React.useState(null);
  const [hoveredSocial, setHoveredSocial] = React.useState(null);

  // Helper function to render Link with hover state
  const renderLink = (text, href, index) => (
    <a 
      href={href} 
      style={{ 
        ...styles.link, 
        ...(hoveredLink === index ? styles.linkHover : {}) 
      }}
      onMouseEnter={() => setHoveredLink(index)}
      onMouseLeave={() => setHoveredLink(null)}
    >
      {text}
    </a>
  );

  // Helper function to render Social Icon with hover state
  const renderSocialIcon = (IconClass, index) => (
    <a 
      href="#" 
      style={{ textDecoration: 'none' }}
      onMouseEnter={() => setHoveredSocial(index)}
      onMouseLeave={() => setHoveredSocial(null)}
    >
      <i 
        className={IconClass} 
        style={{ 
          ...styles.socialIcon,
          ...(hoveredSocial === index ? styles.socialIconHover : {})
        }}
      ></i>
    </a>
  );


  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        {/* Column 1: Brand Info */}
        <div style={styles.column}>
          <div style={styles.brand}>Indokona Suite</div>
          <p style={styles.tagline}>
            The all-in-one verified business operating system for India's startups, agencies, and enterprises.
          </p>
          <div style={styles.socialIconContainer}>
            {/* Using Bootstrap Icons classes */}
            {renderSocialIcon("bi bi-facebook", 1)}
            {renderSocialIcon("bi bi-instagram", 2)}
            {renderSocialIcon("bi bi-linkedin", 3)}
            {renderSocialIcon("bi bi-twitter-x", 4)}
          </div>
        </div>

        {/* Column 2: Quick Links (Policy Links) - UPDATED LINKS HERE */}
        <div style={styles.column}>
          <div style={styles.heading}>Important Links</div>
          <ul style={styles.list}>
            {/* 1. Privacy Policy Link */}
            <li>{renderLink("Privacy Policy", "/suiteprivacypolicy", 5)}</li> 
            {/* 2. Refund Policy Link */}
            <li>{renderLink("Refund Policy", "/suiterefundpolicy", 6)}</li>
            {/* 3. Terms & Conditions Link */}
            <li>{renderLink("Terms & Conditions", "/suitetermsandconditions", 7)}</li>
            {/* 4. Disclaimer Link */}
            <li>{renderLink("Disclaimer (Meta Approved)", "/suitedisclaimer", 8)}</li>
            
          </ul>
        </div>

        {/* Column 3: Tools & Features */}
        {/* <div style={styles.column}>
          <div style={styles.heading}>Platform Features</div>
          <ul style={styles.list}>
            <li>{renderLink("AI Business Builder", "#ai-builder", 10)}</li>
            <li>{renderLink("Verified Posting Hub", "#posting-hub", 11)}</li>
            <li>{renderLink("CRM & Lead Management", "#crm", 12)}</li>
            <li>{renderLink("Ads Automation", "#ads-auto", 13)}</li>
            <li>{renderLink("White-Label Integration", "#whitelabel", 14)}</li>
          </ul>
        </div> */}

        {/* Column 4: Contact & Address */}
        <div style={styles.column}>
          <div style={styles.heading}>Reach Us</div>
          <div style={styles.contactInfo}>
            <i className="bi bi-geo-alt-fill" style={styles.icon}></i> 
            Business Address (Pvt. Ltd.)
          </div>
          <div style={styles.contactInfo}>
            <i className="bi bi-envelope-fill" style={styles.icon}></i> 
            <a href="mailto:indokonaoutsourcing@gmail.com" style={{ ...styles.link, padding: 0 }}>indokonaoutsourcing@gmail.com</a>
          </div>
          <div style={styles.contactInfo}>
            <i className="bi bi-telephone-fill" style={styles.icon}></i> 
            <a href="tel:+918800905879" style={{ ...styles.link, padding: 0 }}>+91 88009 05879</a>
          </div>
          <div style={styles.contactInfo}>
            <i className="bi bi-calendar-check" style={styles.icon}></i> 
            Last Updated: Dec 2025
          </div>
        </div>
      </div>
      
      {/* Copyright Bar */}
      <div style={styles.copyright}>
        &copy; {new Date().getFullYear()} Indokona Credit Bazar Pvt. Ltd. | All rights reserved.
      </div>
    </footer>
  );
};

export default SuiteFooter;