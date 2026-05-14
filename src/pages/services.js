import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";
import Icon from "../components/Icon";
import { serviceCards, serviceList } from "../data/site";

const ServicesPage = () => (
  <Layout>
    <PageHero
      eyebrow="Services"
      title="Domiciliary Care and Supported Living Services"
      description="“Treat others as you would like to be treated”"
      image="/images/services-hero.jpg"
    />

    <section className="section-padding bg-white">
      <div className="container-page">
        <SectionHeader
          eyebrow="Care support"
          title="Our care workers provide the following services"
          description="Support is delivered with a focus on equality, inclusivity and independence."
          align="center"
        />
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {serviceList.map((service) => (
            <div key={service} className="flex gap-3 rounded-3xl border border-slate-200 bg-slate-50 p-5">
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-brand-100 text-brand-700">
                <Icon name="check" className="h-4 w-4" />
              </span>
              <p className="text-sm font-semibold leading-6 text-slate-700">{service}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section className="section-padding bg-brand-950 text-white">
      <div className="container-page text-center">
        <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-200">We strive for</p>
        <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">equality, inclusivity & independence</h2>
      </div>
    </section>

    <section className="section-padding bg-slate-50">
      <div className="container-page grid gap-8 md:grid-cols-2">
        {serviceCards.map((service) => (
          <article key={service.title} className="card overflow-hidden">
            <img src={service.image} alt="" className="h-72 w-full object-cover" />
            <div className="p-6 sm:p-8">
              <h2 className="text-2xl font-black text-brand-900 sm:text-3xl">{service.title}</h2>
              <p className="mt-4 leading-7 text-slate-700">{service.description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>

    <section className="bg-white py-16">
      <div className="container-page text-center">
        <p className="text-3xl font-black text-brand-900">Follow Us</p>
        <div className="mt-8 flex justify-center gap-4">
          {["f", "x", "▶", "◎"].map((item) => (
            <a
              key={item}
              href="https://www.facebook.com"
              className="flex h-12 w-12 items-center justify-center rounded-full bg-slate-100 text-lg font-black text-slate-600 hover:bg-brand-100 hover:text-brand-900"
              aria-label="Social media link"
            >
              {item}
            </a>
          ))}
        </div>
      </div>
    </section>

    <CTA />
  </Layout>
);

export const Head = () => <SEO title="Services" description="Care worker services including personal care, healthcare support, dietary care and daily living assistance." />;

export default ServicesPage;
