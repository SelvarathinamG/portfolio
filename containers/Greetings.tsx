import React, { useEffect } from "react";
import { greetings } from "../portfolio";
import { Button, Container, Row, Col } from "reactstrap";
import GreetingLottie from "../components/DisplayLottie";
import SocialLinks from "../components/SocialLinks";

const Greetings = () => {
  const heroTitleStyle = {
    color: "#ffffff",
    fontSize: "clamp(2.4rem, 4vw, 3.2rem)",
    lineHeight: 1.02,
  };

  const heroDescriptionStyle = {
    color: "#ffffff",
    fontSize: "clamp(1.35rem, 1.9vw, 1.65rem)",
    lineHeight: 1.8,
    maxWidth: "42rem",
  };

  const heroResumeButtonStyle = {
    padding: "1.1rem 1.55rem",
    fontSize: "1.08rem",
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
    document.scrollingElement!.scrollTop = 0;
  });

  return (
    <main>
      <div className="position-relative">
        <section className="section section-lg section-shaped pb-250">
          <div className="shape shape-style-1 bg-gradient-info">
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
            <span />
          </div>
          <Container style={{ maxWidth: 1200 }} className="py-lg-md">
            <Row className="align-items-center justify-content-between" style={{ minHeight: "62vh" }}>
              <Col lg="5" className="hero-copy">
                <h1 className="display-2" style={heroTitleStyle}>
                  {greetings.title + " "}
                </h1>
                <p className="lead" style={heroDescriptionStyle}>
                  {greetings.description}
                </p>
                <SocialLinks />
                {greetings.resumeLink && (
                  <div className="btn-wrapper my-4">
                    <Button
                      className="btn-white btn-icon hero-resume-btn mb-3 mb-sm-0 ml-1"
                      color="default"
                      href={greetings.resumeLink}
                      style={heroResumeButtonStyle}
                    >
                      <span className="btn-inner--icon mr-1">
                        <i className="fa fa-file" />
                      </span>
                      <span className="btn-inner--text">See My Resume</span>
                    </Button>
                  </div>
                )}
              </Col>
              <Col lg="6" className="hero-visual" style={{ display: "flex", alignItems: "center", justifyContent: "center", paddingTop: "1rem", paddingBottom: "1rem" }}>
                <GreetingLottie animationPath="/lottie/coding.json" />
              </Col>
            </Row>
          </Container>
          {/* SVG separator */}
          <div className="separator separator-bottom separator-skew">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon className="fill-white" points="2560 0 2560 100 0 100" />
            </svg>
          </div>
        </section>
        {/* 1st Hero Variation */}
      </div>
    </main>
  );
};

export default Greetings;
