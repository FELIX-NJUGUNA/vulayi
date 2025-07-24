import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaStar, FaShieldAlt, FaMapMarkedAlt, FaConciergeBell } from "react-icons/fa";
import { colors } from "../assets/styles/color"; 
const features = [
  {
    icon: <FaStar />,
    title: "Top Rated Experience",
    description: "Guests consistently give us 5-star ratings for cleanliness, hospitality, and location.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Safe & Secure",
    description: "We prioritize your safety with 24/7 surveillance and secure check-in systems.",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Prime Location",
    description: "Located minutes from top attractions, restaurants, and business hubs.",
  },
  {
    icon: <FaConciergeBell />,
    title: "Exceptional Service",
    description: "Our team is always available to make your stay smooth and memorable.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <Section id="why-choose-us">
      <Title>Why Choose Vulayi</Title>
      <Grid>
        {features.map((item, index) => (
          <Card
            key={index}
            as={motion.div}
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 40 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <Icon>{item.icon}</Icon>
            <CardTitle>{item.title}</CardTitle>
            <Description>{item.description}</Description>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default WhyChooseUs;

// Styled Components
const Section = styled.section`
  background: ${colors.background};
  padding: 5rem 2rem;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 2rem;
  justify-items: center;
`;

const Card = styled.div`
  background: ${colors.white};
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 10px 20px rgba(34, 87, 50, 0.1);
  text-align: center;
  max-width: 300px;
`;

const Icon = styled.div`
  font-size: 2.5rem;
  color: ${colors.primary};
  margin-bottom: 1rem;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${colors.text};
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-size: 1rem;
  color: ${colors.subText};
  line-height: 1.5;
`;
