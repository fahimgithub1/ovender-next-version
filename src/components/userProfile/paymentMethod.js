import React from "react";

export default function PaymentMethod() {
  return (
    <div
      className="tab-pane fade"
      id="Payment-Methods"
      role="tabpanel"
      aria-labelledby="nav-Payment-Methods"
      tabindex="0"
    >
      <div className="AddressAddbtn">
        <h5>Payment Methods</h5>
        <button id="addaccoutnByn" onclick="FunAddAccount()">
          <i className="fa-solid fa-plus"></i>
          Add New Account
        </button>
      </div>

      {/* <!-- account from start --> */}
      <div className="phaymentInfoFrom d-block">
        <form>
          {/* <!-- cradit card --> */}
          <div>
            <div>
              <h3>Credit Card</h3>
            </div>

            <div>
              <label>Card Number</label>
              <input
                type="text"
                id="creditCardNumber"
                placeholder="XXXX XXXX XXXX XXXX"
              />
            </div>

            <div>
              <label>Expiry date</label>
              <input type="text" id="datepicker" placeholder="MM/YYYY" />
            </div>

            <div>
              <label>Security code</label>
              <input type="number" id="securityCode" placeholder="e.g. 123" />
            </div>

            <div>
              <label>Enter card holder name</label>
              <input type="text" placeholder="Card holder" />
            </div>
          </div>

          {/* <!-- PayPal --> */}
          <div>
            <div>
              <h3>PayPal</h3>
            </div>

            <div>
              <label>Email or phone no. that used in paypal</label>
              <input
                type="email"
                name="paypal-id"
                id="paypalId"
                placeholder="Email or mobile number"
                required
              />
            </div>
          </div>

          {/* <!-- Google --> */}
          <div>
            <div>
              <h3>Google Pay</h3>
            </div>

            <div>
              <label>Email or phone no. that used in google payl</label>
              <input
                type="email"
                name="google-Pay-id"
                id="googlePayId"
                placeholder="Email or mobile number"
                required
              />
            </div>
          </div>

          <div className="AddresSubmit">
            <p id="Adressadded">Save Account</p>
            <p className="CalcleAdd">Cencle</p>
          </div>
        </form>
      </div>
      {/* <!-- account from end --> */}

      {/* <!-- saved acount start --> */}
      <div className="OrderList">
        <h6>Account</h6>

        <div className="PaymentAccountsDiv">
          <div className="ImageAndNumber">
            <img src="./Images/Bkash.png" alt="" />
            <span>01825*****64</span>
          </div>

          <div className="PaymentDelet">
            <i className="fa-solid fa-delete-left"></i>
          </div>
        </div>
      </div>
      {/* <!-- saved acount end --> */}
    </div>
  );
}
