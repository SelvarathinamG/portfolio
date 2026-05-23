import React from "react";
import { Card, Col, Row, Container } from "reactstrap";
import { GithubUserType } from "../types";
import SocialLinks from "./SocialLinks";

const GithubProfileCard = ({ avatar_url, bio, location }: GithubUserType) => {
  return (
    <Card className="section-lg bg-gradient-info shadow-lg border-0">
      <Container style={{ maxWidth: 1300 }}className="">
        <div className="p-2">
          <Row className="">
            <Col className="order-lg-2 text-center" lg="4">
              <img
                src={avatar_url}
                style={{ width: "290px", display: "block", margin: "0 auto" }}
                alt=""
                className="rounded-circle img-center img-fluid shadow shadow-lg--hover mb-6"
              />
            </Col>
            <Col lg="8" className="order-lg-1 text-center">
              <h2 style={{ color: "#0b1220", fontSize: "3.5rem" }}>Reach Out to me!</h2>
              <p className="lead mt-3" style={{ color: "#1f2937", fontSize: "1.8rem" }}>
                Use the contact form, email link, or social links above to reach me directly.
              </p>
              <p className="mt-3" style={{ color: "#1f2937", fontSize: "1.5rem" }}>{bio}</p>
              <div className="my-3 icon-shape bg-gradient-white shadow rounded text-info">
                <i className="ni ni-pin-3 text-info mr-3" />
                {location}
              </div>
              <SocialLinks />
            </Col>
          </Row>
        </div>
      </Container>
    </Card>
  );
};

export default GithubProfileCard;
