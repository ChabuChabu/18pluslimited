import React from "react";
import Icon from "./Icon";

const ContactCard = ({ icon, title, children }) => (
  <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
    <div className="flex gap-4">
      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-brand-50 text-brand-700">
        <Icon name={icon} className="h-6 w-6" />
      </div>
      <div>
        <p className="font-extrabold text-brand-950">{title}</p>
        <div className="mt-1 text-slate-600">{children}</div>
      </div>
    </div>
  </div>
);

export default ContactCard;
