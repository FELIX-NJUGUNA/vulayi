"use client";

import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

// Import your images
import img1 from "../assets/images/gal1.webp";
import img2 from "../assets/images/gal2.webp";
import img3 from "../assets/images/gal3.webp";
import img4 from "../assets/images/gal4.webp";
import img5 from "../assets/images/gal5.webp";
import img6 from "../assets/images/gal6.webp";
import img7 from "../assets/images/gal7.webp";
import bot1 from "../assets/images/bot1.webp";
import bot2 from "../assets/images/bot2.webp";
import bot3 from "../assets/images/bot3.webp";
import bot4 from "../assets/images/bot4.webp";
import bot5 from "../assets/images/bot5.webp";
import bot6 from "../assets/images/bot6.webp";
import bot7 from "../assets/images/bot7.webp";

const topImages = [img1, img2, img3, img4, img5, img6, img7];
const bottomImages = [bot1, bot2, bot3, bot4, bot5, bot6, bot7];

// Modern gradient with glass morphism effect
const modernGradient = `linear-gradient(135deg, 
  rgba(34, 87, 50, 0.95) 0%,
  rgba(22, 58, 36, 0.9) 50%,
  rgba(12, 36, 24, 0.85) 100%
)`;

const Wrapper = styled.section`
  background: ${modernGradient};
  position: relative;
  padding: 6rem 1rem;
  overflow: hidden;
  
  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 80%, rgba(120, 219, 226, 0.1) 0%, transparent 50%),
      radial-gradient(circle at 80% 20%, rgba(255, 215, 0, 0.08) 0%, transparent 50%),
      radial-gradient(circle at 40% 40%, rgba(120, 119, 198, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }
`;

const Heading = styled.h2`
  text-align: center;
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 4rem;
  color: transparent;
  background: linear-gradient(135deg, #ffffff 0%, #c8e6c9 50%, #81c784 100%);
  -webkit-background-clip: text;
  background-clip: text;
  letter-spacing: 2px;
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #81c784, transparent);
  }

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const scroll = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

const ImageTrack = styled.div<{ speed?: number }>`
  display: flex;
  gap: 2rem;
  width: max-content;
  
  img {
    border-radius: 20px;
    box-shadow: 
      0 20px 40px rgba(0, 0, 0, 0.3),
      0 0 0 1px rgba(255, 255, 255, 0.1);
    cursor: pointer;
    transition: all 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
    
    &:hover {
      transform: translateY(-10px) scale(1.03);
      box-shadow: 
        0 30px 60px rgba(0, 0, 0, 0.4),
        0 0 0 1px rgba(255, 255, 255, 0.2);
    }
  }
`;

const Row = styled.div<{ direction?: "normal" | "reverse"; speed?: number }>`
  overflow: hidden;
  margin: 4rem 0;
  position: relative;
  
  &::before, &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 100px;
    z-index: 2;
    pointer-events: none;
  }
  
  &::before {
    left: 0;
    background: linear-gradient(90deg, rgba(22, 58, 36, 1), transparent);
  }
  
  &::after {
    right: 0;
    background: linear-gradient(90deg, transparent, rgba(22, 58, 36, 1));
  }

  ${ImageTrack} {
    animation: ${scroll} ${props => props.speed || 60}s linear infinite;
    animation-direction: ${({ direction }) => direction === "reverse" ? "reverse" : "normal"};
    
    &:hover {
      animation-play-state: paused;
    }
  }

  @media (max-width: 768px) {
    margin: 3rem 0;
    
    &::before, &::after {
      width: 50px;
    }
  }
`;

// Modal Styles for lightbox
const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 2rem;
`;

const ModalContent = styled(motion.div)`
  position: relative;
  max-width: 90vw;
  max-height: 90vh;
  
  img {
    border-radius: 20px;
    box-shadow: 0 40px 80px rgba(0, 0, 0, 0.5);
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: -50px;
  right: 0;
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: scale(1.1);
  }
`;

