import React from "react";
import footer_logo from "../assets/images/png/footer-logo.png";
import { Container } from "react-bootstrap";
import { Discordicon, Instagramicon, Twittericon } from "./icon";

const MyFooter = () => {
  return (
    <>
      <div className="section-bg">
        <div className="footer-bg">
          <Container>
            <div className="d-flex justify-content-center pt-121 pb-62">
              <div className="max-w-500">
                <div className="d-flex justify-content-center">
                  <img src={footer_logo} alt="footer_logo" />
                </div>
                <p className=" d-flex py-30 justify-content-center text-center text-white text-xsm fw-normal ff_M_PLUS_1">
                  Vitae cras pellentesque amet, pretium ut consectetur pretium
                  orci arcu. Aenean turpis ipsum nunc adipiscing fusce enim,
                  eget rhoncus at.
                </p>
                <div className="d-flex justify-content-center gap-3 ">
                  <Instagramicon />
                  <Discordicon />
                  <Twittericon />
                </div>
              </div>
            </div>
          </Container>
          <div className="line"></div>
          <p className="text-white text-xsm fw-normal ff_M_PLUS_1 py-3 mb-0 text-center">
            copyright@2022
          </p>
        </div>
      </div>
    </>
  );
};

export default MyFooter;
