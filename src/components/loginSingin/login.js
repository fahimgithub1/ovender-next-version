import Link from "next/link";

export default function Login(props) {
  return (
    <div className="col-11 Login LoginDiv text-center" id="LoginDiv">
      <h4>Login</h4>

      <form className="LginForm">
        <label htmlFor="username">User Name Or Email</label>
        <input type="text" placeholder="Enter User Name Or Email" />

        <label htmlFor="username">Password</label>
        <input type="text" placeholder="Enter User Password" />

        <button className="FaBtn">
          <Link href="/userProfile">Login</Link>
        </button>

        <label
          className="FprgtPasswordDiva mt-2 ForgotShowcli"
          onClick={props.onForgotHandle}
        >
          Forgot Password?
        </label>
      </form>

      <div className="LoginOr">
        <span>or Login With</span>

        <br />
        <button className="FaBtn">
          <i className="fa-brands fa-facebook"></i>
        </button>
        <button className="FaBtn">
          <i className="fa-brands fa-google"></i>
        </button>
        <button className="FaBtn">
          <i className="fa-brands fa-linkedin-in"></i>
        </button>
      </div>

      <div className="registerDiv">
        <button
          className="FaBtn RegistBtn"
          onClick={props.onRegisterHandle}
        >
          Register Now
        </button>
      </div>
    </div>
  );
}
