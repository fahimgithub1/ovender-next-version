import React, { useState } from "react";

export default function AccountInfo() {
  const [showChangeEail, setShowChangeEail] = useState(false);
  const [showChangePass, setShowChangePass] = useState(false);

  const changeEmail = () => {
    if (showChangeEail) {
      setShowChangeEail(false);
    } else {
      setShowChangeEail(true);
    }
  };

  const changePass = () => {
    if (showChangePass) {
      setShowChangePass(false);
    } else {
      setShowChangePass(true);
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="Account-Information"
      role="tabpanel"
      aria-labelledby="nav-Account-Information"
      tabindex="0"
    >
      <h5>EDIT ACCOUNT INFORMATION </h5>

      {/* <!-- Addres Informain From  start --> */}
      <div className="PasswordEdit">
        <form>
          <div>
            <label for="name">Name: </label>
            <input type="text" placeholder="" />
          </div>

          <div>
            <label for="Phone">Phone Number: </label>
            <input type="text" placeholder="" />
          </div>

          {/* <!-- 11st check --> */}
          <div className="CheckBoxDiv" onClick={changeEmail}>
            <input className="CheckBox" type="checkbox" placeholder="" />
            <label for="Phone"> Change Email</label>
          </div>

          {/* <!-- 2nd check --> */}
          <div className="CheckBoxDiv">
            <input
              className="CheckBox"
              type="checkbox"
              placeholder=""
              onClick={changePass}
            />
            <label for="Phone"> Change Password</label>
          </div>

          {/* <!-- change Email --> */}
          {showChangeEail && (
            <div className="EmailChnage" id="EmaoChange">
              <div>
                <label for="email">Old Email: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label for="email">New Email: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label for="varification">Verification code: </label>
                <input type="text" placeholder="" />
              </div>
            </div>
          )}

          {/* <!-- change Email --> */}
          {showChangePass && (
            <div className="EmailChnage" id="PassowardChange">
              <div>
                <label for="email">Old Password: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label for="email">New Password: </label>
                <input type="text" placeholder="" />
              </div>

              <div>
                <label for="varification">Verification code: </label>
                <input type="text" placeholder="" />
              </div>
            </div>
          )}

          <div className="AddresSubmit">
            <p id="Adressadded">Save</p>
          </div>
        </form>
      </div>
      {/* <!-- Addres Informain From  end --> */}
    </div>
  );
}
