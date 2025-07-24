import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../assets/styles/color"; 

const testimonials = [
  {
    name: "Grace W.",
    feedback:
      "Our stay at Vulayi was magical! The room was spotless and the staff were incredibly helpful.",
    location: "Nairobi, Kenya",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Michael K.",
    feedback:
      "We held our event here and the planning team handled everything perfectly. Highly recommended!",
    location: "Mombasa, Kenya",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Lilian A.",
    feedback:
      "Loved the food and ambiance! A perfect getaway spot. Booking again soon!",
    location: "Kisumu, Kenya",
    image: "https://randomuser.me/api/portraits/women/22.jpg",
  },
];

const Testimonials: React.FC = () => {
  return (
    <Section id="testimonials">
      <Heading>What Our Guests Say</Heading>
      <Grid>
        {testimonials.map((t, index) => (
          <TestimonialCard key={index} whileHover={{ scale: 1.04 }}>
            <Avatar src={t.image} alt={t.name} />
            <Name>{t.name}</Name>
            <Location>{t.location}</Location>
            <Quote>“{t.feedback}”</Quote>
          </TestimonialCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Testimonials;


const Section = styled.section`
  background-color: ${colors.background};
  padding: 5rem 2rem;
  text-align: center;
`;

const Heading = styled.h2`
  font-size: 2.4rem;
  font-weight: 700;
  color: ${colors.primary};
  margin-bottom: 3rem;
`;

const Grid = styled.div`
  display: grid;
  gap: 2.5rem;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
`;

const TestimonialCard = styled(motion.div)`
  background: ${colors.white};
  border-radius: 16px;
  padding: 2rem;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.05);
  transition: 0.3s ease;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Avatar = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 1.2rem;
  border: 3px solid ${colors.primary};
`;

const Name = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  color: ${colors.text};
  margin: 0.4rem 0;
`;

const Location = styled.p`
  font-size: 0.9rem;
  color: ${colors.subText};
  margin-bottom: 1rem;
`;

const Quote = styled.p`
  font-size: 1rem;
  color: ${colors.text};
  font-style: italic;
  line-height: 1.6;
`;
