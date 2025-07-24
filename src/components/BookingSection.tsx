import React, { useState } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import { FaCalendarAlt } from "react-icons/fa";
import { colors } from "../assets/styles/color";

const tabs = ["Rooms & Suites", "Space Booking", "Event Hosting"];

const BookingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  const renderFields = () => {
    switch (activeTab) {
      case 0:
        return (
          <>
            <FloatingGroup>
              <input name="name" required />
              <label>Full Name</label>
            </FloatingGroup>
            <FloatingGroup>
              <input name="email" type="email" required />
              <label>Email</label>
            </FloatingGroup>
            <FloatingGroup>
              <div className="date-input-wrapper">
                <input name="checkin" type="date" required id="checkin" />
                <FaCalendarAlt
                  className="calendar-icon"
                  onClick={() =>
                    (document.getElementById("checkin") as HTMLInputElement)?.showPicker?.()
                  }
                />
              </div>
              <label>Check-in Date</label>
            </FloatingGroup>
            <FloatingGroup>
              <div className="date-input-wrapper">
                <input name="checkout" type="date" required id="checkout" />
                <FaCalendarAlt
                  className="calendar-icon"
                  onClick={() =>
                    (document.getElementById("checkout") as HTMLInputElement)?.showPicker?.()
                  }
                />
              </div>
              <label>Check-out Date</label>
            </FloatingGroup>
            <FloatingGroup>
              <select name="room">
                <option>Deluxe Suite</option>
                <option>Family Suite</option>
              </select>
              <label>Room Type</label>
            </FloatingGroup>
            <FloatingGroup>
              <input name="adults" type="number" min="1" required />
              <label>Adults</label>
            </FloatingGroup>
            <FloatingGroup>
              <input name="children" type="number" min="0" />
              <label>Children</label>
            </FloatingGroup>
            {/* <FloatingGroup>
              <input name="rooms" type="number" min="1" required />
              <label>Number of Rooms</label>
            </FloatingGroup> */}
          </>
        );
      case 1:
        return (
          <>
            <FloatingGroup>
              <input name="name" required />
              <label>Full Name</label>
            </FloatingGroup>
            <FloatingGroup>
              <input name="email" type="email" required />
              <label>Email</label>
            </FloatingGroup>
            <FloatingGroup>
              <div className="date-input-wrapper">
                <input name="eventDate" type="date" required id="cutleryDate" />
                <FaCalendarAlt
                  className="calendar-icon"
                  onClick={() =>
                    (document.getElementById("cutleryDate") as HTMLInputElement)?.showPicker?.()
                  }
                />
              </div>
              <label>Event Date</label>
            </FloatingGroup>
            <FloatingGroup>
              <select name="cutlery">
                <option>Podcast Space</option>
                <option>Dj Shooting Space</option>
                <option>Wedding Shoot Space</option>
              </select>
              <label>Activity</label>
            </FloatingGroup>
            <FloatingGroup>
              <input name="guests" type="number" min="1" required />
              <label>Approximate Guests</label>
            </FloatingGroup>
          </>
        );
      case 2:
        return (
          <>
            <FloatingGroup>
              <input name="name" required />
              <label>Full Name</label>
            </FloatingGroup>
            <FloatingGroup>
              <input name="email" type="email" required />
              <label>Email</label>
            </FloatingGroup>
            <FloatingGroup>
              <div className="date-input-wrapper">
                <input name="eventDate" type="date" required id="eventPlanDate" />
                <FaCalendarAlt
                  className="calendar-icon"
                  onClick={() =>
                    (document.getElementById("eventPlanDate") as HTMLInputElement)?.showPicker?.()
                  }
                />
              </div>
              <label>Event Date</label>
            </FloatingGroup>
            <FloatingGroup>
              <select name="eventType">
                <option>Birthday Hosting</option>
                <option>Baby Shower</option>
                <option>Bridal Shower</option>
              </select>
              <label>Event Type</label>
            </FloatingGroup>
            <FloatingGroup>
              <input name="guests" type="number" min="1" required />
              <label>Approximate Guests</label>
            </FloatingGroup>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Section id="booking">
      <Container>
        <Left
          as={motion.div}
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Title>Book a Service</Title>
          <Tabs>
            {tabs.map((tab, idx) => (
              <Tab
                key={idx}
                onClick={() => setActiveTab(idx)}
                $active={activeTab === idx}
              >
                {tab}
              </Tab>
            ))}
          </Tabs>

          <Form
            as={motion.form}
            action="https://api.web3forms.com/submit"
            method="POST"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
          >
            <input
              type="hidden"
              name="access_key"
              value="YOUR_WEB3FORMS_ACCESS_KEY"
            />
            <AnimatePresence mode="wait">
              <FieldsWrapper
                as={motion.div}
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                {renderFields()}
              </FieldsWrapper>
            </AnimatePresence>
            <Submit type="submit">Book Now</Submit>
          </Form>
        </Left>

        <Right
          as={motion.div}
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
            alt="Booking visual"
          />
        </Right>
      </Container>
    </Section>
  );
};

export default BookingSection;

// --- STYLED COMPONENTS ---

const Section = styled.section`
  padding: 6rem 2rem;
  background: ${colors.background};
`;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 3rem;
  align-items: flex-start;
  justify-content: center;
`;

const Left = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 600px;
`;

const Right = styled.div`
  flex: 1;
  min-width: 320px;
  max-width: 600px;
`;

const Title = styled.h2`
  font-size: 2rem;
  color: ${colors.primary};
  margin-bottom: 1.5rem;
`;

const Tabs = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 2rem;
  flex-wrap: wrap;
`;

const Tab = styled.button<{ $active: boolean }>`
  padding: 0.6rem 1.3rem;
  background: ${({ $active }) => ($active ? colors.primary : "#ddd")};
  color: ${({ $active }) => ($active ? colors.white : colors.text)};
  border: none;
  border-radius: 20px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.3s ease;

  &:hover {
    background: ${colors.primary};
    color: ${colors.white};
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FieldsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.2rem;
`;

const FloatingGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;

  input,
  select {
    padding: 0.85rem 1rem;
    border: 1px solid #ccc;
    border-radius: 10px;
    font-size: 1rem;
    background: #fefefe;
    color: ${colors.text};
    transition: border-color 0.3s;

    &:focus {
      outline: none;
      border-color: ${colors.primary};
    }
  }

  label {
    font-size: 0.9rem;
    color: ${colors.subText};
    margin-top: 0.4rem;
  }

  .date-input-wrapper {
    position: relative;
    display: flex;
    align-items: center;

    input[type="date"] {
      width: 100%;
      padding-right: 2.5rem;
    }

    .calendar-icon {
      position: absolute;
      right: 1rem;
      color: ${colors.primary};
      cursor: pointer;
      z-index: 2;
    }
  }
`;

const Submit = styled.button`
  padding: 1rem;
  background: ${colors.primary};
  color: ${colors.white};
  border: none;
  border-radius: 10px;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  margin-top: 1rem;
  transition: background 0.3s ease;

  &:hover {
    background: #e0e0e0;
    color: ${colors.primary};
  }
`;

const Image = styled.img`
  width: 100%;
  border-radius: 1rem;
  object-fit: cover;
  height: 100%;
  margin-top: 10rem;
`;
