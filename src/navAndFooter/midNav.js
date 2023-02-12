import Link from "next/link";
import { useState } from "react";
import CartSummary from "./cartSumary";
import LaptopMenu from "./laptopMenu";

export default function MidNav() {
  const [isLaptopMenuShow, setIsLaptopMenuShow] = useState(true);

  const laptopCategoriHandler = () => {
    if (!isLaptopMenuShow) {
      setIsLaptopMenuShow(true);
    } else {
      setIsLaptopMenuShow(false);
    }
  };

  return (
    <div className="MidNev">
      <div className="container">
        <div className="row">
          <div className="logo col-2 text-center">
            <Link href="/">
              <img src="/images/logo.png" alt="logo" />
            </Link>
          </div>

          <div className="Serchber col-1 DestopNavCtagoris">
            {isLaptopMenuShow && (
              <i
                className="fa-solid fa-bars CatagorisIcinHide"
                onClick={laptopCategoriHandler}
              ></i>
            )}

            {!isLaptopMenuShow && (
              <i className="fa fa-xmark" onClick={laptopCategoriHandler}></i>
            )}

            {/* <!-- scorle click action --> */}
            {!isLaptopMenuShow && <LaptopMenu />}
          </div>

          <div className="Serchber col-6">
            <form action="">
              <input type="text" placeholder="Search Your Product....." />
              <label>
                <i className="fa-solid fa-magnifying-glass"></i>
              </label>
            </form>
          </div>

          <div className="SelectedIocn col-3">
            <div className="IconDiv NavCart Chartnonem">
              <i className="fa-solid fa-cart-shopping"></i>
              <div>
                <p className="Count">0</p>
                <Link href="/shopingCart">
                  <p>My Cart</p>
                </Link>
              </div>

              {/* <!-- Hover show chart summery start --> */}
              <CartSummary />
              {/* <!-- Hover show chart summery end --> */}
            </div>

            <Link href="/wish" className="IconDiv lovehide Chartnone">
              <div className="IconDiv">
                <i className="fa-regular fa-heart"></i>
                <div>
                  <p className="Count">0</p>
                  <p>Wishlist</p>
                </div>
              </div>
            </Link>

            <Link href="/login">
              <div className="IconDiv">
                <i className="fa-regular fa-user"></i>
                <div>
                  <p>Login</p>
                  <p>Register</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
