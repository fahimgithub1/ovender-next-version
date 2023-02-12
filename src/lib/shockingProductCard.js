import Link from "next/link";
import React from "react";

export default function ShockingProductCard() {
  return (
    <div className="item">
      <div className="ProductCard text-center">
        <Link href="/Product/[id]" className="d-block text-center">
          <div className="ImageBox">
            <img src="/images/prduct.jpg" alt="" />
          </div>
          <div className="textPart">
            <p>Tk 350.00</p>
            <span className="ManPrice">400</span>

            <div>
              <div className="progress">
                <div className="progres-bar">0</div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
