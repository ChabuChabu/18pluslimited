import React from "react";

const SectionHeader = ({ eyebrow, title, description, align = "left" }) => (
  <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
    {eyebrow && <p className="eyebrow">{eyebrow}</p>}
    <h2 className="section-title mt-3">{title}</h2>
    {description && <p className="mt-5 text-lg leading-8 text-slate-600">{description}</p>}
  </div>
);

export default SectionHeader;
