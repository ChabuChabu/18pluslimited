import React from "react";

const PageHero = ({ eyebrow, title, description, image, children }) => (
  <section className="relative isolate overflow-hidden bg-brand-950 text-white">
    {image && (
      <img
        src={image}
        alt=""
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-35"
      />
    )}
    <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-brand-900/90 to-brand-800/70" />
    <div className="container-page py-20 sm:py-24 lg:py-32">
      <div className="max-w-3xl">
        {eyebrow && <p className="text-sm font-bold uppercase tracking-[0.25em] text-brand-200">{eyebrow}</p>}
        <h1 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">{title}</h1>
        {description && <p className="mt-6 text-lg leading-8 text-brand-50/90 sm:text-xl">{description}</p>}
        {children && <div className="mt-8">{children}</div>}
      </div>
    </div>
  </section>
);

export default PageHero;
