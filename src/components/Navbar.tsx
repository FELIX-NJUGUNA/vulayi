import React, { useState } from "react";
import styled from "styled-components";
import { FiMenu, FiX } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { colors } from "../assets/styles/color";
import logo from "../assets/logos/without_bg.webp"

const NavContainer = styled.nav`
  width: 100%;
  padding: 10px 40px;
  background: ${colors.white};
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 999;
  position: relative;

  @media (max-width: 768px) {
    padding: 10px 20px;
  }
`;

const Logo = styled.div`
  a {
    display: inline-block;
  }

  img {
    height: 50px;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    img {
      height: 40px;
    }
  }
`;

const NavLinks = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  li {
    color: ${colors.primary};
    font-size: 0.95rem;
    font-weight: 500;
    cursor: pointer;
    position: relative;
    padding-bottom: 4px;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.primary}; /* Optional: adjust if needed */
    }

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      height: 2px;
      width: 100%;
      background: ${colors.primary};
      transform: scaleX(0);
      transform-origin: left;
      transition: transform 0.3s ease-in-out;
    }

    &:hover::after {
      transform: scaleX(1);
    }
  }

  @media (max-width: 768px) {
    display: none;
  }
`;


const Hamburger = styled.div`
  display: none;
  font-size: 1.8rem;
  color: ${colors.primary};
  z-index: 1001;

  @media (max-width: 768px) {
    display: block;
  }
`;

const MobileMenu = styled(motion.div)`
  position: absolute;
  top: 130px;
  right: 0;
  width: 75vw;
  max-width: 300px;
  background: ${colors.primary};
  padding: 30px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 1000;

  li {
    color: #fff;
    font-size: 1rem;
    font-weight: 500;

    &:hover {
      color: #ffd369;
    }
  }
`;

const CTAButton = styled.a`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 12px 24px;
  font-weight: bold;
  border-radius: 50px;
  text-align: center;
  font-size: 1rem;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.white};
    color: ${colors.primary};
  }

  @media (max-width: 768px) {
    width: 100%;
    display: block;
    margin-top: 10px;
  }
`;

const DesktopCTA = styled.div`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <NavContainer>
        <Logo>
          <a href="/">
        <img src={logo} alt="Vulayi Logo" />
          </a>
        </Logo>

        <NavLinks>
          <a href="#home"><li>Home</li></a>
          <a href="#about"><li>About</li></a>
          <a href="#gallery"><li>Gallery</li></a>
          <a href="#why-choose-us"><li>Why Us</li></a>
          <a href="#services"><li>Services</li></a>
          <a href="#news"><li>News</li></a>
          <a href="#faq"><li>FAQs</li></a>
          <a href="#contact"><li>Contact</li></a>
        </NavLinks>

        {/* Desktop CTA */}
        <DesktopCTA>
          <CTAButton href="#booking">Book Now</CTAButton>
        </DesktopCTA>

        {/* Hamburger */}
        <Hamburger onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <FiX /> : <FiMenu />}
        </Hamburger>
      </NavContainer>

      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <li onClick={() => setIsOpen(false)}>Home</li>
            <li onClick={() => setIsOpen(false)}>About</li>
            <li onClick={() => setIsOpen(false)}>Why Us</li>
            <li onClick={() => setIsOpen(false)}>Services</li>
            <li onClick={() => setIsOpen(false)}>Gallery</li>
            <li onClick={() => setIsOpen(false)}>News</li>
            <li onClick={() => setIsOpen(false)}>FAQs</li>
            <li onClick={() => setIsOpen(false)}>Contact</li>

            {/* Mobile CTA */}
            <CTAButton href="#booking">Book Now</CTAButton>
          </MobileMenu>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
