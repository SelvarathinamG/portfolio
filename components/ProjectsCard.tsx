import React from "react";
import { Card, CardBody, CardImg, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, image }: ProjectType) => {
  return (
    <Col xs="12" lg="6" className="mb-4">
      <Card className="shadow-lg--hover shadow mt-4" style={{ overflow: "hidden" }}>
        {image && (
          <div
            style={{
              width: "100%",
              aspectRatio: "16 / 9",
              overflow: "hidden",
              backgroundColor: "#f5f6fa",
            }}
          >
            <CardImg
              top
              src={image}
              alt={name}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center top",
                display: "block",
              }}
            />
          </div>
        )}
        <CardBody style={{ padding: "1.25rem" }}>
          <div className="d-flex flex-column" style={{ gap: "0.85rem" }}>
            <div>
              <h3
                style={{
                  fontSize: "clamp(1.2rem, 3vw, 1.6rem)",
                  lineHeight: 1.2,
                  color: "#1f2937",
                  wordBreak: "break-word",
                  overflowWrap: "anywhere",
                }}
              >
                {name}
              </h3>
              <p
                className="description mt-3"
                style={{
                  fontSize: "clamp(0.92rem, 2.4vw, 0.98rem)",
                  lineHeight: 1.7,
                  color: "#4b5563",
                  wordBreak: "break-word",
                }}
              >
                {desc}
              </p>
            </div>
            <div className="d-flex flex-wrap" style={{ gap: "0.65rem" }}>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub repository"
                  style={{ padding: "0.7rem 0.9rem", fontSize: "0.86rem" }}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                  <span className="btn-inner--text ml-1" style={{ fontSize: "0.86rem" }}>
                    GitHub Repo
                  </span>
                </Button>
              ) : null}
              {link ? (
                <Button
                  className="btn-icon"
                  color="success"
                  href={link}
                  target="_blank"
                  rel="noopener"
                  aria-label="Project link"
                  style={{ padding: "0.7rem 0.9rem", fontSize: "0.86rem" }}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1" style={{ fontSize: "0.86rem" }}>
                    View
                  </span>
                </Button>
              ) : null}
            </div>
          </div>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ProjectsCard;