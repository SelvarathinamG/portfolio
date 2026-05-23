import React from "react";
import { experience } from "../portfolio";
import { Container, Row } from "reactstrap";
import ExperienceCard from "../components/ExperienceCard";
import { Fade } from "react-awesome-reveal";

const Experience = () => {
  return (
    experience && (
      <Fade duration={2000} triggerOnce>
        <section className="section section-lg">
          <Container>
            <div className="d-flex p-4">
              <div>
                <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info">
                  <i className="ni ni-briefcase-24 text-info" />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info">Experience</h4>
              </div>
            </div>
            <Row className="row-grid align-items-start justify-content-center">
              {experience.map((data, i) => {
                return <ExperienceCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Experience;
