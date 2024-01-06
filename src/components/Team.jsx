import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import victor from "../assets/images/png/victor-1.png";
import victor_2 from "../assets/images/png/victor-2.png";
import victor_3 from "../assets/images/png/victor-3.png";

const Team = () => {
  return (
    <>
      <div className="section-bg mb_2">
        <Container className="pb-155">
          <h3 className="text-center text-white mb-0 pt-3 pb-62 text-4xl fw-normal ff_Black_Han_Sans">
            Team
          </h3>
          <Row className="team-border overflow-hidden mx-auto">
            <Col md={4}>
              <div className="team-card my-md-0 my-3 mx-auto">
                <img className="w-100 h-100 victor" src={victor} alt="victor" />
                <h4 className="pt-3 text-center text-white mb-0 text-md fw-normal ff_Black_Han_Sans">
                  Vilar
                </h4>
                <p className="pb-3 pt-1 text-center text-white mb-0 text-xsm fw-normal ff_M_PLUS_1">
                  Founder & Developer
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-card-2 my-md-0 my-3 mx-auto">
                <img
                  className="w-100 h-100 victor"
                  src={victor_2}
                  alt="victor"
                />
                <h4 className="pt-3 text-center text-white mb-0 text-md fw-normal ff_Black_Han_Sans">
                  Arwen
                </h4>
                <p className="pb-3 pt-1 text-center text-white mb-0 text-xsm fw-normal ff_M_PLUS_1">
                  Co-founder & Designer
                </p>
              </div>
            </Col>
            <Col md={4}>
              <div className="team-card-3 my-md-0 my-3 mx-auto">
                <img
                  className="w-100 h-100 victor"
                  src={victor_3}
                  alt="victor"
                />
                <h4 className="pt-3 text-center text-white mb-0 text-md fw-normal ff_Black_Han_Sans">
                  John
                </h4>
                <p className="pb-3 pt-1 text-center text-white mb-0 text-xsm fw-normal ff_M_PLUS_1">
                  Developer
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Team;
