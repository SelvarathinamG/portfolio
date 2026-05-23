import React from "react";
import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";
import { Fade } from "react-awesome-reveal";
import GreetingLottie from "../components/DisplayLottie";

const Proficiency = () => {
  return (
    SkillBars && (
      <Container className="section" style={{ maxWidth: 1140, paddingTop: "1.5rem", paddingBottom: "1.5rem", marginTop: "1rem", marginBottom: "1rem" }}>
        <Fade duration={2000} triggerOnce>
          <Row>
            <Col lg="6">
              <h1 className="h1" style={{ fontSize: "clamp(2.2rem, 3vw, 3rem)" }}>
                Proficiency
              </h1>
              {SkillBars.map(skill => {
                return (
                  <div className="progress-info" key={skill.Stack}>
                    <div className="progress-label">
                      <span>{skill.Stack}</span>
                    </div>
                    <div className="progress-percentage">
                      <span>{skill.progressPercentage}%</span>
                    </div>
                    <Progress
                      max="100"
                      value={skill.progressPercentage}
                      color="info"
                      role="progressbar"
                      aria-label={skill.Stack}
                    />
                  </div>
                );
              })}
            </Col>
            <Col lg="6">
              <GreetingLottie animationPath="/lottie/build.json" />
            </Col>
          </Row>
        </Fade>
      </Container>
    )
  );
};

export default Proficiency;
