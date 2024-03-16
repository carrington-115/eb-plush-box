import styled from "styled-components";
import { testimonyType } from "../../types/vartypes";

function Testimonial({ profileImage, testifierMessage }: testimonyType) {
  return (
    <Container>
      <div className="testimonial-image">
        <img src={profileImage} alt="Testifier profile image" />
      </div>
      <div className="testimonial-message">
        <h2>{testifierMessage.name}</h2>
        <p>{testifierMessage.message}</p>
      </div>
    </Container>
  );
}

export default Testimonial;

const Container = styled.section`
  position: relative;
  .testimonial-image {
    position: absolute;
    top: 0;
    right: 50%;
    img {
      width: 100%;
      height: 100%;
    }
  }
  .testimonial-message {
    display: flex;
    flex-direction: column;
    gap: 10px;
    align-items: center;
    position: absolute;
    bottom: 0;
    h2 {
      font-size: 22px;
      font-style: normal;
      font-weight: 700;
    }
    p {
      font-size: 16px;
      font-style: normal;
      font-weight: 500;
      line-height: 24px;
    }
  }
`;
