import React from "react";
import { Card, CardBody, CardImg, Col, Button } from "reactstrap";
import { ProjectType } from "../types/sections";

const ProjectsCard = ({ name, desc, github, link, image }: ProjectType) => {
  return (
    <Col lg="6">
      <Card className="shadow-lg--hover shadow mt-4">
        {image && (
          <CardImg
            top
            src={image}
            alt={name}
            style={{ height: "220px", objectFit: "cover", backgroundColor: "#f5f6fa" }}
          />
        )}
        <CardBody>
          <div className="d-flex px-3">
            <div className="pl-4">
              <h3>{name}</h3>
              <p className="description mt-3">{desc}</p>
              {github ? (
                <Button
                  className="btn-icon"
                  color="github"
                  href={github}
                  target="_blank"
                  rel="noopener"
                  aria-label="GitHub repository"
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-github" />
                  </span>
                  <span className="btn-inner--text ml-1">GitHub Repo</span>
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
                >
                  <span className="btn-inner--icon">
                    <i className="fa fa-arrow-right mr-2" />
                  </span>
                  <span className="nav-link-inner--text ml-1">View</span>
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
