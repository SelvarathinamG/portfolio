import React from "react";
import { Button } from "reactstrap";
import { socialLinks } from "../portfolio";

const SocialLinks = () => {
  const socialButtonStyle = {
    width: "4.6rem",
    height: "4.6rem",
    fontSize: "1.5rem",
  };

  return (
    <div className="btn-wrapper text-lg" style={{ marginTop: "1.5rem" }}>
      {socialLinks.email && (
        <Button
          className="btn-icon-only rounded-circle ml-1 hero-social-btn"
          color="white"
          rel="noopener"
          aria-label="URL"
          href={socialLinks.email}
          target="_blank"
          style={socialButtonStyle}
        >
          <span className="btn-inner--icon" style={{ fontSize: "1.5rem" }}>
            <i className="fa fa-envelope" />
          </span>
        </Button>
      )}
      {socialLinks.linkedin && (
        <Button
          className="btn-icon-only rounded-circle ml-1 hero-social-btn"
          color="twitter"
          rel="noopener"
          aria-label="Linkedin"
          href={socialLinks.linkedin}
          target="_blank"
          style={socialButtonStyle}
        >
          <span className="btn-inner--icon" style={{ fontSize: "1.5rem" }}>
            <i className="fa fa-linkedin" />
          </span>
        </Button>
      )}
      {socialLinks.github && (
        <Button
          className="btn-icon-only rounded-circle ml-1 hero-social-btn"
          color="github"
          href={socialLinks.github}
          rel="noopener"
          aria-label="Github"
          target="_blank"
          style={socialButtonStyle}
        >
          <span className="btn-inner--icon" style={{ fontSize: "1.5rem" }}>
            <i className="fa fa-github" />
          </span>
        </Button>
      )}
      {socialLinks.instagram && (
        <Button
          className="btn-icon-only rounded-circle ml-1 hero-social-btn"
          color="instagram"
          href={socialLinks.instagram}
          target="_blank"
          rel="noopener"
          aria-label="Instagram"
          style={socialButtonStyle}
        >
          <span className="btn-inner--icon" style={{ fontSize: "1.5rem" }}>
            <i className="fa fa-instagram" />
          </span>
        </Button>
      )}
      {socialLinks.facebook && (
        <Button
          className="btn-icon-only rounded-circle ml-1 hero-social-btn"
          color="facebook"
          href={socialLinks.facebook}
          target="_blank"
          rel="noopener"
          aria-label="Facebook"
          style={socialButtonStyle}
        >
          <span className="btn-inner--icon" style={{ fontSize: "1.5rem" }}>
            <i className="fa fa-facebook-square" />
          </span>
        </Button>
      )}
      {socialLinks.twitter && (
        <Button
          className="btn-icon-only rounded-circle hero-social-btn"
          color="twitter"
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener"
          aria-label="Twitter"
          style={socialButtonStyle}
        >
          <span className="btn-inner--icon" style={{ fontSize: "1.5rem" }}>
            <i className="fa fa-twitter" />
          </span>
        </Button>
      )}
    </div>
  );
};

export default SocialLinks;
