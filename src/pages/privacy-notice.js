import React from "react";
import Layout from "../components/Layout";
import SEO from "../components/SEO";
import PageHero from "../components/PageHero";
import { privacySections } from "../data/privacy";

const TextBlock = ({ block }) => (
  <div className="space-y-4">
    {block.heading && <h3 className="pt-3 text-xl font-black text-brand-900">{block.heading}</h3>}
    {block.body?.map((paragraph) => (
      <p key={paragraph} className="leading-8 text-slate-700">
        {paragraph}
      </p>
    ))}
    {block.bullets && (
      <ul className="ml-5 list-disc space-y-2 leading-8 text-slate-700">
        {block.bullets.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    )}
  </div>
);

const PrivacyNoticePage = () => (
  <Layout>
    <PageHero
      eyebrow="Privacy Notice"
      title="How we process and protect personal information"
      description="This notice explains what personal data is processed, why it is needed, how it is stored and the rights available to individuals."
    />

    <section className="section-padding bg-slate-50">
      <div className="container-page">
        <article className="mx-auto max-w-4xl rounded-[2rem] bg-white p-6 shadow-soft sm:p-10 lg:p-12">
          <div className="space-y-12">
            {privacySections.map((section) => (
              <section key={section.title} className="scroll-mt-28">
                <h2 className="text-3xl font-black tracking-tight text-brand-950">{section.title}</h2>
                <div className="mt-6 space-y-4">
                  {section.body?.map((paragraph) => (
                    <p key={paragraph} className="leading-8 text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                  {section.bullets && (
                    <ul className="ml-5 list-disc space-y-2 leading-8 text-slate-700">
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.bodyAfter?.map((paragraph) => (
                    <p key={paragraph} className="leading-8 text-slate-700">
                      {paragraph}
                    </p>
                  ))}
                  {section.bulletsAfter && (
                    <ul className="ml-5 list-disc space-y-2 leading-8 text-slate-700">
                      {section.bulletsAfter.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                  {section.extra?.map((block) => (
                    <TextBlock key={block.heading} block={block} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </div>
    </section>
  </Layout>
);

export const Head = () => <SEO title="Privacy Notice" description="Privacy notice for 18Plus Support Limited." />;

export default PrivacyNoticePage;
