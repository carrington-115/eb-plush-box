import styled from "styled-components";
import { Button } from "../atoms";
import { MdLocalPhone } from "react-icons/md";
import { contactCompPropType } from "../../types/vartypes";

function ContactComponent({
  name,
  description,
  btnAction,
}: contactCompPropsType) {
  return (
    <Container>
      <div className="head">
        <span>
          <MdLocalPhone />
        </span>
        <h1>{name}</h1>
      </div>
      <p>{description}</p>
      <div className="contact-btn">
        <Button
          text={true}
          icon={true}
          name="Contact us"
          iconLink={<MdLocalPhone />}
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

const Container = styled.div``;
