import React, { useState } from "react";
import { Link } from "gatsby";
import { navigation, contact } from "../data/site";
import Icon from "./Icon";

const NavLink = ({ item, mobile = false, onClick }) => (
  <Link
    to={item.path}
    onClick={onClick}
    className={
      mobile
        ? "block rounded-2xl px-4 py-3 text-base font-bold text-brand-950 hover:bg-brand-50"
        : "rounded-full px-4 py-2 text-sm font-bold text-brand-950 hover:bg-white/70 hover:text-brand-700"
    }
    activeClassName={mobile ? "bg-brand-50 text-brand-700" : "bg-white text-brand-700 shadow-sm"}
    partiallyActive={item.path !== "/"}
  >
    {item.label}
  </Link>
);

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/60 bg-brand-100/95 shadow-sm backdrop-blur-xl">
      <div className="container-page flex min-h-20 items-center justify-between gap-4 py-3">
        <Link to="/" className="flex items-center gap-3" aria-label="18Plus Support home">
          <img
            src="/images/logo.png"
            alt="18Plus Support logo"
            className="h-14 w-auto rounded-xl object-contain sm:h-16"
          />
          <span className="sr-only">18Plus Support</span>
        </Link>

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Main navigation">
          {navigation.map((item) => (
            <NavLink key={item.path} item={item} />
          ))}
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <a href={`tel:${contact.phone}`} className="button-secondary py-2.5">
            Call us
          </a>
          <Link to="/contact/" className="button-primary py-2.5">
            Contact
          </Link>
        </div>

        <button
          type="button"
          className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-accent-500 text-white shadow-lg shadow-red-200 lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle navigation menu"
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </div>

      {open && (
        <div id="mobile-menu" className="border-t border-white/60 bg-white/95 p-4 shadow-lg lg:hidden">
          <nav className="container-page space-y-1" aria-label="Mobile navigation">
            {navigation.map((item) => (
              <NavLink key={item.path} item={item} mobile onClick={() => setOpen(false)} />
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
