import React from "react";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__holder container">
        <div className="footer__copyright">&copy;{currentYear} All rights reserved</div>
      </div>
    </footer>
  );
};

export default Footer;
