import ProductCard from "@/lib/productCard";
import React from "react";

const productInfo = [
  {
    id: 1,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 2,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 3,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 4,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 5,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 6,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 7,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 8,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
];

export default function CatagoriProducts() {
  return (
    <div className="tab-content tab-content-Cate">
      <div className="row">
        {productInfo.map((item) => (
          <div
            className="DuleProduct col-6 col-xl-3 col-lg-4 col-md-4 col-sm-6 col-md-4 col-sm-4 Mobile50"
            key={item.id}
          >
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              disCount={item.disCount}
              sold={item.sold}
              star={item.star}
              img={item.img}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
