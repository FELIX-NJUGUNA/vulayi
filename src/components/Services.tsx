import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../assets/styles/color";
import img1 from "../assets/images/gal1.jpg";
import img2 from "../assets/images/gal2.jpg";
import img3 from "../assets/images/gal3.jpg";
import img4 from "../assets/images/gal4.jpg";
import img5 from "../assets/images/gal5.jpg";
import img6 from "../assets/images/gal6.jpg";
import img7 from "../assets/images/gal7.jpg";

const Section = styled.section`
  padding: 5rem 2rem;
  background: ${colors.background};
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  color: ${colors.primary};
`;

const Tabs = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 1rem;
  margin-bottom: 3rem;
`;

const Tab = styled(motion.button)<{ isActive: boolean }>`
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  color: ${({ isActive }) => (isActive ? colors.white : colors.primary)};
  background: ${({ isActive }) => (isActive ? colors.primary : "#e5f3ee")};
  transition: all 0.3s ease;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

const CardsWrapper = styled.div`
  overflow-x: auto;
  scroll-snap-type: x mandatory;
  display: flex;
  gap: 1.5rem;
  padding-bottom: 1rem;

  @media (min-width: 768px) {
    overflow-x: unset;
    flex-wrap: wrap;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }
`;

const Card = styled(motion.div)`
  flex: 0 0 85%;
  scroll-snap-align: start;
  background: ${colors.white};
  border-radius: 16px;
  box-shadow: 0 10px 30px rgba(34, 87, 50, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 15px 45px rgba(34, 87, 50, 0.2);
  }

  @media (min-width: 768px) {
    flex: unset;
    scroll-snap-align: unset;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const CardContent = styled.div`
  padding: 1.5rem;
  text-align: left;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  color: ${colors.text};
  margin-bottom: 0.4rem;
`;

const CardPrice = styled.p`
  font-size: 1.1rem;
  color: ${colors.primary};
  font-weight: 600;
  margin-bottom: 0.6rem;
`;

const CardDescription = styled.p`
  font-size: 0.95rem;
  color: ${colors.subText};
  line-height: 1.5;
  margin-bottom: 1rem;
`;

const BookButton = styled.a`
  margin-top: auto;
  display: inline-block;
  text-align: center;
  padding: 0.6rem 1.2rem;
  background: ${colors.primary};
  color: ${colors.white};
  border-radius: 6px;
  text-decoration: none;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: #1a4429;
  }
`;

// Services data with images
const categories = ["Rooms & Suites", "Space Booking", "Event Hosting"];

const services = {
  "Rooms & Suites": [
    {
      name: "Deluxe Room",
      price: "Ksh 5,000  per Night",
      description: "3 bedroom + WiFi + KingSize bed",
      image: img1,
    },
    {
      name: "Family Suite",
      price: "Ksh 5,000",
      description: "3 bedrooms + Kitchen + Lounge.",
      image: img2,
    },
    
  ],
  "Space Booking": [
    {
      name: "Podcast Space",
      price: "Ksh 3,000 - 4 hours",
      description: "Efficient & Cozy Space ",
      image: img4,
    },
    {
      name: "Dj Shooting Space",
      price: "Ksh 2,000 - 3 hours",
      description: "Blaze the music in a beautiful space.",
      image: img5,
    },
    {
      name: "Wedding Shoot Space",
      price: "Ksh 5,000 - 2 hours",
      description: "Cherish each and every moment.",
      image: img6,
    },
    
  ],
  "Event Hosting": [
    {
      name: "Birthday Hosting",
      price: "Ksh 5,000",
      description: "Venue Booking.",
      image: img7,
    },
    {
      name: "Baby Shower",
      price: "Ksh 5,000",
      description: "Venue Booking.",
      image: img4,
    },
    {
      name: "Bridal Shower",
      price: "Ksh 5,000",
      description: "Venue Booking.",
      image: img1,
    },
  ],
};

// Main Component
const Services: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Rooms & Suites");

  return (
    <Section id="services">
      <Title>Our Services</Title>

      <Tabs>
        {categories.map((cat) => (
          <Tab
            key={cat}
            isActive={cat === activeTab}
            onClick={() => setActiveTab(cat)}
            whileTap={{ scale: 0.96 }}
          >
            {cat}
          </Tab>
        ))}
      </Tabs>

      <CardsWrapper>
        {services[activeTab].map((item, index) => (
          <Card
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            viewport={{ once: true }}
          >
            <CardImage src={item.image} alt={item.name} />
            <CardContent>
              <CardTitle>{item.name}</CardTitle>
              <CardPrice>{item.price}</CardPrice>
              <CardDescription>{item.description}</CardDescription>
              <BookButton href="#booking">Book Now</BookButton>
            </CardContent>
          </Card>
        ))}
      </CardsWrapper>
    </Section>
  );
};

export default Services;
