import React from "react";

export default function MyWishTr(props) {
  return (
    <div className="table-responsive ORderResponsive">
      <table className="table table-borderless Oderable">
        <tr>
          <td className="col-1">
            <div className="product-img">
              <img src={props.img} alt="Image" />
            </div>
          </td>

          <td>
            <a href="shop-details.html" className="product-name">
              {props.name}
            </a>
          </td>

          <td>
            <span className="price-txt">
              Tk <span className="main-price">{props.price}</span>
            </span>
          </td>

          <td>
            <button>Add To Cart</button>
          </td>

          <td>
            <button className="cart-delete WishBTn2">
              <i className="fa-solid fa-delete-left"></i>
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
}
