import React from "react";

// Assuming you have imported Bootstrap CSS in your main app file

export default function RefundPolicy() {
  return (
    <>
      
      <div className="container my-5 policy-container">
        {/* Header Section */}
        <header className="text-center mb-5">
          <h1 className="display-4 fw-bold text-success">💰 Refund Policy</h1>
          <p className="lead text-muted">
            Indokona Tech Solutions | Effective Date:{" "}
            <span className="badge bg-secondary">2025</span>
          </p>
          <hr />
          <p className="alert alert-success border-success">
            This Refund Policy outlines the terms regarding refunds for services
            provided by Indokona Tech Solutions. Our policy is designed to
            be fair, transparent, and aligned with the nature of digital,
            milestone-based projects.
          </p>
        </header>

        {/* Main Policy Sections */}
        <div className="row justify-content-center">
          <div className="col-lg-10">
            {/* 1. General Principles */}
            <section className="card shadow-sm mb-4">
              <div className="card-header bg-light fw-bold h5 text-success">
                1. General Principles
              </div>
              <div className="card-body">
                <p>
                  Due to the nature of our digital services (including
                  development, design, and marketing), once work is
                  initiated and milestones are delivered, the work
                  performed is non-reversible and generally
                  non-refundable.
                </p>
                <ul>
                  <li>
                    Payment Basis: Our services are typically billed based
                    on project milestones or advance deposits.
                  </li>
                  <li>
                    Approval Implies Acceptance: Any formal approval from
                    the client regarding a design, development phase, or
                    submitted deliverable renders the payment for that specific
                    milestone non-refundable.
                  </li>
                </ul>
              </div>
            </section>

            {/* 2. Refund Eligibility Criteria (Using Table) */}
            <section className="card shadow-sm mb-4">
              <div className="card-header bg-light fw-bold h5 text-success">
                2. Refund Eligibility Criteria
              </div>
              <div className="card-body">
                <p>
                  Refunds will only be considered under the specific
                  circumstances listed below:
                </p>
                <div className="table-responsive">
                  <table className="table table-striped table-hover border">
                    <thead className="table-success">
                      <tr>
                        <th scope="col">Condition</th>
                        <th scope="col">Description</th>
                        <th scope="col">Refund Eligibility</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="fw-bold">
                          A. Cancellation Before Start
                        </td>
                        <td>
                          If the client formally cancels the project before
                          any work has commenced or the project's official
                          start date.
                        </td>
                        <td>
                          Up to 75% of the Initial Advance Payment (25%
                          retained for administrative costs).
                        </td>
                      </tr>
                      <tr>
                        <td className="fw-bold">B. Non-Delivery by Indokona</td>
                        <td>
                          If Indokona Tech Solutions fails to initiate the
                          project within the agreed-upon timeframe (excluding
                          delays caused by the client).
                        </td>
                        <td>100% Refund of the advance payment.</td>
                      </tr>
                      <tr>
                        <td className="fw-bold">C. Service Withdrawal by Us</td>
                        <td>
                          If we terminate the service for reasons other than a
                          direct client violation of the Terms & Conditions.
                        </td>
                        <td>
                          A pro-rata refund after deducting the value of all
                          work already completed and delivered.
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </section>

            {/* 3. Non-Refundable Situations */}
            <section className="card shadow-sm mb-4">
              <div className="card-header bg-light fw-bold h5 text-success">
                3. Non-Refundable Situations
              </div>
              <div className="card-body">
                <p>
                  No refunds will be provided in the following circumstances:
                </p>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">
                    ✅ Payments made for any milestones that have been
                    successfully delivered and formally approved by the
                    client.
                  </li>
                  <li className="list-group-item">
                    💼 Cancellation due to a change in the client's own
                    business strategy or objectives.
                  </li>
                  <li className="list-group-item">
                    ⏰ Delays or termination resulting from the client's failure
                    to provide timely content, feedback, or approvals.
                  </li>
                  <li className="list-group-item">
                    💰 Costs incurred for third-party services like domain
                    registration, hosting fees, or software licenses.
                  </li>
                  <li className="list-group-item">
                    🛑 If services are terminated due to the client's
                    violation of the Terms & Conditions.
                  </li>
                </ul>
              </div>
            </section>

            {/* 4. Refund Process and Processing */}
            <section className="card shadow-sm mb-4">
              <div className="card-header bg-light fw-bold h5 text-success">
                4. Refund Request and Processing
              </div>
              <div className="card-body">
                <ol>
                  <li>
                    Submission: All refund requests must be submitted via a
                    formal email to{" "}
                    <a
                      href="mailto:contact@indokona.com"
                      className="text-success"
                    >
                      contact@indokona.com
                    </a>
                    .
                  </li>
                  <li>
                    Review: Our team will review the request within 7
                    working days to determine eligibility.
                  </li>
                  <li>
                    Calculation: If eligible, the final refund amount will
                    be calculated based on the unused portion, deducting the
                    value of work completed and any administrative fees.
                  </li>
                  <li>
                    **Disbursement: Approved refunds will be credited back to
                    the original payment method within 15–30 working days
                    from the date of approval.
                  </li>
                </ol>
              </div>
            </section>

            {/* 5. Contact Information (Highlight) */}
            <section className="card shadow-lg bg-success text-white mt-5">
              <div className="card-body text-center">
                <h3 className="card-title mb-3">5. Contact Information 📞</h3>
                <p className="card-text">
                  For any questions regarding this Refund Policy, please contact
                  us at:
                </p>
                <ul className="list-unstyled">
                  <li className="mb-2">
                    <span className="fw-bold">Email:</span>{" "}
                    <a
                      href="mailto:indokonaoutsourcing@gmail.com"
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
      <style>{`/* Custom Styles for Refund Policy */

.policy-container {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    line-height: 1.6;
}

/* Custom styles for the card headers */
.card-header {
    /* Use a color related to success/green for the policy */
    background-color: #f1f1f1 !important; 
    border-bottom: 2px solid var(--bs-success); /* Green border */
    font-size: 1.1rem;
    padding: 1rem 1.5rem;
}

/* Style for the initial alert box */
.alert-success {
    border-left: 5px solid var(--bs-success); /* Use a solid green line */
    background-color: #e9f8e9; /* Very light green background */
    padding: 15px;
}

/* Style for the table header */
.table-success {
    --bs-table-bg: #d1e7dd; /* Light green background for table header */
}

/* Style for list items in non-refundable section */
.list-group-item {
    border: none;
    padding: 0.5rem 0;
}`}</style>
    </>
  );
}
