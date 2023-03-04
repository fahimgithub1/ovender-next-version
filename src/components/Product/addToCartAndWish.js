import React from "react";

export default function AddToCartAndWish(props) {
  return (
    <div className="btn-box">
      <button
        id="addToCart"
        onClick={() => addCartItemsHandler(addtoChartInfo)}
      >
        <span>
          <i className="fa fa-cart-shopping"></i>
        </span>{" "}
        add to cart
      </button>
      
      <button id="addToWishList">
        <span>
          <i className="fa fa-heart"></i>
        </span>{" "}
        add to wishlist
      </button>
    </div>
  );
}
