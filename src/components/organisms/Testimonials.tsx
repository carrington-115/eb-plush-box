import styled from "styled-components";
import { personOne, personThree, personTwo } from "../../assets";
import { testimonyType } from "../../types/vartypes";
import { Testimonial } from "../molecules";

const testimonials: testimonyType[] = [
  {
    profileImage: personOne,
    testifierMessage: {
      name: "Fri Doh Melvis",
      message:
        "I am so glad I ordered this packages as my birthday gift. It was everything I wanted and more. Personallized to my taste. I loveeeee the perfume, scented candle and white chocololate ",
    },
  },
  {
    profileImage: personTwo,
    testifierMessage: {
      name: "Veronica H.",
      message:
        "I just received my first box and I am beyond pleased! So cute. I can't wait until next month.",
    },
  },
  {
    profileImage: personThree,
    testifierMessage: {
      name: "Suzi Z.",
      message:
        "I must say, I loved everything about my box! I'm so in love with the pens pens. So happy I got into it!",
    },
  },
];

function Testimonials() {
  return (
    <Container>
      {testimonials.map((testimony, index) => (
        <Testimonial
          key={index}
          profileImage={testimony?.profileImage}
          testifierMessage={testimony?.testifierMessage}
        />
      ))}
    </Container>
  );
}
export default Testimonials;

const Container = styled.section`
  width: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding: 1cm 0;
  @media (min-width: 320px) and (max-width: 599px) {
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    padding: 1cm 0;
  }
`;
