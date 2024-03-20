import { ReactNode } from "react";
import styled from "styled-components";

function FormStyle({ children }: { children: ReactNode }) {
  return <FormContainer>{children}</FormContainer>;
}
export default FormStyle;
const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  form {
    display: flex;
    width: 100%;
    flex-direction: column;
    gap: 20px;
    color: white;
    background-color: rgba(67, 31, 23, 1);
  }

  .third-party-btns {
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 10px;
  }
`;
