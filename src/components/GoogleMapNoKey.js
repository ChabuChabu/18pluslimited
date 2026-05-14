import React from "react";
import { contact } from "../data/site";

/** Canonical map centre — matches `contact.address` in `src/data/site.js`. */
export const GOOGLE_MAP_DEFAULT_ADDRESS = contact.address;

/**
 * Google Maps via standard embed URL (no API key, no billing).
 * Uses `https://www.google.com/maps?q=...&output=embed`.
 */
const GoogleMapNoKey = ({
  address = contact.address,
  title = "Map showing our location in Wickford",
}) => {
  const encodedAddress = encodeURIComponent(address);
  const src = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;

  return (
    <div className="map-embed w-full overflow-hidden rounded-[2rem] shadow-soft">
      <iframe
        title={title}
        src={src}
        width="100%"
        height="100%"
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        className="map-embed__iframe block h-[320px] w-full max-w-full border-0 lg:h-[420px]"
      />
    </div>
  );
};

export default GoogleMapNoKey;
