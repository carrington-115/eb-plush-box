import styled from "styled-components";
import { productImage } from "../../assets";
import { Button } from "../atoms";
import { IoAlertSharp } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { stepsSectionType } from "../../types/vartypes";

function StepSection({ title, steps }: stepsSectionType) {
  return (
    <Container>
      <div className="inner-section">
        <div
          className="steps"
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "30px",
          }}
        >
          <StepsHeading title={title} />
          <section
            className="steps-section"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "20px",
            }}
          >
            {steps.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  gap: "20px",
                }}
              >
                <span
                  style={{
                    padding: "2px 5px",
                    fontSize: "16px",
                    backgroundColor: "rgba(67, 31, 23, 1)",
                    color: "white",
                    borderRadius: "20px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  {index + 1}
                </span>
                <p className="step-text" style={{ fontSize: "20px" }}>
                  {item}
                </p>
              </div>
            ))}
          </section>
          <Button
            text={true}
            icon={true}
            iconLink={
              <IoIosArrowForward
                fill="rgba(255, 255, 255, 1)"
                style={{ width: "24px", height: "24px" }}
              />
            }
            name="Get Started"
            status="fill"
            color="rgba(255, 255, 255, 1)"
            bgColor="rgba(67, 31, 23, 1)"
            btnAction={() => console.log("get started here")}
          />
        </div>
        <div className="step-image">
          <img src={productImage} alt="image of products" />
        </div>
      </div>
    </Container>
  );
}

function StepsHeading({ title }: { title: string }) {
  return (
    <StepsHeadingContainer
      style={{ display: "flex", alignItems: "center", gap: "30px" }}
    >
      <span
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-start",
          padding: "3px",
          backgroundColor: "rgba(67, 31, 23, 1)",
          borderRadius: "50%",
        }}
      >
        <IoAlertSharp
          style={{ width: "24px", height: "24px", color: "white" }}
          fill="white"
        />
      </span>
      <p className="heading-text">{title}</p>
    </StepsHeadingContainer>
  );
}
export default StepSection;

const StepsHeadingContainer = styled.section`
  font-size: 30px;
  @media (min-width: 320px) and (max-width: 599px) {
    .heading-text {
      font-size: 16px;
    }
  }
`;

const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 100px 50px 0px 0px;
  background-color: #cfb7b2;
  @media (min-width: 320px) and (max-width: 599px) {
    padding: 100px 0px 0px 0px;
    flex-direction: column;
  }
  .inner-section {
    display: flex;
    width: 80%;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 599px) {
      flex-direction: column;
      width: 90%;
    }
    align-items: flex-end;
    .steps {
      display: flex;
      flex-direction: column;
      padding-bottom: 50px;
      width: 50%;
      @media (min-width: 320px) and (max-width: 599px) {
        margin-bottom: 50px;
        display: flex;
        gap: 15px;
        width: 100%;
        .heading-text {
          font-size: 24px;
        }
        .step-text {
          font-size: 14px;
        }
      }
      .steps-section {
        @media (min-width: 320px) and (max-width: 599px) {
          gap: 15px;
        }
      }
    }
    .step-image {
      width: 45%;
      height: fit-content;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 100%;
      }
      img {
        width: 100%;
        height: 100%;
        @media (min-width: 320px) and (max-width: 599px) {
          width: 90%;
          height: 90%;
        }
      }
    }
  }
`;
