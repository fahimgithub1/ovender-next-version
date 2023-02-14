import React, { useState } from "react";
import UpdateAddresFrom from "./updateAddresFrom";

export default function AddresBook() {
  const [showAddAdres, setShowAddAdres] = useState(false);

  const addAdres = () => {
    if (showAddAdres) {
      setShowAddAdres(false);
    } else {
      setShowAddAdres(true);
    }
  };

  return (
    <div
      className="tab-pane fade"
      id="Address-Book"
      role="tabpanel"
      aria-labelledby="nav-Address-Book"
      tabindex="0"
    >
      <div className="AddressAddbtn">
        <h5>Address Book</h5>
        <button id="AddAdressBtnO" onClick={addAdres}>
          <i className="fa-solid fa-plus"></i> Add New Address
        </button>
      </div>

      {showAddAdres && <UpdateAddresFrom onAddAdres={addAdres} />}

      {/* <!-- collected Address star --> */}
      {!showAddAdres && (
        <div className="collectedAddress">
          <div className="row">
            {/* <!-- 11111111111 --> */}
            <div className="AddressBox col-lg-6 col-md-6">
              <div className="BoxADD">
                <div className="AddEdit row">
                  <span className="col-10">
                    Digital Marketing Solution (Pvt.) Ltd.
                  </span>
                  <span className="EditAll col-2" onclick="FunAddAdressBtnO()">
                    Edit
                  </span>
                </div>
                <span>Mobile: 014****11</span>
                <span>
                  Dhaka,Dhaka - North,Uttara Sector 15,flat:1302; building:
                  2A(nilanjona), rajuk ouattara Apartment project
                </span>
                <span className="LocatinType">Office</span>
              </div>
            </div>

            {/* <!-- 222222222222 --> */}
            <div className="AddressBox col-lg-6 col-md-6">
              <div className="BoxADD">
                <div className="AddEdit row">
                  <span className="col-10">
                    Digital Marketing Solution (Pvt.) Ltd.
                  </span>
                  <span className="EditAll col-2" onclick="FunAddAdressBtnO()">
                    Edit
                  </span>
                </div>
                <span>Mobile: 014****11</span>
                <span>
                  Dhaka,Dhaka - North,Uttara Sector 15,flat:1302; building:
                  2A(nilanjona), rajuk ouattara Apartment project
                </span>
                <span className="LocatinType">Office</span>
              </div>
            </div>

            {/* <!-- 3333333333 --> */}
            <div className="AddressBox col-lg-6 col-md-6">
              <div className="BoxADD">
                <div className="AddEdit row">
                  <span className="col-10">
                    Digital Marketing Solution (Pvt.) Ltd.
                  </span>
                  <span className="EditAll col-2" onclick="FunAddAdressBtnO()">
                    Edit
                  </span>
                </div>
                <span>Mobile: 014****11</span>
                <span>
                  Dhaka,Dhaka - North,Uttara Sector 15,flat:1302; building:
                  2A(nilanjona), rajuk ouattara Apartment project
                </span>
                <span className="LocatinType">Office</span>
              </div>
            </div>

            {/* <!-- 4444444444 --> */}
            <div className="AddressBox col-lg-6 col-md-6">
              <div className="BoxADD">
                <div className="AddEdit row">
                  <span className="col-10">
                    Digital Marketing Solution (Pvt.) Ltd.
                  </span>
                  <span className="EditAll col-2" onclick="FunAddAdressBtnO()">
                    Edit
                  </span>
                </div>
                <span>Mobile: 014****11</span>
                <span>
                  Dhaka,Dhaka - North,Uttara Sector 15,flat:1302; building:
                  2A(nilanjona), rajuk ouattara Apartment project
                </span>
                <span className="LocatinType">Office</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* <!-- collected Address end --> */}
    </div>
  );
}