const NavigationButton = styled.button<{ position: "left" | "right" }>`
  position: absolute;
  top: 50%;
  ${props => props.position === "left" ? "left: -60px;" : "right: -60px;"}
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.1);
  border: none;
  color: white;
  font-size: 1.5rem;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  cursor: pointer;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  
  &:hover {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-50%) scale(1.1);
  }

  @media (max-width: 768px) {
    ${props => props.position === "left" ? "left: 10px;" : "right: 10px;"}
    width: 40px;
    height: 40px;
  }
`;

const ImageCounter = styled.div`
  position: absolute;
  bottom: -50px;
  left: 50%;
  transform: translateX(-50%);
  color: white;
  font-size: 1rem;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem 1rem;
  border-radius: 20px;
  backdrop-filter: blur(10px);
`;

const allImages = [...topImages, ...bottomImages];

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setSelectedImage(index);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateImage = (direction: "prev" | "next") => {
    if (selectedImage === null) return;
    
    if (direction === "next") {
      setSelectedImage((selectedImage + 1) % allImages.length);
    } else {
      setSelectedImage(selectedImage === 0 ? allImages.length - 1 : selectedImage - 1);
    }
  };

  // Handle keyboard navigation
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (selectedImage === null) return;
      
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") navigateImage("next");
      if (e.key === "ArrowLeft") navigateImage("prev");
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedImage]);

  return (
    <Wrapper id="gallery">
      <Heading>Vulayi Moments</Heading>

      {/* Top Row - Faster animation */}
      <Row direction="normal" speed={50}>
        <ImageTrack>
          {[...topImages, ...topImages].map((src, i) => (
            <motion.div
              key={`top-${i}`}
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => openLightbox(i % topImages.length)}
            >
              <Image
                src={src}
                alt={`Vulayi moment ${(i % topImages.length) + 1}`}
                width={320}
                height={220}
                loading={i > 2 ? "lazy" : "eager"}
                priority={i < 2}
                placeholder="blur"
                style={{
                  borderRadius: "20px",
                  objectFit: "cover",
                  width: "320px",
                  height: "220px",
                }}
              />
            </motion.div>
          ))}
        </ImageTrack>
      </Row>

      {/* Bottom Row - Slower animation for variation */}
      <Row direction="reverse" speed={70}>
        <ImageTrack>
          {[...bottomImages, ...bottomImages].map((src, i) => (
            <motion.div
              key={`bottom-${i}`}
              whileHover={{ scale: 1.05, y: -10 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              onClick={() => openLightbox(i % bottomImages.length + topImages.length)}
            >
              <Image
                src={src}
                alt={`Vulayi moment ${(i % bottomImages.length) + topImages.length + 1}`}
                width={320}
                height={220}
                loading="lazy"
                placeholder="blur"
                style={{
                  borderRadius: "20px",
                  objectFit: "cover",
                  width: "320px",
                  height: "220px",
                }}
              />
            </motion.div>
          ))}
        </ImageTrack>
      </Row>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage !== null && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
          >
            <ModalContent
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={allImages[selectedImage]}
                alt={`Vulayi moment ${selectedImage + 1}`}
                width={800}
                height={600}
                style={{
                  borderRadius: "20px",
                  objectFit: "contain",
                  maxWidth: "90vw",
                  maxHeight: "90vh",
                }}
              />
              
              <CloseButton onClick={closeLightbox}>×</CloseButton>
              
              <NavigationButton 
                position="left" 
                onClick={() => navigateImage("prev")}
              >
                ‹
              </NavigationButton>
              
              <NavigationButton 
                position="right" 
                onClick={() => navigateImage("next")}
              >
                ›
              </NavigationButton>
              
              <ImageCounter>
                {selectedImage + 1} / {allImages.length}
              </ImageCounter>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </Wrapper>
  );
};

export default Gallery;