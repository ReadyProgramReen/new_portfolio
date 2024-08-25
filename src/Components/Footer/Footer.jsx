import React from "react";
import "../Footer/Footer.css";
import theme_pattern from "../../assets/assets/theme_pattern.svg";
import mail_icon from "../../assets/assets/mail_icon.svg";
import github_icon from "../../assets/assets/github_icon.png";
import linkedin_icon from "../../assets/assets/linkedin_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-logo">
        <h1>Maureen E.</h1>
        <img src={theme_pattern} alt="" />
      </div>

      <h3>Full-Stack Engineer </h3>
      <div className="footer-contact-logo">
        <a
          href="https://www.linkedin.com/in/maureen-ekeugo-25139321b/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={linkedin_icon} alt="" />
        </a>

        <a
          href="https://github.com/ReadyProgramReen"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={github_icon} alt="" />
        </a>
      </div>
    </div>
  );
};

export default Footer;
