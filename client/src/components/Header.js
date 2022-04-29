import React from "react";

const Header = () => {
  return (
    <nav className="navbar is-white">
      <div className="container">
        <div className="navbar-brand">
          <a
            className="navbar-item brand-text"
            href="https://docs.github.com/en/rest/commits/commits"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub API
          </a>
          <div className="navbar-burger burger" data-target="navMenu">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div id="navMenu" className="navbar-menu">
          <div className="navbar-start">
            <a
              className="navbar-item"
              href="https://github.com/danielpqe"
              target="_blank"
              rel="noopener noreferrer"
            >
              Username: danielpqe
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
