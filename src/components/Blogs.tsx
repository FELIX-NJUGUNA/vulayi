import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { colors } from "../assets/styles/color"; 
import img1 from "../assets/images/blog1.jpg";
import img2 from "../assets/images/blog2.jpg";
import img3 from "../assets/images/blog3.jpg";

const blogPosts = [
  {
    title: "Top 5 Luxury Rooms to Book This Season",
    excerpt:  
      "Explore our finest rooms and suites, designed for comfort and elegance at unbeatable rates...",
    image: img1,
    link: "#",
  },
  {
    title: "Hosting the Perfect Event: Tips & Trends",
    excerpt:
      "From weddings to corporate events — here’s how to plan the perfect gathering with our services...",
    image: img2,
    link: "#",
  },
  {
    title: "Cutlery Services You Didn’t Know You Needed",
    excerpt:
      "Our premium cutlery and catering services ensure your guests are always impressed...",
    image: img3,
    link: "#",
  },
];

const Blogs: React.FC = () => {
  return (
    <Section id="news">
      <Heading>Latest News & Blogs</Heading>
      <Grid>
        {blogPosts.map((post, index) => (
          <Card
            as={motion.div}
            key={index}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 150 }}
          >
            <Image src={post.image} alt={post.title} />
            <Content>
              <Title>{post.title}</Title>
              <Excerpt>{post.excerpt}</Excerpt>
              <ReadMore href={post.link}>Read More →</ReadMore>
            </Content>
          </Card>
        ))}
      </Grid>
    </Section>
  );
};

export default Blogs;

// Styled Components
const Section = styled.section`
  padding: 5rem 2rem;
  background-color: ${colors.background};
`;

const Heading = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 3rem;
  color: ${colors.primary};
  font-weight: 700;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: ${colors.white};
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  transition: 0.3s ease;
`;

const Image = styled.img`
  width: 100%;
  height: 220px;
  object-fit: cover;
`;

const Content = styled.div`
  padding: 1.8rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

const Title = styled.h3`
  font-size: 1.4rem;
  color: ${colors.text};
  margin-bottom: 0.6rem;
  font-weight: 600;
`;

const Excerpt = styled.p`
  color: ${colors.subText};
  font-size: 1rem;
  line-height: 1.6;
  margin-bottom: auto;
`;

const ReadMore = styled.a`
  margin-top: 1.5rem;
  font-weight: 600;
  color: ${colors.primary};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: darken(${colors.primary}, 10%);
  }
`;
