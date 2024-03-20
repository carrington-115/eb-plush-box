import styled from "styled-components";
import { Forms } from ".";

function Newsletter() {
  return (
    <Container>
      <div className="inner-section">
        <div className="form">
          <Forms
            type="subscribe"
            submitAction={() => console.log("this is the newsletter form")}
          />
        </div>

        <div className="content">
          <h1>Subscribe to Our Newsletter</h1>
          <p>
            Welcome to our community of joy and celebration! We invite you to
            join our monthly and weekly newsletters, where we share the magic of
            thoughtful gifting, exclusive promotions, and heartwarming stories.
            By becoming a part of our newsletter family, you'll be the first to
            discover curated collections, personalized surprises, and exciting
            updates.
          </p>
        </div>
      </div>
    </Container>
  );
}
export default Newsletter;

const Container = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cfb7b2;
  padding: 2cm 0;
  .inner-section {
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .form {
      width: 50%;
    }
    .content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
      width: 40%;
      h1 {
        color: #431f17;
        font-size: 57px;
        font-style: normal;
        font-weight: 700;
        line-height: 64px;
      }
      p {
        color: #431f17;
        text-align: justify;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 24px;
      }
    }
  }
`;
