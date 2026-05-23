import React from "react";
import { Card, CardBody, CardTitle, CardSubtitle, CardText, Col } from "reactstrap";

import { ExperienceType } from "../types/sections";

const ExperienceCard = ({ companyLogo, company, role, date, desc, descBullets }: ExperienceType) => {
  return (
    <Col lg="7" md="9" className="mx-auto">
      <Card className="shadow-lg--hover my-4 shadow border-0 text-center rounded h-100 d-flex flex-column">
        <CardBody className="d-flex flex-column align-items-center justify-content-start p-4">
          <img
            src={companyLogo}
            style={{
              objectFit: "cover",
              marginLeft: "auto",
              marginRight: "auto",
              width: "7rem",
              height: "7rem",
              borderRadius: "100%",
            }}
            className="shadow mb-3"
            alt={companyLogo}
          />
          <CardTitle tag="h3" className="mb-2" style={{ fontSize: "1.4rem", fontWeight: 800 }}>
            {company}
          </CardTitle>
          <CardSubtitle tag="h5" className="mb-2" style={{ fontSize: "1rem", fontWeight: 700 }}>
            {role}
          </CardSubtitle>
          <CardSubtitle style={{ fontSize: "1rem", color: "#6c757d" }}>{date}</CardSubtitle>
          <CardText tag="div" className="description my-3 text-center w-100" style={{ fontSize: "1rem", lineHeight: 1.6 }}>
            {desc}
            <ul className="text-left w-100 pl-4" style={{ fontSize: "1rem", marginTop: "0.75rem" }}>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </CardText>
        </CardBody>
      </Card>
    </Col>
  );
};

export default ExperienceCard;
