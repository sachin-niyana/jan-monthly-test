import React, { useState } from "react";
import { Container } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { Text } from "./Helper";

const MyAccordion = () => {
  const [activeKey, setActiveKey] = useState("0");

  const handleAccordionToggle = (eventKey) => {
    setActiveKey(activeKey === eventKey ? null : eventKey);
  };

  return (
    <>
      <div className="section-bg">
        <div className="faq-bg faq-mb">
          <Container className="pt-4">
            <h3 className="text-center text-white text-4xl fw-normal ff_Black_Han_Sans">
              FAQs
            </h3>
            <Accordion
              activeKey={activeKey}
              onSelect={handleAccordionToggle}
              className="pt-1"
            >
              {Text.map((faq, index) => (
                <Accordion.Item
                  key={index}
                  eventKey={index.toString()}
                  className="mt-4 accordion_border mx-auto"
                >
                  <Accordion.Header className="p-0 accordion-header text-white text-sm fw-semibold ff_poppins">
                    {faq.heading}
                  </Accordion.Header>
                  <Accordion.Body className="p-3 text-white text-xsm fw-normal ff_M_PLUS_1">
                    {faq.peragraph}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </Container>
        </div>
      </div>
    </>
  );
};

export default MyAccordion;
