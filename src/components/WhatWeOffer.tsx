import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaHotel, FaMapMarkedAlt, FaLeaf, FaSmile } from "react-icons/fa";
import { colors } from "../assets/styles/color";
const offers = [
  {
    icon: <FaHotel />,
    title: "Comfortable Stays",
    description:
      "Experience home-like comfort in tastefully furnished spaces that feel both cozy and elegant.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Great Location",
    description:
      "Situated near breathtaking views, tourist attractions, and easy access to town.",
  },
  {
    icon: <FaLeaf />,
    title: "Eco Friendly",
    description:
      "Sustainable living with nature-inspired design and solar energy systems.",
  },
  {
    icon: <FaSmile />,
    title: "Exceptional Service",
    description:
      "Friendly and professional staff ensuring your stay is smooth, safe, and satisfying.",
  },
];

const WhatWeOffer: React.FC = () => {
  return (
    <Section id="offerings">
      <Heading>What We Offer</Heading>
      <Grid>
        {offers.map((offer, index) => (
          <Card
            key={index}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Icon>{offer.icon}</Icon>
            <Title>{offer.title}</Title>
            <Description>{offer.description}</Description>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default WhatWeOffer;

// Styled Components

const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${colors.background};
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.8rem;
  margin-bottom: 3rem;
  color: ${colors.primary};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
`;

const Card = styled(motion.div)`
  background: ${colors.white};
  border-radius: 18px;
  padding: 2rem;
  box-shadow: 0 12px 25px rgba(0, 0, 0, 0.06);
  transition: all 0.3s ease;

  &:hover {
    border: 2px solid ${colors.primary};
  }
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 1.2rem;
`;

const Title = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.8rem;
  color: ${colors.text};
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${colors.subText};
  line-height: 1.6;
`;
