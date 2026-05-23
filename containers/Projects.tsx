import React from "react";
import { projects } from "../portfolio";
import { Container, Row } from "reactstrap";
import ProjectsCard from "../components/ProjectsCard";
import { Fade } from "react-awesome-reveal";

const Projects = () => {
  return (
    projects && (
      <Fade duration={2000} triggerOnce>
        <section className="section" style={{ paddingTop: "1.5rem", paddingBottom: "1.5rem" }}>
          <Container style={{ maxWidth: 1140 }}>
            <div className="d-flex p-3 align-items-center">
              <div>
                <div
                  className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-info"
                  style={{ width: 72, height: 72 }}
                >
                    <i className="ni ni-laptop text-info" style={{ fontSize: "1.5rem" }} />
                </div>
              </div>
              <div className="pl-4">
                  <h4 className="display-3 text-info" style={{ fontSize: "clamp(2.2rem, 3vw, 3rem)" }}>
                  Projects
                </h4>
              </div>
            </div>
            <Row className="row-grid align-items-stretch" style={{ marginTop: "0.5rem" }}>
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
