import React from "react";

const SEO = ({ title, description }) => {
  const pageTitle = title ? `${title} | 18Plus Support` : "18Plus Support";
  const pageDescription =
    description ||
    "Premier provider of domiciliary care, supported living and cleaning services in Essex, Kent and the South East.";

  return (
    <>
      <title>{pageTitle}</title>
      <meta name="description" content={pageDescription} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={pageDescription} />
      <meta property="og:type" content="website" />
      <meta name="theme-color" content="#0f5f59" />
    </>
  );
};

export default SEO;
