import { Icon } from "@iconify/react";
import React, { Fragment } from "react";
import { Fade } from "react-awesome-reveal";
import { Col, Container, Row, UncontrolledTooltip } from "reactstrap";
import DisplayLottie from "../components/DisplayLottie";
import { skillsSection } from "../portfolio";

const Skills = () => {
  return (
    skillsSection && (
      <Fade duration={2000} triggerOnce>
        <Container className="text-center my-5 section section-lg" style={{ maxWidth: 1500 }}>
          <h1 className="h1" style={{ fontSize: "clamp(4.6rem, 5vw, 5rem)" }}>
            {skillsSection.title}
          </h1>
          <p className="lead" style={{ fontSize: "1.7rem", maxWidth: 1040, margin: "0 auto" }}>
            {skillsSection.subTitle}
          </p>
          {skillsSection.data.map((section, index) => {
            return (
              <Row className="my-5 align-items-center" key={index}>
                <Col lg="6" className="order-2 order-lg-1">
                  <DisplayLottie animationPath={section.lottieAnimationFile} />
                </Col>
                <Col lg="6" className="order-1 order-lg-2">
                  <h3 className="h3 mb-3" style={{ fontSize: "clamp(3.5rem, 3vw, 3.4rem)" }}>
                    {section.title}
                  </h3>
                  <div className="d-flex justify-content-center flex-wrap mb-3">
                    {section.softwareSkills.map((skill, i) => {
                      return (
                        <Fragment key={i}>
                          <div
                            className="icon icon-lg icon-shape shadow-sm rounded-circle m-2"
                            style={{ width: 94, height: 94 }}
                            id={skill.skillName.replace(/[^a-zA-Z0-9]/g, "")}
                          >
                            <Icon icon={skill.iconifyTag} data-inline="false" style={{ fontSize: 40 }} />
                          </div>
                          <UncontrolledTooltip
                            delay={0}
                            placement="bottom"
                            target={skill.skillName.replace(/[^a-zA-Z0-10]/g, "")}
                          >
                            {skill.skillName}
                          </UncontrolledTooltip>
                        </Fragment>
                      );
                    })}
                  </div>
                  <div>
                    {section.skills.map((skill, i) => {
                      return (
                        <p key={i} style={{ fontSize: "1.4rem", lineHeight: 1.8 }}>
                          {skill}
                        </p>
                      );
                    })}
                  </div>
                </Col>
              </Row>
            );
          })}
        </Container>
      </Fade>
    )
  );
};

export default Skills;
