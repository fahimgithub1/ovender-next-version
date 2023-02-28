import BgWrapper from "@/layouts/bgWrapper";
import React from "react";

export default function ProductDiscription(props) {
  return (
    <BgWrapper>
      <h2 className="sectionTitle">Product Description</h2>

      <div className="ProductDatiles">
        <p>
          {props.singleProduct.short_description}
        </p>

        <p>
          {props.singleProduct.description}
        </p>
      </div>
    </BgWrapper>
  );
}
