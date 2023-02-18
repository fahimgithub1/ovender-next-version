import React from "react";

export default function CategorisLeft() {
  return (
    <div className="col-xl-3 col-lg-3 col-md-0 col-sm-0 Catagori">
      <div className="Catagori2">
        <h5>Filter Products By</h5>
        
        <div className="Catagori3">
          <span className="TaiterSpan">CATEGORY</span>
          <a href="#">Hair Brushes & Combs (2)</a>
          <a href="#">Hair Brushes & Combs (2)</a>
          <a href="#">Hair Brushes & Combs (2)</a>
          <a href="#">Hair Brushes & Combs (2)</a>
          <a href="#">Hair Brushes & Combs (2)</a>
          <a href="#">Hair Brushes & Combs (2)</a>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">Price</span>
          <div className="priceLabel">
            {" "}
            <span className="pricelavel1"></span> <span className="pricelavel2"></span>
          </div>
          <div className="priceInput">
            <span>TK </span> <input type="text" value="257" /> -<span>TK </span>{" "}
            <input type="text" value="1000" />
          </div>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">PRODUCT TYPE</span>
          <a href="#">Unassigned (1)</a>
          <a href="#">Hair Brushs (1)</a>
          <a href="#">Razor (1)</a>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">BRAND NAME</span>
          <a href="#">
            <input type="checkbox" /> Unassigned (1)
          </a>
          <a href="#">
            <input type="checkbox" /> Hair Brushs (1)
          </a>
          <a href="#">
            <input type="checkbox" /> Razor (1)
          </a>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">Shop Type</span>
          <a href="#">
            <input type="checkbox" /> Ovendar Mall
          </a>
          <a href="#">
            <input type="checkbox" /> Ovendar Preferred{" "}
          </a>
          <a href="#">
            <input type="checkbox" /> Ovendar Preferred+
          </a>
        </div>

        <div className="Catagori3">
          <span className="TaiterSpan">Payment Option</span>
          <a href="#">
            <input type="checkbox" /> Installment
          </a>
          <a href="#">
            <input type="checkbox" /> Cash On Delivery{" "}
          </a>
        </div>

        <div className="Catagori3">
          <button>Clean All</button>
        </div>
      </div>
    </div>
  );
}
