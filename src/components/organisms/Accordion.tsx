import styled from "styled-components";
import { accordionType } from "../../types/vartypes";
import { AccordionElement } from "../molecules";

const faqsContent: accordionType[] = [
  {
    title: "What is EB Plush Box?",
    message:
      "EB Plush Box is a quarterly subscription service designed for professional women seeking to elevate their image, embrace self-care, and experience the essence of Silent Luxury. Each box contains handpicked treasures curated to complement your lifestyle.",
  },
  {
    title: "What can I expect in an EB Plush Box?",
    message:
      "Inside each EB Plush Box, you'll find a curated selection of luxurious items such as innovative beauty products, artisanal self-care products, fine jewelry, gourmet delights, stylish accessories and more….Our goal is to offer sophisticated and indulgent products that align with your professional & personal journey.",
  },
  {
    title: "How does the subscription works?",
    message:
      "Our subscription service operates on a quarterly basis. You can sign up for EB Plush Box and receive a curated box every three months, tailored to provide you with a touch of elegance and moments of self-pampering.",
  },
  {
    title: "Can I personalize my EB Plush Box?",
    message:
      " At the moment, we curate each box with carefully selected items to cater to a diverse range of tastes and preferences. However, we're always seeking ways to enhance our service and appreciate your feedback for future improvements.",
  },
  {
    title: "What makes an EB Plush Box different?",
    message:
      "EB Plush Box is more than just a collection of products; it's an experience crafted for the modern professional woman. Our focus on elegance, self-care, and Silent Luxury sets us apart, delivering an exclusive journey to our subscribers.",
  },
  {
    title: "How do I manage my subscription?",
    message:
      "You can manage your subscription, update your details, or cancel anytime by logging into your account on our website. For any specific queries or assistance, feel free to reach out to our customer support team.",
  },
  {
    title: "Is shipping included in the subscription cost?",
    message:
      "Yes, shipping within our designated areas is included in the subscription cost. We strive to ensure a seamless delivery experience for our subscribers.",
  },
  {
    title: "What if I have allergies or special preferences for products?",
    message:
      "We take allergies and preferences seriously. While we cannot accommodate specific individual requests at the moment, we're working to introduce more customization options in the future to better cater to our subscribers' needs.",
  },
  {
    title: "Can I cancel my EB Plush Box subscription?",
    message:
      "Yes, you can cancel your subscription at any time. Log in to your account on our website and navigate to the subscription settings to manage or cancel your subscription. Please note that cancellations made after the renewal date for the upcoming quarter will apply to the following quarter.",
  },
  {
    title: "Do you offer one-time gift options for EB Plush Box?",
    message:
      "Yes, we do! Treat a friend, family member, or colleague to a one-time EB Plush Box gift. Simply select the 'Gift' option on our website and follow the easy steps to send a luxurious and thoughtful gift without any commitment to a subscription.",
  },
];

function Accordion() {
  return (
    <Container>
      <h1>FAQs</h1>
      {faqsContent.map(({ title, message }: accordionType, index) => (
        <AccordionElement key={index} title={title} message={message} />
      ))}
    </Container>
  );
}
export default Accordion;

const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  margin-bottom: 1cm;
  h1 {
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
    margin-bottom: 10px;
  }
`;
