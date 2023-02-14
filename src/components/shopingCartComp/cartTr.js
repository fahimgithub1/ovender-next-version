import Link from "next/link";
import React from "react";

export default function CartTr(props) {
  return (
    <tr>
      <td>
        <div className="product-img">
          <img
            src={props.img}
            alt="Image"
          />
        </div>
      </td>

      <td>
        {/* <Link href={`/product/${item.id}`} className="product-name"> */}
        <Link href={`/product/`} className="product-name">
          {props.name}
        </Link>
      </td>

      <td>
        <span className="price-txt">
          Tk <span className="main-price">{props.price}</span>
        </span>
      </td>

      <td>
        <div className="product-count cart-product-count">
          <div className="quantity rapper-quantity">
            <input
              type="number"
              min="1"
              max="100"
              step="1"
              value={props.quantity}
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
      </td>

      <td>
        <span className="price-txt">
          Tk <span className="total-price">{props.totel}</span>
        </span>
      </td>

      <td>
        <button className="cart-delete">
          <i className="fa-solid fa-delete-left"></i>
        </button>
      </td>
    </tr>
  );
}
