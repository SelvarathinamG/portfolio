import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    projects && (
      <Fade duration={2000} triggerOnce>
        <section className="section section-lg">
          <Container style={{ maxWidth: 1500 }}>
            <div className="d-flex p-4 align-items-center">
              <div>
                <div
                  className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info"
                  style={{ width: 88, height: 88 }}
                >
                  <i className="ni ni-laptop text-info" style={{ fontSize: "2rem" }} />
                </div>
              </div>
              <div className="pl-4">
                <h4 className="display-3 text-info" style={{ fontSize: "clamp(3.4rem, 4.5vw, 4.8rem)" }}>
                  Projects
                </h4>
              </div>
            </div>
            <Row className="row-grid align-items-center">
              {projects.map((data, i) => {
                return <ProjectsCard key={i} {...data} />;
              })}
            </Row>
          </Container>
        </section>
      </Fade>
    )
  );
};

export default Projects;
