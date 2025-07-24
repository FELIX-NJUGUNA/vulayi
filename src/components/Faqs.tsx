import { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp, FaPhone, FaEnvelope, FaMapMarkerAlt, FaComments } from "react-icons/fa";
import { colors } from "../assets/styles/color";

const faqData = [
  {
    question: "What is the check-in and check-out time?",
    answer: "Check-in is from 2:00 PM, and check-out is until 11:00 AM.",
  },
  {
    question: "Do you offer airport pickup services?",
    answer: "Yes, we offer airport pickup upon request. Please contact us in advance.",
  },
  {
    question: "Are pets allowed at Vulayi?",
    answer: "Unfortunately, pets are not allowed at the property.",
  },
  {
    question: "Is breakfast included in the booking?",
    answer: "Currently, we do not offer breafast services but you can hire a personal chef at an extra cost.",
  },
];

const Section = styled.section`
  background: ${colors.white};
  padding: 5rem 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
`;

const Container = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 3rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: ${colors.primary};
`;

const LeftColumn = styled.div`
  flex: 1 1 500px;
  max-width: 600px;
`;

const RightColumn = styled.div`
  flex: 1 1 300px;
  max-width: 320px;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const AccordionItem = styled(motion.div)<{ active: boolean }>`
  background: ${({ active }) => (active ? colors.primary : colors.white)};
  color: ${({ active }) => (active ? colors.white : colors.text)};
  border-radius: 12px;
  padding: 1rem 1.25rem;
  margin-bottom: 1rem;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
  cursor: pointer;
  transition: background 0.3s ease, color 0.3s ease;
`;

const Question = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.1rem;
  font-weight: 600;
`;

const Answer = styled(motion.div)`
  font-size: 1rem;
  line-height: 1.6;
  margin-top: 0.75rem;
  color: ${colors.white};
`;

const CardBase = styled.div`
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.05);
  padding: 1.5rem;
  background: ${colors.background};
  color: ${colors.text};
`;

const ContactCard = styled(CardBase)`
  background: ${colors.primary};
  color: ${colors.white};
  text-align: center;

  svg {
    font-size: 2rem;
    margin-bottom: 0.5rem;
    color: ${colors.white};
  }

  h4 {
    margin: 0.5rem 0;
  }

  p {
    font-size: 0.95rem;
  }
`;

const ContactInfo = styled(CardBase)`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    font-size: 0.95rem;
  }

  svg {
    color: ${colors.primary};
    font-size: 1rem;
  }
`;

const Faq = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <Section id="faq">
      <Container>
        <Title>Frequently Asked Questions</Title>
      </Container>

      <LeftColumn>
        {faqData.map((faq, index) => {
          const isActive = activeIndex === index;
          return (
            <AccordionItem
              key={index}
              active={isActive}
              onClick={() => toggle(index)}
              layout
              transition={{ layout: { duration: 0.4, type: "spring" } }}
            >
              <Question>
                {faq.question}
                {isActive ? <FaChevronUp /> : <FaChevronDown />}
              </Question>
              <AnimatePresence>
                {isActive && (
                  <Answer
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {faq.answer}
                  </Answer>
                )}
              </AnimatePresence>
            </AccordionItem>
          );
        })}
      </LeftColumn>

      <RightColumn>
        <ContactCard>
          <FaComments />
          <h4>Have different questions?</h4>
          <p>Reach out to us. We’ll respond as soon as possible.</p>
        </ContactCard>

        <ContactInfo>
          <div>
            <FaPhone />
            +254 712 345 678
          </div>
          <div>
            <FaEnvelope />
            support@vulayi.com
          </div>
          <div>
            <FaMapMarkerAlt />
            Vulayi Hotel, Nairobi, Kenya
          </div>
        </ContactInfo>
      </RightColumn>
    </Section>
  );
};

export default Faq;
