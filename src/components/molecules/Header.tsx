import styled from "styled-components";
import { logo } from "../../assets";
import { NavLink } from "react-router-dom";
import { Button, HeaderLink } from "../atoms";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";
import { IoMdCart } from "react-icons/io";
import MobileHeader from "./MobileHeader";

function Header() {
  const [signedIn, setSignedIn] = useState<boolean>(false);
  const [orderNumber, setOrderNumber] = useState<number>(12);
  const [userNameInitial, setUserNameInitial] = useState<string>("");

  useEffect(() => {
    if (signedIn) {
      setUserNameInitial("M");
    }
  }, [signedIn]);
  return (
    <Container>
      <NavLink className="logo-container" to="/home">
        <img src={logo} alt="The header logo" />
      </NavLink>
      <nav>
        <HeaderLink url="/home" name="Home" />
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
      {!signedIn ? (
        <div className="account-btns">
          <Button
            text={true}
            name="Start Shopping"
            icon={false}
            status="fill"
            bgColor="rgba(67, 31, 23, 1)"
            color="rgba(255, 255, 255, 1)"
            btnAction={() => console.log("hello world")}
          />
          <Button
            text={true}
            name="Login"
            icon={false}
            status="fill"
            bgColor="rgba(234, 215, 211, 1)"
            color="rgba(67, 31, 23, 1)"
            btnAction={() => setSignedIn(true)}
          />
        </div>
      ) : (
        <div className="user-btns">
          <div
            className="cart-btn"
            onClick={() => setOrderNumber(orderNumber + 1)}
          >
            <span className="cart-icon">
              <IoMdCart style={{ width: "24px", height: "24px" }} />
            </span>
            <span className="order-number">{orderNumber}</span>
          </div>
          <button className="account-btn" type="button">
            <span>
              <h1>{userNameInitial}</h1>
            </span>
          </button>
        </div>
      )}
      <div className="mobile-header">
        <MobileHeader status={true} />
      </div>
    </Container>
  );
}
export default Header;

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
