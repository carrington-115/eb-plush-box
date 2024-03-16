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
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 30%;
  position: relative;
  color: rgba(67, 31, 23, 1);
  margin: 2cm 1cm;
  .testimonial-image {
    position: absolute;
    top: -40px;
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
    padding: 70px 20px 20px 20px;
    border-radius: 40px;
    background: #faf4ed;
    &:hover {
      background: #ead7d3;
    }
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
      text-align: center;
    }
  }
`;
