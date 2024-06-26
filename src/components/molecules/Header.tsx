import styled from "styled-components";
import { logo } from "../../assets";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { Button, HeaderLink } from "../atoms";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
// import { IoMdCart } from "react-icons/io";
import MobileHeader from "./MobileHeader";
import { RiMenu2Line } from "react-icons/ri";
import { mobileHeadType } from "../../types/vartypes";

function Header() {
  // const [signedIn, setSignedIn] = useState<boolean>(false);
  // const [orderNumber, setOrderNumber] = useState<number>(12);
  // const [userNameInitial, setUserNameInitial] = useState<string>("");
  const [hamMenuActive, setHamMenuActive] = useState<boolean>(false);
  const [displayHeader, setDisplayHeader] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation().pathname;
  useEffect(() => {
    if (location === "/login" || location === "/signup") {
      setDisplayHeader(false);
    } else {
      setDisplayHeader(true);
    }
  }, [location]);
  return (
    <Container style={{ display: displayHeader ? "flex" : "none" }}>
      <NavLink className="logo-container" to="/">
        <img src={logo} alt="The header logo" />
      </NavLink>
      <nav>
        <HeaderLink url="/" name="Home" />
        <HeaderLink
          url="/shopping"
          name="Shopping"
          icon={true}
          iconLink={
            <IoIosArrowForward style={{ width: "24px", height: "24px" }} />
          }
        />
        <HeaderLink url="/about" name="About us" />
        <HeaderLink url="/contact" name="Contact us" />
      </nav>
      <div className="account-btns">
        <Button
          text={true}
          name="Start Shopping"
          icon={false}
          status="fill"
          bgColor="rgba(67, 31, 23, 1)"
          color="rgba(255, 255, 255, 1)"
          btnAction={() => navigate("/shopping")}
        />
        <Button
          text={true}
          name="Login"
          icon={false}
          status="fill"
          bgColor="rgba(234, 215, 211, 1)"
          color="rgba(67, 31, 23, 1)"
          btnAction={() => navigate("/login")}
        />
      </div>

      <div className="mobile-header">
        <MobileHeader
          closeActivity={() => setHamMenuActive(false)}
          status={hamMenuActive}
        />
        <MobileHead menuActivity={() => setHamMenuActive(true)} />
      </div>
    </Container>
  );
}
export default Header;

function MobileHead({ menuActivity }: mobileHeadType) {
  const navigate = useNavigate();

  return (
    <MobileHeaderContainer>
      <span className="menu-icon" onClick={menuActivity}>
        <RiMenu2Line
          style={{ width: "30px", height: "30px", fill: "rgba(67, 31, 23, 1)" }}
        />
      </span>
      <div className="logo">
        <img src={logo} alt="Plush box website" />
      </div>
      <div className="second-part">
        <Button
          text={true}
          name="Login"
          icon={false}
          status="fill"
          bgColor="rgba(67, 31, 23, 1)"
          color="white"
          btnAction={() => navigate("/login")}
        />
      </div>
    </MobileHeaderContainer>
  );
}

const MobileHeaderContainer = styled.header`
  @media (min-width: 600px) {
    display: none;
  }
  .menu-icon {
    padding: 2px;
    width: 10%;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    &:hover {
      background-color: rgba(251, 247, 246, 1);
    }
  }
  .logo {
    width: 40%;
    img {
      width: 100%;
      height: auto;
    }
  }
  width: 90vw;
  max-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: space-between;
  .second-part {
    width: fit-content;
    justify-self: flex-end;
    margin-left: 15%;
  }
`;

const Container = styled.header`
  width: 100vw;
  max-width: 100vw;
  background-color: white;
  display: flex;
  justify-content: space-around;
  padding: 10px 0;
  .logo-container {
    width: 200px;
    height: auto;
    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  nav {
    display: flex;
    gap: 12px;
    align-items: center;
    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
  }
  .account-btns,
  .user-btns {
    display: flex;
    align-items: center;
    gap: 30px;
    @media (min-width: 320px) and (max-width: 599px) {
      display: none;
    }
  }

  .user-btns {
    .cart-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      border-radius: 50%;
      background-color: rgba(251, 247, 246, 1);
      border: none;
      @media (min-width: 320px) and (max-width: 599px) {
        display: none;
      }
      &:hover {
        background-color: rgba(234, 215, 211, 1);
      }
      cursor: pointer;
      .cart-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 12px;
      }
      .order-number {
        position: absolute;
        top: -10px;
        right: 0;
        background-color: rgba(67, 31, 23, 1);
        color: rgba(234, 215, 211, 1);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px;
        border-radius: 20px;
        h1 {
          font-size: 12px;
          font-family: "El Messiri";
        }
      }
    }

    .account-btn {
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      padding: 10px 12px;
      border-radius: 50%;
      background-color: rgba(67, 31, 23, 1);
      color: rgba(234, 215, 211, 1);
      cursor: pointer;
      span {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 3px 2px;
        h1 {
          font-size: 16px;
        }
      }
    }
  }
`;
