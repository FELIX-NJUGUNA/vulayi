// src/components/Contact.tsx
import React from "react";
import styled from "styled-components";
import { colors } from "../assets/styles/color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPhone, faEnvelope } from "@fortawesome/free-solid-svg-icons";

const TopContactBar = styled.div`
  width: 100%;
  background: ${colors.primary};
  padding: 10px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-family: "Montserrat", sans-serif;
  font-size: 0.9rem;
  color: white;
  z-index: 10;
  position: relative;

  @media (max-width: 768px) {
    flex-direction: column;
    font-size: 0.8rem;
    text-align: center;
    gap: 5px;
  }
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const Contact: React.FC = () => {
  return (
    <TopContactBar>
      <ContactItem>
        <FontAwesomeIcon icon={faPhone} />
        <span>+254 713 000 123</span>
      </ContactItem>
      <ContactItem>
        <FontAwesomeIcon icon={faEnvelope} />
        <span>hello@vulayi.stays</span>
      </ContactItem>
    </TopContactBar>
  );
};

export default Contact;
