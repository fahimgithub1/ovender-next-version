import React, { useState } from "react";

export default function ShopingForm(props) {
  const [showCreditCard, setShowCreditCard] = useState(false);
  const [showPayPal, setShowPayPal] = useState(false);
  const [showGoogle, setShowGoogle] = useState(false);

  const CreditCard = () => {
    if (showCreditCard) {
      setShowCreditCard(false);
    } else {
      setShowCreditCard(true);
    }
    setShowPayPal(false);
    setShowGoogle(false);
  };

  const PayPal = () => {
    if (showPayPal) {
      setShowPayPal(false);
    } else {
      setShowPayPal(true);
    }
    setShowCreditCard(false);
    setShowGoogle(false);
  };

  const Googleh = () => {
    if (showGoogle) {
      setShowGoogle(false);
    } else {
      setShowGoogle(true);
    }
    setShowCreditCard(false);
    setShowPayPal(false);
  };

  return (
    <div className="single-tab mt-3 mt-md-4 mt-lg-5" id="checkOutTab">
      <div className="row">
        <div className="col-xl-8 col-lg-7 col-md-6">
          <div className="billing-details">
            <h3 className="title">Billing Details</h3>
            <form className="form-row">
              <div className="form-col-5">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Name"
                  required
                />
              </div>

              <div className="form-col-5">
                <input
                  type="email"
                  className="form-control"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="form-col-5">
                <input
                  type="tel"
                  className="form-control"
                  placeholder="Phone"
                  required
                />
              </div>

              <div className="form-col-10">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Address"
                  required
                />
              </div>

              <div className="form-col-10">
                <div className="check-wrap">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="shipDifferentAddress"
                    />{" "}
                    <span className="sub-input">
                      <i className="fa-regular fa-check"></i>
                    </span>
                    <label
                      className="form-check-label"
                      htmlFor="shipDifferentAddress"
                    >
                      Ship To Different Address
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="saveInformation"
                    />{" "}
                    <span className="sub-input">
                      <i className="fa-regular fa-check"></i>
                    </span>
                    <label
                      className="form-check-label"
                      htmlFor="saveInformation"
                    >
                      Save This Information For Next Time
                    </label>
                  </div>
                </div>
              </div>

              <div className="form-col-10">
                <textarea
                  className="form-control textarea"
                  placeholder="Notes about your order, e.g. special notes for delivery"
                ></textarea>
              </div>
            </form>
          </div>
        </div>

        <div className="col-xl-4 col-lg-5 col-md-6">
          <div className="payment-method">
            <div className="total-clone">
              <ul>
                <li>
                  Sub Total{" "}
                  <span className="price-txt">
                    TK<span className="sub-total-2"> 1026</span>
                  </span>
                </li>
                <li>
                  Shipping{" "}
                  <span className="price-txt" id="shippingFee2">
                    <span className="text-success">Free</span>
                  </span>
                </li>
                <li>
                  Tax & Vat{" "}
                  <span className="price-txt" id="shippingFee2">
                    TK<span className="text-success"> 15</span>
                  </span>
                </li>
                <li className="total-price-wrap">
                  Total{" "}
                  <span className="price-txt">
                    TK<span id="totalPrice2">1026</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="payment-option">
              {/*  */}
              <div className="single-payment-card">
                <div className="panel-header" onClick={CreditCard}>
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="credit-card"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">Credit Card</span>
                  </div>
                  <span className="icon">
                    <i className="fa-solid fa-credit-card fa-2x"></i>
                  </span>
                </div>

                {showCreditCard && (
                  <div className="panel-body">
                    <form className="credit-card-form">
                      <div className="row g-lg-4 g-3">
                        <div className="col-12">
                          <div className="input-box card-number">
                            <span className="symbol">
                              <img
                                src="assets/images/visa.png"
                                alt="Card Type"
                              />{" "}
                            </span>
                            <label>Card Number</label>
                            <input
                              type="text"
                              id="creditCardNumber"
                              placeholder="XXXX XXXX XXXX XXXX"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-box">
                            <label>Expiry date</label>{" "}
                            <input
                              type="text"
                              id="datepicker"
                              placeholder="MM/YYYY"
                            />
                          </div>
                        </div>
                        <div className="col-6">
                          <div className="input-box">
                            <label>Security code</label>{" "}
                            <input
                              type="number"
                              id="securityCode"
                              placeholder="e.g. 123"
                            />
                          </div>
                        </div>
                        <div className="col-12">
                          <div className="input-box">
                            <label>Enter card holder name</label>{" "}
                            <input
                              type="text"
                              id="cardHolderName"
                              placeholder="Card holder"
                            />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="single-payment-card">
                <div className="panel-header" onClick={PayPal}>
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="paypal"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">PayPal</span>
                  </div>
                  <span className="icon">
                    <i className="fa-brands fa-cc-paypal fa-3x"></i>
                  </span>
                </div>

                {showPayPal && (
                  <div className="panel-body">
                    <form className="paypal-form">
                      <div className="row g-lg-4 g-3">
                        <div className="col-12">
                          <label>Email or phone no. that used in paypal</label>
                          <input
                            type="email"
                            name="paypal-id"
                            id="paypalId"
                            placeholder="Email or mobile number"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            id="confirmPaypal"
                            className="def-btn"
                          >
                            Confirm Paypal
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="single-payment-card">
                <div className="panel-header" onClick={Googleh}>
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="google-pay"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">Google Pay</span>
                  </div>
                  <span className="icon">
                    <i className="fa-brands fa-google-pay fa-3x"></i>
                  </span>
                </div>

                {showGoogle && (
                  <div className="panel-body">
                    <form className="google-pay-form">
                      <div className="row g-lg-4 g-3">
                        <div className="col-12">
                          <label>
                            Email or phone no. that used in google pay
                          </label>{" "}
                          <input
                            type="email"
                            name="google-Pay-id"
                            id="googlePayId"
                            placeholder="Email or mobile number"
                            required
                          />
                        </div>
                        <div className="col-12">
                          <button
                            type="submit"
                            id="confirmGooglePay"
                            className="def-btn"
                          >
                            Confirm Google Pay
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                )}
              </div>

              <div className="single-payment-card">
                <div className="panel-header">
                  <div className="left-wrap">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        name="cash"
                        type="checkbox"
                        disabled
                      />
                      <span className="sub-input">
                        <i className="fa-solid fa-check"></i>
                      </span>
                    </div>
                    <span className="type">Cash on delivery</span>
                  </div>
                  <span className="icon">
                    <i className="fa-solid fa-money-bill-1-wave fa-2x"></i>
                  </span>
                </div>
              </div>
            </div>

            <button
              className="def-btn palce-order tab-next-btn PalceOrder"
              id="palceOrder"
              onClick={props.onOrderCompliteView}
            >
              Place Order
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
