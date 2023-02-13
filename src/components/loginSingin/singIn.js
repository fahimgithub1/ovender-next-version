import React from "react";

export default function SingIn(props) {
  return (
    <div className="col-11 Login SingDiv text-center" id="SingDiv">
      <h4>Register</h4>

      <form className="LginForm SingInForm">
        <div>
          <label htmlFor="name">Full Name </label>
          <input type="text" placeholder="Enter Name" />
        </div>

        <div>
          <label htmlFor="email">Email </label>
          <input type="text" placeholder="Enter Email" />
        </div>

        <div>
          <label htmlFor="mobile">Mobile No</label>
          <input type="text" placeholder="Enter User Mobile No" />
        </div>

        <div>
          <label htmlFor="Password">Password</label>
          <input type="text" placeholder="Enter User Password" />
        </div>

        <div>
          <label htmlFor="Password">Conferm Password </label>
          <input type="text" placeholder="Enter Conferm Password" />
        </div>

        <button className="FaBtn">Submit</button>
      </form>

      <div className="registerDiv">
        <button
          className="FaBtn RegistBtn LoginBtn"
          onClick={props.onloginHandle}
        >
          Go Back To Login
        </button>
      </div>
    </div>
  );
}
