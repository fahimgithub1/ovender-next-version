import SectionWrapper from "@/layouts/sectionWrapper";
import ProductCard from "@/lib/productCard";
import SectionTitle from "@/lib/sectionTitle";
import { useGetAllProductsQuery } from "@/pages/api/testApiSlice";
import React, { useState } from "react";

const productInfo2 = [
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
  {
    id: 9,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 10,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 11,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 12,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 13,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 140,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 14,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 16,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 17,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 18,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 19,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 20,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 22,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 23,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 24,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 25,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 26,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 27,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 28,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 29,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 30,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 31,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 32,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
  {
    id: 34,
    name: "Veet Full Body Waxing Kit for Dry Skin - 20 strips",
    price: 45,
    disCount: 30,
    sold: 20,
    star: 3,
    img: require("../../../public/images/prduct.jpg"),
  },
];

export default function DailyProduct() {
  const [limit, setLimit] = useState(10);
  const { data: productInfo, isLoading, error } = useGetAllProductsQuery();
  console.log(productInfo)

  const handleLimit = () => {
    setLimit(limit + 12);
  };

  return (
    <SectionWrapper>
      <SectionTitle title="Daily Discover" />

      <div className="row">
        {!error && productInfo.data.slice(0, limit).map((item) => (
          <div className="col-6 col-lg-2 col-md-3 col-sm-4" key={item.id}>
            <ProductCard
              key={item.id}
              id={item.id}
              name={item.name}
              price={item.price}
              disCount={0}
              sold={item.sold}
              star={item.reviews.average_rating}
              img={item.images[0].large_image_url}
            />
          </div>
        ))}

        {error && <p>data not found !!</p>}
        {isLoading && <p>.. loading</p>}
      </div>
      <div className="DailyDiscovBTn">
        <button onClick={handleLimit}>See More</button>
      </div>
    </SectionWrapper>
  );
}
