import styled from "styled-components";
import { Button } from "../atoms";
import { MdLocalPhone } from "react-icons/md";
import { contactCompPropsType } from "../../types/vartypes";

function ContactComponent({
  name,
  description,
  btnAction,
}: contactCompPropsType) {
  return (
    <Container>
      <div className="head">
        <span className="head-icon">
          <MdLocalPhone
            fill="rgba(67, 31, 23, 1)"
            style={{ width: "48px", height: "48px" }}
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
              fill="#ead7d3"
              style={{ width: "24px", height: "24px" }}
            />
          }
          status="fill"
          btnAction={btnAction}
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
  width: 35%;
  .head {
    display: flex;
    align-items: center;
    gap: 32px;
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
