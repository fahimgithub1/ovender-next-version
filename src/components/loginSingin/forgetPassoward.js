import React from "react";

export default function ForgetPassoward(props) {
  return (
    <div className="col-11 Login ForgotPassowrdDiv text-center">
      <h4>Forgot Password</h4>

      <form className="LginForm SingInForm">
        <div>
          <label for="email">Email </label>
          <input type="text" placeholder="Enter Email" />
        </div>

        <button className="FaBtn">Forgot Password</button>
      </form>

      <div className="registerDiv">
        <button
          className="FaBtn RegistBtn LoginBtn ForGotBtn"
          onClick={props.onloginHandle}
        >
          Go Back To Logdin
        </button>
      </div>
    </div>
  );
}
