import React from "react";
import { Link } from "gatsby";
import Icon from "./Icon";

const CTA = () => (
  <section className="bg-gradient-to-br from-cyan-300 via-brand-100 to-white py-14">
    <div className="container-page text-center">
      <p className="text-3xl font-black tracking-tight text-brand-900 sm:text-4xl">How can we help you?</p>
      <p className="mx-auto mt-4 max-w-2xl text-slate-700">
        Speak to the team about domiciliary care, supported living or domestic support.
      </p>
      <Link to="/contact/" className="button-primary mt-8 gap-2">
        Contact us <Icon name="arrow" className="h-4 w-4" />
      </Link>
    </div>
  </section>
);

export default CTA;
