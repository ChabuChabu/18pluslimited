import React, { useState } from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import ContactCard from "../components/ContactCard";
import GoogleMapNoKey from "../components/GoogleMapNoKey";
import { contact } from "../data/site";

const ContactPage = () => {
  const [sent, setSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <Layout>
      <PageHero
        eyebrow="Contact us"
        title="For any required Information"
        description="Contact the team to discuss care support, supported living or domestic services."
      />

      <section className="section-padding bg-white">
        <div className="container-page grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <aside className="space-y-4">
            <ContactCard icon="pin" title="Address">
              <p>{contact.contactAddress}</p>
            </ContactCard>
            <ContactCard icon="mail" title="Email">
              <a href={`mailto:${contact.email}`} className="break-all font-semibold text-brand-700 hover:text-brand-900">
                {contact.email}
              </a>
            </ContactCard>
            <ContactCard icon="phone" title="Phone">
              <a href={`tel:${contact.phone}`} className="font-semibold text-brand-700 hover:text-brand-900">
                {contact.phone}
              </a>
            </ContactCard>
          </aside>

          <div className="card p-6 sm:p-8">
            <h2 className="text-2xl font-black text-brand-950">Send a message</h2>
            <p className="mt-2 text-slate-600">Complete the form and the team will come back to you.</p>
            <form className="mt-8 grid gap-5" name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <input type="hidden" name="form-name" value="contact" />
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Your Name *</span>
                <input className="mt-2 w-full rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500" name="name" required />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Email *</span>
                <input className="mt-2 w-full rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500" type="email" name="email" required />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Phone Number *</span>
                <input className="mt-2 w-full rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500" type="tel" name="phone" required />
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">How can we help you? *</span>
                <select className="mt-2 w-full rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500" name="enquiryType" required defaultValue="General">
                  <option>General</option>
                  <option>Care services</option>
                  <option>Supported living</option>
                  <option>Cleaning services</option>
                </select>
              </label>
              <label className="block">
                <span className="text-sm font-bold text-slate-700">Your Message *</span>
                <textarea className="mt-2 min-h-40 w-full rounded-2xl border-slate-200 bg-slate-50 px-4 py-3 focus:border-brand-500 focus:ring-brand-500" name="message" required />
              </label>
              <button type="submit" className="button-primary justify-self-start">
                Send message
              </button>
              {sent && (
                <p className="rounded-2xl bg-brand-50 p-4 text-sm font-bold text-brand-800">
                  Thank you. Your message has been prepared successfully. Connect this form to Netlify Forms or your preferred form handler when deploying.
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

      <section className="bg-slate-100">
        <div className="container-page py-10">
          <GoogleMapNoKey title="Map showing 18Plus Support in Wickford" />
        </div>
      </section>
    </Layout>
  );
};

export const Head = () => <SEO title="Contact" description="Contact 18Plus Support by phone, email or contact form." />;

export default ContactPage;
