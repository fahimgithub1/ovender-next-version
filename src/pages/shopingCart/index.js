import OrderComplited from "@/components/shopingCartComp/orderComplited";
import ShopingCart from "@/components/shopingCartComp/shopingCart";
import ShopingForm from "@/components/shopingCartComp/shopingForm";
import CartWrapper from "@/layouts/cartWrapper";
import SectionWrapper from "@/layouts/sectionWrapper";
import HeaderCom from "@/lib/header";
import PagesHeros from "@/lib/pagesHeros";
import Footer from "@/navAndFooter/footer";
import Navber from "@/navAndFooter/navber";
import React, { useState } from "react";

export default function ShopingCartpage() {
  const [showCart, setShowcCart] = useState(true);
  const [showShopingForm, setShowShopingForm] = useState(false);
  const [showOrderComplited, setShowOrderComplited] = useState(false);

  // const CartView = () =>{
  //   setShowcCart(true)
  //   setShowShopingForm(false)
  //   setShowOrderComplited(false)
  // }

  const ShopingCartView = () => {
    setShowcCart(false);
    setShowShopingForm(true);
    setShowOrderComplited(false);
    console.log(
      "2nd click " + showCart + " " + showShopingForm + " " + showOrderComplited
    );
  };

  const OrderCompliteView = () => {
    setShowcCart(false);
    setShowShopingForm(false);
    setShowOrderComplited(true);
    console.log(
      "3rd click " + showCart + " " + showShopingForm + " " + showOrderComplited
    );
  };

  return (
    <>
      <HeaderCom title="Shooping Cart" />

      <main>
        <Navber />

        <section className="sectionMarginBot HerosSection MainBodyTop">
          <div className="row">
            <PagesHeros />
          </div>
        </section>

        <CartWrapper>
          {showCart && !showShopingForm && !showOrderComplited && (
            <ShopingCart onShopingCartView={ShopingCartView} />
          )}
          {showShopingForm && !showCart && !showOrderComplited && (
            <ShopingForm onOrderCompliteView={OrderCompliteView} />
          )}
          {showOrderComplited && !showCart && !showShopingForm && (
            <OrderComplited />
          )}
        </CartWrapper>

        <Footer />
      </main>
    </>
  );
}
