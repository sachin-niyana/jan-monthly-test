import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import about_goat from "../assets/images/png/about-goat.png";

const About = () => {
  return (
    <>
      <div className="section-bg">
        <Container>
          <Row className=" align-items-center">
            <Col md={6}>
              <img
                className="w-100 about-goat mt-90"
                src={about_goat}
                alt="about_goat"
              />
            </Col>
            <Col md={6}>
              <h3 className="lh_100 text-white mt-md-0 mt-4 text-4xl fw-normal ff_Black_Han_Sans">
                About Us
              </h3>
              <p className="max-w-560 text-white text-xsm ff_M_PLUS_1 fw-normal mt-3">
                Hi goaties call me legion with a pen. From an early age I was
                influenced by my selfless loving mother who inspired me to
                become a pet and art lover. As young as I was then, My mother
                would read goat story to me even though I didn't understand it.
                During the course of time I have played countless video games,
                watched movies and read books on pets particularly on goat.I
                made this art to portray my illustration of the psychedelic
                goats and I hope you can appreciate that everyone has a history.
                With regards to why non-fungibles.
              </p>
              <div className="btn-border d-inline-block mt-40">
                <button className="connect-btn text-xsm fw-normal ff_Black_Han_Sans text-white">
                  Read More
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default About;
