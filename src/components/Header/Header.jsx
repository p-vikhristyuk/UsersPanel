import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <div className="header__holder container">
        <Link to="/" className="header__logo">
          Users panel
        </Link>
      </div>
    </header>
  );
};

export default Header;
