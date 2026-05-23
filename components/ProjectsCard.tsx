import React, { useState } from "react";
import { Card, CardBody, CardImg, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, image }: ProjectType) => {
  const placeholder =
    "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='1200' height='640'><rect width='100%' height='100%' fill='%23f5f6fa'/><text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' fill='%23999' font-size='36'>No image</text></svg>";
  const [imgSrc, setImgSrc] = useState<string | undefined>(image);

  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4" style={{ overflow: "hidden" }}>
        {imgSrc && (
          <CardImg
            top
            src={imgSrc}
            alt={name}
            onError={() => setImgSrc(placeholder)}
            style={{ height: "340px", objectFit: "cover", backgroundColor: "#f5f6fa" }}
          />
        )}
        <CardBody style={{ padding: "2rem" }}>
          <div className="d-flex flex-column" style={{ gap: "1rem" }}>
            <div>
              <h3 style={{ fontSize: "2.1rem", lineHeight: 1.15, color: "#1f2937" }}>{name}</h3>
              <p
                className="description mt-3"
                style={{ fontSize: "1.08rem", lineHeight: 1.85, color: "#4b5563" }}
              >
                {desc}
              </p>
            </div>
            <div className="d-flex flex-wrap" style={{ gap: "0.75rem" }}>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub repository"
                  style={{ padding: "0.8rem 1.1rem", fontSize: "0.98rem" }}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                  <span className="btn-inner--text ml-1" style={{ fontSize: "0.98rem" }}>
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
                  style={{ padding: "0.8rem 1.1rem", fontSize: "0.98rem" }}
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1" style={{ fontSize: "0.98rem" }}>
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
