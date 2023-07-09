import React from "react";
import Link from "next/link";
import { Navigation } from "./Navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Blog", href: "/blog" },
  { label: "About", href: "/about" },
];

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Navigation navLinks={navItems} />
        </div>
      </div>
    </header>
  );
};

export { Header };
