import styled from "styled-components";
import { accordionPropsType, accordionType } from "../../types/vartypes";
import { AccordionElement } from "../molecules";

function Accordion({ faqsContent }: accordionPropsType) {
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
  display: flex;
  flex-direction: column;
  align-items: column;
  gap: 20px;
  h1 {
    color: #000;
    font-size: 32px;
    font-style: normal;
    font-weight: 700;
    line-height: 40px;
  }
`;
