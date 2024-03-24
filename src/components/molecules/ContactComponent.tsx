import styled from "styled-components";
import { Button } from "../atoms";
import { MdLocalPhone } from "react-icons/md";
import { contactCompPropsType } from "../../types/vartypes";
import { useNavigate } from "react-router-dom";

function ContactComponent({
  name,
  description,
  btnAction,
}: contactCompPropsType) {
  const navigate = useNavigate();

  function handleInput() {
    navigate("/");
  }

  return (
    <Container>
      <div className="head">
        <span className="head-icon">
          <MdLocalPhone
            style={{ width: "30px", height: "30px" }}
            fill="rgba(67, 31, 23, 1)"
          />
        </span>
        <h1 className="head-title">{name}</h1>
      </div>
      <p className="contact-description">{description}</p>
      <div className="contact-btn">
        <Button
          text={true}
          icon={true}
          name="Contact us"
          iconLink={
            <MdLocalPhone
              style={{ width: "24px", height: "24px" }}
              fill="#ead7d3"
            />
          }
          status="fill"
          btnAction={btnAction || handleInput}
          color="#ead7d3"
          bgColor="rgba(67, 31, 23, 1)"
        />
      </div>
    </Container>
  );
}
export default ContactComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 30px 40px;
  gap: 24px;
  border-radius: 20px;
  background: #ead7d3;
  color: rgba(67, 31, 23, 1);
  width: 100%;
  @media (min-width: 320px) and (max-width: 599px) {
    width: 90%;
    padding: 30px 24px;
  }
  .head {
    display: flex;
    align-items: center;
    gap: 32px;
    @media (min-width: 320px) and (max-width: 599px) {
      gap: 20px;
    }
    .head-icon {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .head-title {
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: 40px;
      @media (min-width: 320px) and (max-width: 599px) {
        font-size: 24px;
      }
    }
  }
  .contact-description {
    font-size: 22px;
    font-style: normal;
    font-weight: 500;
    line-height: 28px;
  }
  .contact-btn {
    transform: scale(1.3);
    margin-left: 20px;
  }
`;
