import React from "react";
import styled, { keyframes } from "styled-components";
import video from "../assets/videos/hero-video.mp4";
import { colors } from "../assets/styles/color";
import { FaStar, FaPlay } from "react-icons/fa";

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroWrapper = styled.section`
  position: relative;
  height: 100vh;
  overflow: hidden;
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100vw;
  height: 100vh;
  transform: translate(-50%, -50%);
  object-fit: cover;
  z-index: 0;
`;

const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`;

const Content = styled.div`
  position: relative;
  z-index: 2;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 16px;
  text-align: center;
  animation: ${fadeIn} 1.2s ease-in-out;
`;

const Stars = styled.div`
  color: gold;
  font-size: 1.2rem;
  margin-bottom: 12px;
`;

const Tagline = styled.p`
  color: #ffffffcc;
  text-transform: uppercase;
  font-size: 0.9rem;
  letter-spacing: 2px;
  margin-bottom: 12px;
`;

const Title = styled.h1`
  font-size: 3.2rem;
  color: white;
  font-weight: 700;
  font-family: "Manrope", sans-serif;
  max-width: 800px;

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const Subtitle = styled.p`
  color: #ffffffcc;
  font-size: 1.1rem;
  max-width: 600px;
  line-height: 1.6;
  margin: 20px 0;

  @media (max-width: 768px) {
    font-size: 0.95rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  justify-content: center;
`;

const CTAButton = styled.a`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 30px;
  text-decoration: none;
  font-size: 1rem;
  display: inline-block;
  transition: 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;

const OutlineButton = styled.a`
  border: 2px solid ${colors.white};
  color: ${colors.white};
  padding: 12px 24px;
  border-radius: 30px;
  font-weight: bold;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  text-decoration: none;
  transition: 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.primary};
  }
`;

const Hero: React.FC = () => {
  return (
    <HeroWrapper id="home">
      <VideoBackground autoPlay muted loop playsInline>
        <source src={video} type="video/mp4" />
        Your browser does not support HTML5 video.
      </VideoBackground>

      <Overlay />

      <Content>
        <Stars>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </Stars>
        <Tagline>Where Luxury Meets Excellence</Tagline>
        <Title>Welcome to Vulayi Place</Title>
        <Subtitle>
          Elevate special stays or major events with comfort, elegance, and
          world-class hospitality tailored just for you.
        </Subtitle>

        <Buttons>
          <CTAButton href="#booking">Discover More</CTAButton>
          <OutlineButton href="#video">
            <FaPlay size={12} />
            Watch Video
          </OutlineButton>
        </Buttons>
      </Content>
    </HeroWrapper>
  );
};

export default Hero;
