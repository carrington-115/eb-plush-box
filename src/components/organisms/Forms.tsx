import { Button, ThirdPartySignIn, UserInput } from "../atoms";
import { FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import "../../app/design/formStyle.css";
import { formPropsType } from "../../types/vartypes";

/*
    ** This is the types of form required **
   1. Login
   2. Sign up
   3. newsletter
   4. rate
   5. contact
   6. checkout
*/

function Forms({ type, submitAction }: formPropsType) {
  if (type === "login") {
    return (
      <div className="login-form">
        <form onSubmit={(e) => e.preventDefault}>
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
        <form onSubmit={(e) => e.preventDefault}>
          <h3 className="heading">Login to your Account</h3>
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
  }
  return <div>Forms</div>;
}
export default Forms;
