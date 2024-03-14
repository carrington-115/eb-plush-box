import styled from "styled-components";
import { productImage } from "../../assets";
import { Button } from "../atoms";
import { IoIosArrowForward } from "react-icons/io";

function TopHeader() {
  return (
    <Container>
      <section className="inner-section">
        <section className="left-section">
          <h3>Unwrap Happiness</h3>
          <h3>with our</h3>
          <h1>Thoughtful Gifts</h1>
          <div className="btn">
            <Button
              text={true}
              icon={true}
              iconLink={
                <IoIosArrowForward
                  style={{ width: "24px", height: "24px" }}
                  fill="white"
                />
              }
              bgColor="rgba(101, 57, 48, 1)"
              color="white"
              status="fill"
              btnAction={() => console.log("start shopping now")}
              name="Start Shopping"
            />
          </div>
        </section>
        <section className="right-section">
          <img src={productImage} alt="top header image of products" />
        </section>
      </section>
    </Container>
  );
}
export default TopHeader;

const Container = styled.section`
  width: 100%;
  background-color: rgba(207, 183, 178, 1);
  display: flex;
  justify-content: center;
  padding: 50px 0px 0px 0px;
  margin-bottom: 50px;
  @media (min-width: 320px) and (max-width: 599px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
  .inner-section {
    width: 80%;
    display: flex;
    justify-content: space-between;
    @media (min-width: 320px) and (max-width: 599px) {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 90%;
    }
    .left-section {
      align-self: center;
      width: 40%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      color: rgba(101, 57, 48, 1);
      gap: 10px;
      margin-bottom: 100px;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 90%;
      }
      h3 {
        font-size: 48px;
        font-style: normal;
        font-weight: 500;
        line-height: 56.179px;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 36px;
          font-style: normal;
          font-weight: 800;
          line-height: 40px;
        }
      }
      h1 {
        font-size: 79.704px;
        font-style: normal;
        font-weight: 800;
        line-height: 80px;
        @media (min-width: 320px) and (max-width: 599px) {
          font-size: 64px;
          font-style: normal;
          font-weight: 800;
        }
      }
      .btn {
        transform: scale(1.3, 1.3);
        @media (min-width: 320px) and (max-width: 599px) {
          margin-left: 8%;
        }
      }
    }
    .right-section {
      align-self: flex-end;
      width: 40%;
      height: auto;
      @media (min-width: 320px) and (max-width: 599px) {
        width: 100%;
        align-self: center;
        img {
          width: 100%;
          height: 100%;
        }
      }
      img {
        width: 100%;
        height: 100%;
      }
    }
  }
`;
