import React from "react";
import "./Header.scss";

function Header() {
  return (
    <header className="header">
      <h2 className="header__title">Logo</h2>
      <nav className="header__nav">
        <ul className="header__list">
          <li className="header__item">Home</li>
          <li className="header__item">About</li>
          <li className="header__item">Contanct Us </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
