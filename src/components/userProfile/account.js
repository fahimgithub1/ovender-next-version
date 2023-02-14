import React from "react";

export default function Acount() {
  return (
    <div
      className="tab-pane fade show active"
      id="Account"
      role="tabpanel"
      aria-labelledby="nav-Account"
      tabindex="0"
    >
      <h5>MY ACCOUNT</h5>

      <div className="UnderAll">
        <h5>Account Information</h5>
        <div className="UlDivMyAcount row">
          <ul className="col-6">
            <li className="tititle">Contact Information</li>
            <li>MD Fahim Patowary</li>
            <li>patowaryfahim3@gmail.com</li>
          </ul>

          <ul className="col-6">
            <li className="tititle">Newsletters</li>
            <li>You aren't subscribed to our newsletter.</li>
          </ul>
        </div>
      </div>

      <div className="UnderAll UnderAll2">
        <h5>Address Book</h5>
        <div className="UlDivMyAcount row">
          <ul className="col-6">
            <li className="tititle">Default Billing Address</li>
            <li>You have not set a default billing address.</li>
          </ul>

          <ul className="col-6">
            <li className="tititle">Default Shipping Address</li>
            <li>You have not set a default shipping address.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
