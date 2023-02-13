import Link from "next/link";
import React from "react";

export default function TopMid() {
  return (
    <div className="col-lg-4 col-md-7 col-sm-6 product-view-area">
      <div className="part-txt">
        <h2 className="main-product-title">
          Headband Foldable Stereo Bluetooth Headphones Wireless Headset
        </h2>
        <div className="review">
          <span className="star">
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </span>
          <span className="rating-amount">3 Reviews</span>
        </div>

        <p className="price">
          <span>Tk 96.00</span> Tk 75.00
        </p>

        <ul className="short-details">
          <li>
            Availability: <span>In stock</span>
          </li>
          <li>
            Product Code: <span>#4657</span>
          </li>
          <li>
            Tags: <span>Fashion, Hood, classNameic</span>
          </li>
        </ul>

        <div className="VariantColor">
          <div className="ProductColor">
            <span>Color:</span>
            <div className="BtnsDiv">
              <button className="ColorBtn1"></button>
              <button className="ColorBtn2"></button>
              <button className="ColorBtn3"></button>
            </div>
          </div>

          <div className="Variant">
            <span>Variant:</span>

            <div className="VariantImgs">
              <div className="VarImg">
                <img src="/images/prduct.jpg" alt="" />
              </div>
              <div className="VarImg">
                <img src="/images/prduct.jpg" alt="" />
              </div>
              <div className="VarImg">
                <img src="/images/prduct.jpg" alt="" />
              </div>
            </div>

            <div className="VariantImgs">
              <div className="TextVariant">
                <span>Variant1</span>
              </div>
              <div className="TextVariant">
                <span>Variant2</span>
              </div>
              <div className="TextVariant">
                <span>Variant3</span>
              </div>
              <div className="TextVariant">
                <span>Variant1</span>
              </div>
              <div className="TextVariant">
                <span>Variant2</span>
              </div>
              <div className="TextVariant">
                <span>Variant3</span>
              </div>
            </div>
          </div>
        </div>

        <form>
          <div className="row g-xl-4 g-3">
            <div className="col-lg-8 col-md-12 col-sm-4">
              <div className="quantity-wrap">
                <label>QTY</label>
                <div className="product-count">
                  <div className="quantity rapper-quantity">
                    <input
                      type="number"
                      min="1"
                      max="100"
                      step="1"
                      value="1"
                      readonly
                    />
                    <div className="quantity-nav">
                      <div className="quantity-button quantity-down">
                        <i className="fa-solid fa-minus"></i>
                      </div>
                      <div className="quantity-button quantity-up">
                        <i className="fa-solid fa-plus"></i>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>

        <div className="btn-box">
          <button id="addToCart">
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

        <div className="product-share">
          <span>Share Link:</span>
          <div className="social">
            <Link href="#">
              <i className="fa-brands fa-facebook-f"></i>
            </Link>{" "}
            <Link href="#">
              <i className="fa-brands fa-twitter"></i>
            </Link>{" "}
            <Link href="#">
              <i className="fa-brands fa-google-plus-g"></i>
            </Link>
            <Link href="#">
              <i className="fa-solid fa-rss"></i>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
