import React, { useState } from "react";
import { Container } from "react-bootstrap";
import logo from "../assets/images/png/logo.png";
import { Discordicon, Instagramicon, Twittericon } from "./icon";

const MyNavbar = () => {
  const [nav, setnav] = useState(true);
  if (nav) {
    document.body.classList.remove("overflow_hidden");
  } else {
    document.body.classList.add("overflow_hidden");
  }
  return (
    <>
      <div className="bg-black">
        <Container>
          <nav>
            <div className="d-flex justify-content-between align-items-center py-3">
              <img src={logo} alt="logo" />
              <div
                onClick={() => setnav(true)}
                className={`${
                  nav
                    ? "d-flex align-items-center nav_sm gap-5 m-0 "
                    : "d-flex justify-content-cente nav_sm nav_show align-items-center"
                }`}
                // className="d-flex align-items-center gap-5"
              >
                <ul className="flex-lg-row d-flex flex-column flex-r gap-lg-5 gap-4 mb-0 p-0">
                  <li
                    onClick={() => setnav(true)}
                    className=" text-center cursor links ff_M_PLUS_1"
                  >
                    Home
                  </li>
                  <li
                    onClick={() => setnav(true)}
                    className="text-center cursor links ff_M_PLUS_1"
                  >
                    About
                  </li>
                  <li
                    onClick={() => setnav(true)}
                    className="text-center cursor links ff_M_PLUS_1"
                  >
                    Team
                  </li>
                  <li
                    onClick={() => setnav(true)}
                    className="text-center cursor links ff_M_PLUS_1"
                  >
                    RoadMap
                  </li>
                  <li
                    onClick={() => setnav(true)}
                    className="text-center cursor links ff_M_PLUS_1"
                  >
                    FAQ
                  </li>
                  <li
                    className="d-lg-none d-block"
                    onClick={() => setnav(true)}
                  >
                    <button className="close-btn d-flex justify-content-center align-items-center">
                      ❌
                    </button>
                  </li>
                </ul>
                <div className="d-flex gap-3 ">
                  <div className="cursor">
                    <Instagramicon />
                  </div>
                  <div className="cursor">
                    <Discordicon />
                  </div>
                  <div className="cursor">
                    <Twittericon />
                  </div>
                </div>
                <div className="btn-border mt-lg-0 mt-3">
                  <button className="connect-btn text-xsm fw-normal ff_Black_Han_Sans text-white">
                    Connect Wallet
                  </button>
                </div>
              </div>
              <button
                className="d-lg-none d-block home-btn d-flex justify-content-center align-items-center"
                onClick={() => setnav(false)}
              >
                🏡
              </button>
            </div>
          </nav>
        </Container>
      </div>
    </>
  );
};

export default MyNavbar;
