import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Pricing from "./Pricing";
import FAQ from "./FAQ";

export default function Fintech() {
  return (
    <>
    <section className="text-center py-5 bg-dark text-white">
      <h1>🚀 Start, Build & Scale Your Fintech Business – From Retailer to White Label</h1>
      <p>
        Indokona Fintech brings you technology, automation, training, and tools
        to create not just a brand, but a scalable fintech empire.
      </p>
      <div className="mt-3">
        <button className="btn btn-success m-2">Become a Partner Now</button>
        <button className="btn btn-warning m-2">Download Brochure PDF</button>
        <button className="btn btn-info m-2">Request Free Demo</button>
      </div>
    </section>
    <Pricing/>
    <FAQ/>
    </>
  
  );
}
