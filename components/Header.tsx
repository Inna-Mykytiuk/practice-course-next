import React from "react";
import Link from "next/link";

const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="nav">
          <Link href="/" className="link">
            Home
          </Link>
          <Link href="/blog" className="link">
            Blog
          </Link>
          <Link href="/about" className="link">
            About
          </Link>
        </div>
      </div>
    </header>
  );
};

export { Header };
