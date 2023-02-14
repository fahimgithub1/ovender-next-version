import React from "react";

export default function UpdateAddresFrom(props) {
  return (
    <div className="addressInfoFrom">
      <form>
        <div>
          <label for="name">Name: </label>
          <input type="text" placeholder="" />
        </div>

        <div>
          <label for="Phone">Phone Number: </label>
          <input type="text" placeholder="" />
        </div>

        <div>
          <label for="country">Address: </label>
          <input type="text" placeholder="" />
        </div>

        <div className="AddresSubmit">
          <p id="Adressadded">Save Address</p>
          <p
            className="CalcleAdd"
            id="Adressadded"
            onClick={props.onAddAdres}
          >
            Cencle
          </p>
        </div>
      </form>
    </div>
  );
}
