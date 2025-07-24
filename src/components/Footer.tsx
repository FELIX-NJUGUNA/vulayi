import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { colors } from "../assets/styles/color";
import logo from "../assets/logos/without_bg.webp"

const FooterContainer = styled.footer`
  background-color: ${colors.primary};
  color: ${colors.white};
  padding: 4rem 2rem 2rem;
`;

const FooterGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: auto;
`;

const Section = styled.div``;

const Brand = styled.div`
  background: ${colors.white};
  width: fit-content;
  border-radius: 10px;
  margin-bottom: 1.5rem;
  padding: 0.5rem;
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


const Text = styled.p`
  font-size: 1rem;
  line-height: 1.7;
  color: ${colors.white};
`;

const List = styled.ul`
  list-style: none;
  padding: 0;
`;

const ListItem = styled.li`
  margin-bottom: 0.8rem;

  a {
    color: ${colors.white};
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      color: ${colors.background};
    }
  }
`;

const ContactInfo = styled.p`
  font-size: 0.95rem;
  color: ${colors.white};
  margin-bottom: 0.5rem;
`;

const SocialIcons = styled.div`
  display: flex;
  gap: 1rem;
  margin-top: 1rem;

  a {
    color: ${colors.white};
    font-size: 1.25rem;
    transition: color 0.3s ease;

    &:hover {
      color: ${colors.background};
    }
  }
`;

const SectionTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  color: ${colors.white};
`;

const BottomBar = styled.div`
  text-align: center;
  margin-top: 3rem;
  padding-top: 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  font-size: 0.9rem;
  color: ${colors.white};
  opacity: 0.8;
`;

const Footer = () => {
  return (
    <FooterContainer id = "contact">
      <FooterGrid>
        <Section>
          <Brand>
            <img src={logo} alt="Vulayi Logo" />
          </Brand>
          <Text>
            A serene escape offering premium rooms, delightful catering, and expert event planning.
            Discover comfort, elegance, and unforgettable experiences at Vulayi.
          </Text>
          <SocialIcons>
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaYoutube /></a>
          </SocialIcons>
        </Section>

        <Section>
          <SectionTitle>Quick Links</SectionTitle>
          <List>
            <ListItem><a href="#home">Home</a></ListItem>
            <ListItem><a href="#about">About</a></ListItem>
            <ListItem><a href="#services">Services</a></ListItem>
            <ListItem><a href="#booking">Booking</a></ListItem>
            <ListItem><a href="#gallery">Gallery</a></ListItem>
            <ListItem><a href="#contact">Contact</a></ListItem>
          </List>
        </Section>

        <Section>
          <SectionTitle>Contact Us</SectionTitle>
          <ContactInfo>Email: info@vulayi.com</ContactInfo>
          <ContactInfo>Phone: +254 712 345 678</ContactInfo>
          <ContactInfo>Location: Naivasha, Kenya</ContactInfo>
        </Section>
      </FooterGrid>

      <BottomBar>
        © {new Date().getFullYear()} Vulayi. All rights reserved.
      </BottomBar>
    </FooterContainer>
  );
};

export default Footer;
