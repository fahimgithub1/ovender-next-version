import Link from "next/link";
import React from "react";

export default function ProductCard(props) {
  const src = props.img
  const porductID = props.id;

  return (
    <div className="ProductCard ProductCard1">
      <Link href={`/Product/${porductID}`} className="d-block">
        <div className="ImageBox">
          {src === "" ? (
            <img src="/images/prduct.jpg" alt="" />
          ) : (
            <img src={props.img} alt="" />
          )}
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
