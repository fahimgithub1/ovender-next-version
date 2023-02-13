import Link from "next/link";
import React from "react";
import SmalImagBlox from "./smalImagBlox";

// import img "/images/prduct.jpg"s

const smalImages = [
  {
    id: 1,
    // smalHref: {img}
  },
  {
    id: 2,
    // smalHref: { img },
  },
  {
    id: 3,
    // smalHref: {img}
  },
];

export default function ImageView() {
  return (
    <div className="col-lg-5 col-md-5 col-sm-5">
      <div className="BigImg">
        <Link href="./images/prduct.jpg" className="MagicZoom" id="jeans">
          <img src="/images/prduct.jpg" alt="" />
        </Link>
      </div>

      <div className="SmallImg d-flex">
        {smalImages.map((item) => {
          <SmalImagBlox
            key={item.id}
            // smalHref={item.smalHref}
          />;
        })}
      </div>
    </div>
  );
}
