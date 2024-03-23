import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { MdClose } from "react-icons/md";
import { Button } from "../atoms";
import { pageLinkTypes } from "../../types/vartypes";
import { pageLinks } from "../data";
import { hamMenuType } from "../../types/vartypes";

function MobileHeader({ status, closeActivity }: hamMenuType) {
  return (
    <Container
      style={{
        transform: status ? "translateX(0%)" : "translateX(-100%)",
        transition: "all 0.5s 250ms ease-in-out",
      }}
    >
      <section className="top-mobile-header">
        <span onClick={closeActivity} className="close-btn">
          <MdClose
            style={{
              width: "62px",
              height: "62px",
              fill: "rgba(67, 31, 23, 1)",
              cursor: "pointer",
            }}
          />
        </span>
        <Button
          text={true}
          icon={false}
          status="fill"
          name="Start Shopping"
          color="rgba(251, 247, 246, 1)"
          bgColor="rgba(67, 31, 23, 1)"
          btnAction={() => console.log("Start shopping")}
        />
      </section>
      <nav className="mobile-navigation">
        {pageLinks.map(({ name, to }: pageLinkTypes) => (
          <NavLink onClick={closeActivity} className="mobile-link" to={to}>
            {name}
          </NavLink>
        ))}
      </nav>
      <section className="ham-menu-btns">
        <Button
          text={true}
          icon={false}
          status="fill"
          name="Sign in"
          color="rgba(251, 247, 246, 1)"
          bgColor="rgba(67, 31, 23, 1)"
          btnAction={() => console.log("Start shopping")}
        />
        <Button
          text={true}
          icon={false}
          status="fill"
          name="Create an Account"
          color="rgba(251, 247, 246, 1)"
          bgColor="rgba(67, 31, 23, 1)"
          btnAction={() => console.log("Start shopping")}
        />
      </section>
    </Container>
  );
}
export default MobileHeader;

const Container = styled.header`
  @media (min-width: 600px) {
    display: none;
  }
  max-width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 5;
  gap: 30px;
  padding: 17px 24px;
  background-color: white;
  .mobile-navigation {
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    align-self: flex-start;
    .mobile-link {
      text-decoration: none;
      font-size: 20px;
      color: rgba(67, 31, 23, 1);
      padding: 2px 20px;
      border-radius: 2px;
      background-color: transparent;
      &:hover {
        background-color: #f7efed;
      }
    }
  }
  .top-mobile-header {
    width: 98%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-self: center;
    .close-btn {
      padding: 2px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 5px;
      background-color: transparent;
      &:hover {
        background-color: #f7efed;
      }
    }
  }
  .ham-menu-btns {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 16px;
  }
`;
