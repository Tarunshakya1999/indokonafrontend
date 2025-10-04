import React, { useEffect, useState } from "react";
import axios from "axios";

export default function FAQ() {
  const [faqs, setFaqs] = useState([]);

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/faqs/")
      .then(res => setFaqs(res.data))
      .catch(err => console.log(err));
  }, []);

  return (
    <section className="container my-5">
      <h2 className="fw-bold text-center mb-4">❓ FAQs</h2>
      <div className="accordion" id="faqAccordion">
        {faqs.map((faq, idx) => (
          <div className="accordion-item" key={faq.id}>
            <h2 className="accordion-header" id={`heading${idx}`}>
              <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse${idx}`}>
                {faq.question}
              </button>
            </h2>
            <div id={`collapse${idx}`} className="accordion-collapse collapse" data-bs-parent="#faqAccordion">
              <div className="accordion-body">{faq.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
