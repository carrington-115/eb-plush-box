/*
    - forms types
    1. sign in form
    2. sign up form
    3. newsletter form
    4. contact form
    5. rate forms
    6. checkout form
*/

function Forms({ status }: { status: string; formSubmitAction: () => void }) {
  if (status === "login") {
    return <div></div>;
  } else if (status === "signup") {
    return <div></div>;
  } else if (status === "newsletter") {
    return <div></div>;
  } else if (status === "contact") {
    return <div></div>;
  } else if (status === "rate") {
    return <div></div>;
  } else if (status === "checkout") {
    return <div></div>;
  }

  return <div>Forms</div>;
}
export default Forms;
