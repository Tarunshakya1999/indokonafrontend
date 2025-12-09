import React from "react";

// Assuming you have imported Bootstrap CSS in your main app file (e.g., index.js or App.js)

export default function TC2() {
  return (
    // Use a Bootstrap container for centering and padding
    <>
      <div className="container my-5 tc-container">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-primary">Terms & Conditions</h1>
          <p className="lead text-muted">
            Indokona Tech Solutions | Last Updated:{" "}
            <span className="badge bg-secondary">2025</span>
          </p>
          <hr />
          <p className="alert alert-info">
            Welcome to **Indokona Tech Solutions**. By accessing our website or
            using our services, you agree to be bound by the following Terms &
            Conditions. If you do not agree, please do not use our services.
          </p>
        </header>

        {/* Main Content (Terms Sections) */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* Section 1: Company Information */}
            <section className="card shadow-sm mb-4">
              <div className="card-header bg-light fw-bold h5">
                1. Company Information
              </div>
              <div className="card-body">
                <p>
                  Indokona Tech Solutions is a digital service provider
                  offering:
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">💻 Software Development</li>
                  <li className="list-group-item">🌐 Website Development</li>
                  <li className="list-group-item">
                    📱 Mobile Application Development
                  </li>
                  <li className="list-group-item">
                    📈 SEO & Digital Marketing
                  </li>
                  <li className="list-group-item">💼 CRM Solutions</li>
                  <li className="list-group-item">🔗 API Integration</li>
                  <li className="list-group-item">🎨 Graphic & Logo Design</li>
                </ul>
              </div>
            </section>

            {/* Section 2: Use of Website */}
            <section className="card shadow-sm mb-4">
              <div className="card-header bg-light fw-bold h5">
                2. Use of Website
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    The content on this website is for general information only.
                  </li>
                  <li>
                    You agree not to **misuse**, hack, copy, or disrupt our
                    website or services.
                  </li>
                  <li>
                    Unauthorized use of this website may give rise to a claim
                    for damages.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 3: Service Agreement */}
            <section className="card shadow-sm mb-4">
              <div className="card-header bg-light fw-bold h5">
                3. Service Agreement
              </div>
              <div className="card-body">
                <ul>
                  <li>
                    All services are provided based on mutually agreed **project
                    scope, pricing, and timelines**.
                  </li>
                  <li>
                    Any changes in requirements after project approval may
                    result in **additional charges**.
                  </li>
                  <li>
                    Timelines may vary depending on client feedback and content
                    availability.
                  </li>
                </ul>
              </div>
            </section>

            {/* Section 4, 5, 6, 7, 8, 9, 10, 11 (Simplified Block) */}
            <div className="accordion" id="termsAccordion">
              {/* Payments & Billing */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingFour">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFour"
                    aria-expanded="false"
                    aria-controls="collapseFour"
                  >
                    4. Payments & Billing
                  </button>
                </h2>
                <div
                  id="collapseFour"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFour"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        **Advance payment** is mandatory before starting any
                        project.
                      </li>
                      <li>
                        Payments must be completed as per agreed milestones.
                      </li>
                      <li>
                        Non-payment may result in suspension or **termination**
                        of services.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Intellectual Property Rights */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingFive">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseFive"
                    aria-expanded="false"
                    aria-controls="collapseFive"
                  >
                    5. Intellectual Property Rights
                  </button>
                </h2>
                <div
                  id="collapseFive"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingFive"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        All designs, code, and content remain the property of
                        Indokona Tech Solutions until **full payment is
                        received**.
                      </li>
                      <li>
                        After full payment, ownership of final deliverables will
                        be transferred to the client.
                      </li>
                      <li>
                        We reserve the right to showcase completed projects in
                        our portfolio.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Client Responsibilities */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingSix">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSix"
                    aria-expanded="false"
                    aria-controls="collapseSix"
                  >
                    6. Client Responsibilities
                  </button>
                </h2>
                <div
                  id="collapseSix"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSix"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        Clients must provide accurate information, content, and
                        **approvals on time**.
                      </li>
                      <li>
                        Indokona Tech Solutions is not responsible for delays
                        caused due to client-side issues.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Third-Party Services */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingSeven">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseSeven"
                    aria-expanded="false"
                    aria-controls="collapseSeven"
                  >
                    7. Third-Party Services
                  </button>
                </h2>
                <div
                  id="collapseSeven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingSeven"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        We may integrate third-party tools or services such as
                        hosting providers, APIs, or payment gateways.
                      </li>
                      <li>
                        We are **not responsible** for any downtime, errors, or
                        policy changes of third-party services.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Limitation of Liability */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingEight">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEight"
                    aria-expanded="false"
                    aria-controls="collapseEight"
                  >
                    8. Limitation of Liability
                  </button>
                </h2>
                <div
                  id="collapseEight"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEight"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        Indokona Tech Solutions shall not be liable for any
                        indirect, incidental, or **consequential damages**.
                      </li>
                      <li>
                        Our maximum liability will not exceed the total amount
                        paid by the client for the service.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Termination of Services */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingNine">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseNine"
                    aria-expanded="false"
                    aria-controls="collapseNine"
                  >
                    9. Termination of Services
                  </button>
                </h2>
                <div
                  id="collapseNine"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingNine"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        We reserve the right to terminate services if the client
                        violates these Terms & Conditions.
                      </li>
                      <li>
                        No refunds will be provided for work already completed.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Governing Law */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingTen">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseTen"
                    aria-expanded="false"
                    aria-controls="collapseTen"
                  >
                    10. Governing Law
                  </button>
                </h2>
                <div
                  id="collapseTen"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingTen"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <p>
                      These Terms & Conditions shall be governed by the laws of
                      **India**. Any disputes shall be subject to **Indian
                      jurisdiction**.
                    </p>
                  </div>
                </div>
              </div>

              {/* Changes to Terms */}
              <div className="accordion-item mb-2">
                <h2 className="accordion-header" id="headingEleven">
                  <button
                    className="accordion-button collapsed fw-bold"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapseEleven"
                    aria-expanded="false"
                    aria-controls="collapseEleven"
                  >
                    11. Changes to Terms
                  </button>
                </h2>
                <div
                  id="collapseEleven"
                  className="accordion-collapse collapse"
                  aria-labelledby="headingEleven"
                  data-bs-parent="#termsAccordion"
                >
                  <div className="accordion-body">
                    <ul>
                      <li>
                        Indokona Tech Solutions may update these Terms &
                        Conditions at any time without prior notice.
                      </li>
                      <li>
                        Continued use of services constitutes acceptance of
                        **updated terms**.
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            {/* End of Accordion */}

            {/* Section 12: Contact Us */}
            <section className="card shadow-lg bg-primary text-white mt-5">
              <div className="card-body text-center">
                <h3 className="card-title mb-3">12. Contact Us 📧</h3>
                <p className="card-text">
                  For any questions regarding these Terms & Conditions, please
                  reach out:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="fw-bold">Email:</span>{" "}
                    <a
                      href="mailto:contact@indokona.com"
                      className="text-warning"
                    >
                      indokonaoutsourcing@gmail.com
                    </a>
                  </li>
                  <li>
                    <span className="fw-bold">Website:</span>{" "}
                    <a
                      href="http://www.indokona.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-warning"
                    >
                      www.indokona.com
                    </a>
                  </li>
                </ul>
              </div>
            </section>
          </div>
        </div>
      </div>
      <style>{`/* Assuming you link this CSS file to your component/project */

.tc-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

/* Custom styles for the card headers */
.card-header {
    /* Use a slightly darker color for better separation */
    background-color: #f1f1f1 !important; 
    border-bottom: 2px solid var(--bs-primary);
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
}

/* Style for the initial alert box */
.alert-info {
    border-left: 5px solid var(--bs-info);
    background-color: #e9f7fe;
    padding: 15px;
}

/* Style for lists within the cards */
.card-body ul {
    padding-left: 20px;
    margin-bottom: 0;
}

.list-group-item {
    /* Ensure the list items look clean */
    border: none;
    padding: 0.5rem 0;
}

.accordion-button {
    /* Customize accordion buttons for a flatter, modern look */
    background-color: #ffffff;
    color: #333;
    border-radius: 0.25rem !important;
}

.accordion-button:not(.collapsed) {
    color: var(--bs-primary);
    background-color: #f8f9fa; /* Light background when open */
    box-shadow: none;
}`}</style>
    </>
  );
}
