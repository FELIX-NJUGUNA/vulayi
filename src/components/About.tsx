import React from "react";
import styled from "styled-components";
import aboutImage from "../assets/images/receptionist.jpg";
import { colors } from "../assets/styles/color";

const AboutSection = styled.section`
  display: flex;
  flex-wrap: wrap;
  padding: 60px 20px;
  background-color: ${colors.background};
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
  }
`;

const ImageWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 450px;

  img {
    width: 100%;
    height: auto;
    border-radius: 12px;
    object-fit: cover;
  }
`;


const ContentWrapper = styled.div`
  flex: 1;
  min-width: 300px;
  max-width: 600px;
`;

// const Badge = styled.div`
//   background-color: ${colors.primary};
//   color: ${colors.white};
//   padding: 10px 20px;
//   border-radius: 8px;
//   font-weight: bold;
//   font-size: 0.9rem;
//   display: inline-block;
//   margin-bottom: 10px;
// `;

const Subtitle = styled.h4`
  color: ${colors.subText};
  margin-bottom: 5px;
  font-size: 0.9rem;
  letter-spacing: 1.5px;
  text-transform: uppercase;
`;

const Title = styled.h2`
  font-size: 2.2rem;
  color: ${colors.text};
  font-family: "Manrope", sans-serif;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
  }
`;

const Description = styled.p`
  color: ${colors.subText};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: 30px;
`;

const Stats = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;

  @media (max-width: 768px) {
    justify-content: center;
  }
`;

const StatItem = styled.div`
  font-weight: bold;
  font-size: 1.1rem;
  color: ${colors.primary};

  span {
    display: block;
    font-size: 0.9rem;
    color: ${colors.subText};
    font-weight: normal;
    margin-top: 5px;
  }
`;

const Signature = styled.div`
  margin-top: 30px;
  font-family: 'Pacifico', cursive;
  font-size: 1.2rem;
  color: ${colors.text};

  span {
    display: block;
    font-size: 0.9rem;
    font-family: 'Poppins', sans-serif;
    color: ${colors.subText};
  }
`;

const About: React.FC = () => {
  return (
    <AboutSection id="about">
      <ImageWrapper>
        <img src={aboutImage} alt="Vulayi Receptionist" />
      </ImageWrapper>
      
      <ContentWrapper>
        {/* <Badge>16+ Years of Excellence</Badge> */}
        <Subtitle>About Us</Subtitle>
        <Title>Luxury Comfort, Timeless Elegance at Vulayi</Title>
        <Description>
          At Vulayi, we pride ourselves on providing unforgettable stays and events. With decades of excellence, our hospitality team ensures every guest enjoys seamless luxury from arrival to departure.
        </Description>

        <Stats>
          <StatItem>
            70+<span>Luxury Suites</span>
          </StatItem>
          <StatItem>
            100,000+<span>Happy Guests</span>
          </StatItem>
          <StatItem>
            98%<span>Client Satisfaction</span>
          </StatItem>
        </Stats>

        <Signature>
          Director
        </Signature>
      </ContentWrapper>
    </AboutSection>
  );
};

export default About;
