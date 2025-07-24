import React from "react";
import styled, { keyframes } from "styled-components";
import { motion } from "framer-motion";

import img1 from "../assets/images/gal1.jpg";
import img2 from "../assets/images/gal2.jpg";
import img3 from "../assets/images/gal3.jpg";
import img4 from "../assets/images/gal4.jpg";
import img5 from "../assets/images/gal5.jpg";
import img6 from "../assets/images/gal6.jpg";
import img7 from "../assets/images/gal7.jpg";

// COLORS
//const primaryColor = "#225732";
const gradientOverlay = `linear-gradient(to bottom, rgba(34, 87, 50, 0.9), rgba(0,0,0,0.85))`;

const Wrapper = styled.section`
  background: ${gradientOverlay}, url('/overlay-pattern.png');
  background-blend-mode: overlay;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding: 5rem 1rem;
  overflow: hidden;
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 3rem;
  color: transparent;
  background: linear-gradient(to right, #ffffff, #cfd8dc);
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 1.5px;
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ImageTrack = styled.div`
  display: flex;
  gap: 1.5rem;
  width: max-content;
  animation: ${fadeIn} 1s ease;

  img {
    width: 300px;
    height: 200px;
    object-fit: cover;
    border-radius: 14px;
    box-shadow: 0 15px 25px rgba(0, 0, 0, 0.25);
    cursor: pointer;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.05);
    }

    @media (max-width: 768px) {
      width: 220px;
      height: 150px;
    }
  }
`;

const Row = styled.div<{ direction?: "normal" | "reverse" }>`
  overflow: hidden;
  margin: 3rem 0;

  ${ImageTrack} {
    animation: ${scroll} 60s linear infinite;
    animation-direction: ${({ direction }) =>
      direction === "reverse" ? "reverse" : "normal"};
  }
`;

// Image arrays
const topImages = [img1, img2, img3, img4, img5, img6, img7];
const bottomImages = [...topImages].reverse();

const Gallery: React.FC = () => {
  return (
    <Wrapper id="gallery">
      <Heading>Vulayi Moments</Heading>

      {/* Top row */}
      <Row direction="normal">
        <ImageTrack>
          {[...topImages, ...topImages].map((src, i) => (
            <motion.img
              key={`top-${i}`}
              src={src}
              alt={`Top ${i}`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            />
          ))}
        </ImageTrack>
      </Row>

      {/* Bottom row */}
      <Row direction="reverse">
        <ImageTrack>
          {[...bottomImages, ...bottomImages].map((src, i) => (
            <motion.img
              key={`bottom-${i}`}
              src={src}
              alt={`Bottom ${i}`}
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
            />
          ))}
        </ImageTrack>
      </Row>
    </Wrapper>
  );
};

export default Gallery;
