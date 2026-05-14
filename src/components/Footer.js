import React from "react";
import { Link } from "gatsby";
import { contact, footerAbout, navigation } from "../data/site";
import Icon from "./Icon";

const Footer = () => (
  <footer className="bg-brand-800 text-white">
    <div className="container-page grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_0.8fr_1fr] lg:gap-16">
      <div>
        <h2 className="text-xl font-bold">About</h2>
        <p className="mt-5 max-w-md text-sm leading-7 text-brand-50/85">{footerAbout}</p>
      </div>

      <div>
        <h2 className="text-xl font-bold">Site Navigator</h2>
        <ul className="mt-5 space-y-3 text-sm text-brand-50/85">
          {navigation.map((item) => (
            <li key={item.path}>
              <Link to={item.path} className="hover:text-white">
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h2 className="text-xl font-bold">Contact</h2>
        <ul className="mt-5 space-y-4 text-sm leading-6 text-brand-50/85">
          <li className="flex gap-3">
            <Icon name="pin" className="mt-0.5 h-5 w-5 shrink-0 text-brand-200" />
            <span>{contact.address}</span>
          </li>
          <li className="flex gap-3">
            <Icon name="phone" className="mt-0.5 h-5 w-5 shrink-0 text-brand-200" />
            <a href={`tel:${contact.phone}`} className="hover:text-white">
              {contact.phone}
            </a>
          </li>
          <li className="flex gap-3">
            <Icon name="mail" className="mt-0.5 h-5 w-5 shrink-0 text-brand-200" />
            <a href={`mailto:${contact.email}`} className="break-all hover:text-white">
              {contact.email}
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="bg-brand-950 py-6">
      <div className="container-page flex flex-col gap-2 text-sm text-slate-300 sm:flex-row sm:items-center sm:justify-between">
        <p>Copyright © 2026 18Plus Support</p>
        <p>Built with Gatsby and Tailwind CSS</p>
      </div>
    </div>
  </footer>
);

export default Footer;
