import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import mint_goat from "../assets/images/png/mint-goat.png";
import { Decreaseicon, Increasicon } from "./icon";

const Mint = () => {
  return (
    <>
      <div className="section-bg">
        <div className="mint-bg">
          <Container className="pb-136">
            <h3 className="pt-98 text-center text-white text-4xl fw-normal ff_Black_Han_Sans">
              Mint NFT
            </h3>
            <Row>
              <Col md={6} className="mx-auto">
                <div className="d-flex justify-content-md-start justify-content-center">
                  <img
                    className="mint-goat mt-54"
                    src={mint_goat}
                    alt="mint-goat"
                  />
                </div>
              </Col>
              <Col md={6} className="mx-auto">
                <div className="mint-card mt-158 px-30 mx-md-0 mx-auto">
                  <div className="d-flex align-items-center justify-content-center gap-md-5 gap-4 mt-39">
                    <Decreaseicon />
                    <p className="text-white mb-0 text-2xl fw-normal ff_Black_Han_Sans">
                      0 / 5656
                    </p>
                    <Increasicon />
                  </div>
                  <p className="text-white mb-0 text-center mt-21 fw-semibold text-sm ff_M_PLUS_1">
                    Max 4 NFTs per transaction
                  </p>
                  <p className="text-white mb-0 text-center mt-2 fw-semibold text-sm ff_M_PLUS_1">
                    75 ADA per NFT
                  </p>
                  <div className="d-flex justify-content-center mb-30">
                    <div className="btn-border mt-52 d-inline-block">
                      <button className=" connect-btn text-xsm fw-normal ff_Black_Han_Sans text-white">
                        Mint Now
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    </>
  );
};

export default Mint;
