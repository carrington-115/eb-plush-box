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
        <span>
          <MdLocalPhone
            fill="rgba(67, 31, 23, 1)"
            style={{ width: "24px", height: "24px" }}
          />
        </span>
        <h1>{name}</h1>
      </div>
      <p>{description}</p>
      <div className="contact-btn">
        <Button
          text={true}
          icon={true}
          name="Contact us"
          iconLink={
            <MdLocalPhone
              fill="rgba(67, 31, 23, 1)"
              style={{ width: "24px", height: "24px" }}
            />
          }
          status="fill"
          btnAction={btnAction}
          color=""
          bgColor=""
        />
      </div>
    </Container>
  );
}
export default ContactComponent;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 40px;
  gap: 24px;
  border-radius: 20px;
  background: #ead7d3;
  color: rgba(67, 31, 23, 1);
`;
