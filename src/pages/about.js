import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import SectionHeader from "../components/SectionHeader";
import CTA from "../components/CTA";
import Icon from "../components/Icon";
import { team } from "../data/site";

const values = ["Compassion", "Kindness", "Openness"];

const AboutPage = () => (
  <Layout>
    <PageHero
      eyebrow="Our values"
      title="Compassion, Kindness, Openness"
      description="Our guiding principal is: ‘Treat others as you would like to be treated’."
      image="/images/about-care.jpg"
    />

    <section className="section-padding bg-white">
      <div className="container-page grid items-center gap-12 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative">
          <div className="absolute -bottom-6 -right-6 h-32 w-32 rounded-full bg-brand-100 blur-2xl" />
          <img
            src="/images/about-care.jpg"
            alt="Care worker walking with a service user"
            className="relative aspect-[4/3] w-full rounded-[2rem] object-cover shadow-soft"
          />
        </div>
        <div>
          <SectionHeader
            eyebrow="Vision"
            title="Personalised, specialised care across Essex, Kent and the South East"
            description="18Plus Support Limited aims to be the premier provider for Domiciliary and Supported Living care services in Essex and Kent, and the South East."
          />
          <p className="mt-6 leading-8 text-slate-700">
            We aim to utilise the experience base within the leadership around physiotherapy and mental health expertise to create a service that is personalised and specialised, with a particular focus on those with physical disabilities, mental health, sensory impairments and dementia. The services aim to support reablement of service users to optimum functionality for as long as possible.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            {values.map((value) => (
              <div key={value} className="rounded-2xl bg-brand-50 p-4 text-center font-extrabold text-brand-800">
                {value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>

    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <SectionHeader
          eyebrow="Our team"
          title="Experienced leadership with a passion for quality of life"
          description="Meet the people leading 18Plus Support Limited."
          align="center"
        />
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {team.map((member) => (
            <article key={member.name} className="card p-6 sm:p-8">
              <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
                <img
                  src={member.image}
                  alt={`${member.name}, ${member.role}`}
                  className="h-36 w-36 rounded-[2rem] object-cover shadow-lg"
                />
                <div>
                  <h3 className="text-2xl font-black text-brand-900">{member.name}</h3>
                  <p className="mt-1 font-bold text-brand-700">{member.role}</p>
                </div>
              </div>
              <p className="mt-6 leading-8 text-slate-700">{member.bio}</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="bg-brand-900 py-14 text-white">
      <div className="container-page flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-sm font-bold uppercase tracking-[0.22em] text-brand-200">Guiding principle</p>
          <p className="mt-3 text-3xl font-black">Treat others as you would like to be treated.</p>
        </div>
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10">
          <Icon name="heart" className="h-8 w-8 text-brand-200" />
        </div>
      </div>
    </section>

    <CTA />
  </Layout>
);

export const Head = () => <SEO title="About" description="Learn about 18Plus Support values, vision and leadership team." />;

export default AboutPage;
