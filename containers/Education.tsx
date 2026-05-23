import React from "react";
import EducationCard from "../components/EducationCard";
import { educationInfo } from "../portfolio";
import { Container, Row, Col } from "reactstrap";
import { Fade } from "react-awesome-reveal";

const Education = () => {
  return (
    educationInfo && (
      <Fade duration={1500} triggerOnce>
        <section className="section pb-0 bg-gradient-info my-5">
          <Container style={{ maxWidth: 1500 }}>
            <div className="d-flex px-3 align-items-center">
              <div>
                <div
                  className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info"
                  style={{ width: 88, height: 88 }}
                >
                  <i className="ni ni-books text-info" style={{ fontSize: "2rem" }} />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-white" style={{ fontSize: "clamp(3.4rem, 4.5vw, 4.8rem)" }}>
                  Education
                </h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {educationInfo.map(info => {
                return (
                  <Col className="order-lg-1" lg="6" key={`${info.schoolName}-${info.duration}`}>
                    <EducationCard {...info} />
                  </Col>
                );
              })}
            </Row>
          </Container>
          <div className="separator separator-bottom separator-skew zindex-100">
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
      </Fade>
    )
  );
};

export default Education;
