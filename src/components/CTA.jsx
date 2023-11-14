import React from "react";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="cta">
      <p className="cta-text">
        Interested in adding a dedicated, quick-learning, and technically adept
        member to your team?
      </p>
      <Link to="/contact" className="btn">
        {" "}
        Contact Me
      </Link>
    </section>
  );
};

export default CTA;
