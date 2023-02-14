import CartTable from "@/components/shopingCartComp/cartTable";
import ShopingListWrapper from "@/layouts/shopingListWrapper";
import Link from "next/link";
import React from "react";

export default function Wishcomp() {
  return (
    <ShopingListWrapper>
      <CartTable />
      <div className="btn-box CartPage d-flex">
        <div className="btn-box2">
          <Link href="/" className="def-btn">
            <i className="fa-solid fa-chevron-left"></i>
            Continue Shopping
          </Link>
        </div>
      </div>
    </ShopingListWrapper>
  );
}
