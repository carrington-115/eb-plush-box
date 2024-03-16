import styled from "styled-components";

interface testimonyType {
  profileImage: string;
  message: string;
}

function Testimonial({ profileImage, message }: testimonyType) {
  return (
    <Container>
      <div className="testimonial-image">
        <img src={profileImage} alt="Testifier profile image" />
      </div>
      <div className="testimonial-message">
        <p>{message}</p>
      </div>
    </Container>
  );
}

export default Testimonial;

const Container = styled.section`
  .testimonial-image {
    img {
      width: 100%;
      height: 100%;
    }
  }
  .testimonial-message {
  }
`;
