import { Button, ThirdPartySignIn, UserInput } from "../atoms";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "../../app/design/formStyle.css";
import { formPropsType } from "../../types/vartypes";
import { useState } from "react";
import { IoMdStarOutline } from "react-icons/io";
import { IoMdStar } from "react-icons/io";

/*
    ** This is the types of form required **
   1. Login
   2. Sign up
   3. newsletter
   4. rate
   5. contact
   6. checkout
*/

interface rateInputType {
  value: number;
  state: boolean;
}

function Forms({ type, submitAction }: formPropsType) {
  const [rateInputState, setRateInputState] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);
  const rateInputs: rateInputType[] = [
    { value: 1, state: rateInputState[0] },
    { value: 2, state: rateInputState[1] },
    { value: 3, state: rateInputState[2] },
    { value: 4, state: rateInputState[3] },
    { value: 5, state: rateInputState[4] },
  ];

  function handleRating(position: number) {
    for (let i = 0; i < position; i++) {
      setRateInputState((prev) => {
        const newArray = [...prev];
        newArray[i] = true;
        return newArray;
      });
    }
  }

  if (type === "login") {
    return (
      <div className="login-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3 className="heading">Login to your Account</h3>
          <UserInput
            type="simple"
            inputType="email"
            inputName="email"
            placeholder="Email"
          />
          <UserInput
            type="simple"
            inputType="password"
            inputName="password"
            placeholder="Password"
          />
          <Button
            text={true}
            icon={false}
            name="Login"
            status="fill"
            color="rgba(67, 31, 23, 1)"
            bgColor="rgba(251, 247, 246, 1)"
            btnAction={submitAction}
          />
        </form>

        <section className="third-party-btns">
          <ThirdPartySignIn
            btnAction={() => console.log("sign in with 3rd party")}
            icon={<FaGoogle />}
            name="Sign in with Google"
          />
          <ThirdPartySignIn
            btnAction={() => console.log("sign in with 3rd party")}
            icon={<FaFacebook />}
            name="Sign in with Facebook"
          />
          <ThirdPartySignIn
            btnAction={() => console.log("sign in with 3rd party")}
            icon={<FaApple />}
            name="Sign in with Apple"
          />
        </section>
      </div>
    );
  } else if (type === "signUp") {
    return (
      <div className="login-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <h3 className="heading">Create your Account</h3>
          <UserInput
            type="simple"
            inputType="text"
            inputName="name"
            placeholder="Name"
          />
          <UserInput
            type="simple"
            inputType="email"
            inputName="email"
            placeholder="Email"
          />
          <UserInput
            type="simple"
            inputType="password"
            inputName="password"
            placeholder="Password"
          />
          <UserInput
            type="simple"
            inputType="password"
            inputName="password"
            placeholder="Retype password"
          />
          <Button
            text={true}
            icon={false}
            name="Login"
            status="fill"
            color="rgba(67, 31, 23, 1)"
            bgColor="rgba(251, 247, 246, 1)"
            btnAction={submitAction}
          />
        </form>

        <section className="third-party-btns">
          <ThirdPartySignIn
            btnAction={() => console.log("sign in with 3rd party")}
            icon={<FaGoogle />}
            name="Sign up with Google"
          />
          <ThirdPartySignIn
            btnAction={() => console.log("sign in with 3rd party")}
            icon={<FaFacebook />}
            name="Sign up with Facebook"
          />
          <ThirdPartySignIn
            btnAction={() => console.log("sign in with 3rd party")}
            icon={<FaApple />}
            name="Sign up with Apple"
          />
        </section>
      </div>
    );
  } else if (type === "subscribe") {
    return (
      <form onSubmit={(e) => e.preventDefault()} className="subscribe-form">
        <h2 className="heading">Subscribe to Our newsletter</h2>
        <UserInput
          type="simple"
          inputType="text"
          inputName="name"
          placeholder="Name"
        />
        <UserInput
          type="simple"
          inputType="email"
          inputName="email"
          placeholder="Email"
        />
        <Button
          text={true}
          icon={false}
          name="Subscribe"
          status="fill"
          bgColor="rgba(67, 31, 23, 1)"
          color="rgba(251, 247, 246, 1)"
          btnAction={submitAction}
        />
      </form>
    );
  } else if (type === "contact") {
    return (
      <div className="contact-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <UserInput
            type="simple"
            inputType="text"
            inputName="name"
            placeholder="Name"
          />
          <UserInput
            type="simple"
            inputType="email"
            inputName="email"
            placeholder="Email"
          />
          <UserInput
            type="multiline"
            inputName="message"
            placeholder="Message"
          />
          <Button
            text={true}
            icon={false}
            name="Submit"
            status="fill"
            color="rgba(67, 31, 23, 1)"
            bgColor="rgba(251, 247, 246, 1)"
            btnAction={submitAction}
          />
        </form>
      </div>
    );
  } else if (type === "review") {
    return (
      <div className="review-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <h2 className="heading">Rate us</h2>
          <div className="rate-btns">
            {rateInputs.map((rate) => (
              <div onClick={() => handleRating(rate.value)} key={rate.value}>
                <span className="rate-icon">
                  {rate.state ? <IoMdStar /> : <IoMdStarOutline />}
                </span>
              </div>
            ))}
          </div>
          <UserInput
            type="multiline"
            inputName="message"
            placeholder="Message"
          />
          <Button
            text={true}
            icon={false}
            name="Submit"
            status="fill"
            color="rgba(67, 31, 23, 1)"
            bgColor="rgba(251, 247, 246, 1)"
            btnAction={submitAction}
          />
        </form>
      </div>
    );
  } else if (type === "checkout") {
    return (
      <section className="checkout-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <h1 className="heading">Checkout Form</h1>
          <UserInput
            type="simple"
            inputType="email"
            inputName="email"
            placeholder="Email"
          />
          <div className="bank-info">
            <div className="top">
              <UserInput
                type="simple"
                inputType="number"
                inputName="account"
                placeholder="xxxx xxxx xxxx xxxx"
              />
            </div>
            <div className="bottom">
              <div className="date-code">
                <input type="text" name="month" placeholder="xx" />
                <span>/</span>
                <input type="text" name="year" placeholder="xx" />
              </div>
              <div className="cvc-code">
                <UserInput
                  type="simple"
                  inputType="number"
                  inputName="cvc_code"
                  placeholder="CVC"
                />
              </div>
            </div>
          </div>
          <UserInput
            type="simple"
            inputType="text"
            inputName="name"
            placeholder="Name"
          />
          <UserInput
            type="dropdown"
            inputName="state_code"
            dropDown={{
              dropDownName: "states",
              dropDownValues: [
                "--Select--",
                "Washington DC",
                "Florida",
                "Arizona",
              ],
            }}
          />
        </form>
      </section>
    );
  }
  return <div>Forms</div>;
}
export default Forms;
