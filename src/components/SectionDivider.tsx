import React from "react";
import styled, { keyframes } from "styled-components";
import { colors } from "../assets/styles/color";
import {
  FaHotel,
  FaUtensils,
  FaCalendarAlt,
  FaBed,
  FaSmile,
  FaLeaf,
} from "react-icons/fa";

// Smooth scrolling animation
const scroll = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

const DividerWrapper = styled.div`
  width: 100%;
  background: ${colors.primary};
  padding: 1.5rem 0;
  overflow: hidden;

  &:hover div {
    animation-play-state: paused;
  }
`;

const DividerContent = styled.div`
  display: inline-flex;
  align-items: center;
  white-space: nowrap;
  margin-left: 1rem;
  animation: ${scroll} 0s linear infinite;
  gap: 3.2rem;
`;

const Message = styled.div`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  font-size: 1.05rem;
  font-weight: 600;
  color: ${colors.white};
`;

const SectionDivider: React.FC = () => {
  const messages = [
    { text: "Comfortability You Can Trust", icon: <FaBed /> },
    { text: "Top-notch Catering", icon: <FaUtensils /> },
    { text: "Event Planning Experts", icon: <FaCalendarAlt /> },
    { text: "Modern Accommodations", icon: <FaHotel /> },
    { text: "Tailored Guest Experience", icon: <FaSmile /> },
    { text: "Serenity & Elegance Combined", icon: <FaLeaf /> },
  ];

  return (
    <DividerWrapper>
      <DividerContent>
        {[...messages, ...messages].map((msg, index) => (
          <Message key={index}>
            {msg.icon}
            {msg.text}
          </Message>
        ))}
      </DividerContent>
    </DividerWrapper>
  );
};

export default SectionDivider;
