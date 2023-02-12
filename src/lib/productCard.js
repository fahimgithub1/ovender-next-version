import Link from "next/link";
import React from "react";

export default function ProductCard(props) {
  return (
    <div className="ProductCard ProductCard1">
      <Link href="./Product/[id]" className="d-block">
        <div className="ImageBox">
          <img src="/images/prduct.jpg" alt="" />
        </div>

        <div className="textPart">
          <p className="Pname">{props.name}</p>
          <div className="price">
            <p>{props.price - props.disCount}</p>
            <span className="ManPrice">{props.price}</span>
            <ul>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              <li>
                {" "}
                <i className="fas fa-star"></i>{" "}
              </li>
              ({props.star})
            </ul>
          </div>
          <div className="float-right sold">{props.sold} sold</div>
        </div>

        <button className="">View</button>
      </Link>
    </div>
  );
}
