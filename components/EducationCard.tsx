import React from "react";
import { Card, CardBody, Badge } from "reactstrap";
import { EducationType } from "../types/sections";

const EducationCard = ({ schoolName, subHeader, duration, desc, grade, descBullets }: EducationType) => {
  return (
    <Card className="shadow-lg--hover shadow mt-4">
      <CardBody>
        <div className="d-flex px-3">
          <div className="pl-4">
            <h5 className="text-info" style={{ fontSize: "1.3rem" }}>
              {schoolName}
            </h5>
            <h6 style={{ fontSize: "1.05rem" }}>{subHeader}</h6>
            <Badge color="info" className="mr-1" style={{ fontSize: "0.82rem" }}>
              {duration}
            </Badge>
            {grade && (
              <Badge color="primary" className="mr-1" style={{ fontSize: "0.82rem" }}>
                {grade}
              </Badge>
            )}
            <p className="description mt-3" style={{ fontSize: "1.02rem", lineHeight: 1.75 }}>
              {desc}
            </p>
            <ul>
              {descBullets
                ? descBullets.map(desc => {
                    return <li key={desc}>{desc}</li>;
                  })
                : null}
            </ul>
          </div>
        </div>
      </CardBody>
    </Card>
  );
};

export default EducationCard;
