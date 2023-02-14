import ShopingListWrapper from "@/layouts/shopingListWrapper";
import Link from "next/link";
import React from "react";
import CartCalculation from "./cartCalculation";
import CartTable from "./cartTable";

export default function ShopingCart(props) {
  return (
    <ShopingListWrapper>
      <CartTable />
      <CartCalculation />

      <div className="btn-box CartPage d-flex">
        <div className="btn-box2">
          <Link href="/" className="def-btn">
            <i className="fa-solid fa-chevron-left"></i>
            Continue Shopping
          </Link>
        </div>

        <div>
          <button
            className="def-btn tab-next-btn ProceedToCheckout"
            id="proceedToCheckout"
            onClick={props.onShopingCartView}
          >
            Proceed to checkout <i className="fa-solid fa-chevron-right"></i>
            <i className="fa-light fa-cart-circle-check"></i>
          </button>
        </div>
      </div>
    </ShopingListWrapper>
  );
}
