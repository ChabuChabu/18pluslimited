import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";
import Icon from "../components/Icon";
import { serviceCards } from "../data/site";

const highlights = [
  "Supported living",
  "Domiciliary care",
  "Cleaning services"
];

const supportAreas = [
  "Physical disabilities",
  "Dementia",
  "Sensory impairments",
  "Mental health"
];

const IndexPage = () => (
  <Layout>
    <section className="relative isolate overflow-hidden bg-brand-950 text-white">
      <img
        src="/images/home-hero.jpg"
        alt="Care worker supporting an older person"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-brand-950 via-brand-900/90 to-brand-800/70" />
      <div className="container-page grid min-h-[680px] items-center gap-12 py-20 lg:grid-cols-[1.15fr_0.85fr]">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.28em] text-brand-200">CQC Regulated Care Provider</p>
          <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-5xl lg:text-6xl">
            A Premier Provider of Supported Living, Domiciliary Care And Cleaning Services
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-brand-50/90">
            We at the 18Plus Support Limited are driven to work hard and tirelessly in order to provide person-centred care.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="/contact/" className="button-primary gap-2">
              Contact us <Icon name="arrow" className="h-4 w-4" />
            </Link>
            <Link to="/services/" className="button-secondary bg-white/95">
              View services
            </Link>
          </div>
        </div>
        <div className="card bg-white/95 p-5 text-brand-950 sm:p-8">
          <p className="text-xl font-black leading-9 sm:text-2xl">
            “Treat others as you would like to be treated”
          </p>
          <p className="mt-5 leading-8 text-slate-700">
            Support is provided either in your home (domiciliary care) or in the accommodation we offer (supported living). This will be done as per the agreed support plan and take into account the goals the service user wants to achieve.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-3">
            {highlights.map((item) => (
              <div key={item} className="rounded-2xl bg-brand-50 p-4 text-center text-sm font-extrabold text-brand-800">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-2">
        <div>
          <SectionHeader
            eyebrow="Person-centred support"
            title="Care that is responsive to the needs of every service user"
            description="We strive to continuously improve our services and provide practical, compassionate support that enables people to live with dignity, safety and confidence."
          />
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {supportAreas.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-2xl bg-slate-50 p-4 font-bold text-brand-900">
                <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                  <Icon name="check" className="h-5 w-5" />
                </span>
                {item}
              </div>
            ))}
          </div>
        </div>
        <div className="relative">
          <div className="absolute -left-4 -top-4 h-32 w-32 rounded-full bg-brand-100 blur-2xl" />
          <img
            src="/images/healthcare.jpg"
            alt="People supported by care services"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
      </div>
    </section>

    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our services"
          title="Domiciliary care and supported living services"
          description="A modern care service built around equality, inclusivity and independence."
          align="center"
        />
        <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {serviceCards.map((service) => (
            <article key={service.title} className="card overflow-hidden">
              <img src={service.image} alt="" className="h-44 w-full object-cover" />
              <div className="p-6">
                <h3 className="text-xl font-black text-brand-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-600">{service.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>

    <CTA />
  </Layout>
);

export const Head = () => (
  <SEO title="Home" description="18Plus Support provides supported living, domiciliary care and cleaning services." />
);

export default IndexPage;
