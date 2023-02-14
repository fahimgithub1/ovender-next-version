import React from "react";
import MyWishTr from "./myWishTr";

const myWishes = [
  {
    id: 1,
    name: "White short Checkered",
    price: 460,
    img: "https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1200&format=pjpg&exif=1&iptc=1",
  },
  {
    id: 2,
    name: "White short Checkered",
    price: 460,
    img: "https://burst.shopifycdn.com/photos/photography-product-download.jpg?width=1200&format=pjpg&exif=1&iptc=1"
  },
];

export default function WishList() {
  return (
    <div
      className="tab-pane fade"
      id="Wish-List"
      role="tabpanel"
      aria-labelledby="nav-Wish-List"
      tabindex="0"
    >
      <h5>MY Wishlist </h5>

      <div className="OrderList">
        {myWishes.map((item) => (
          <MyWishTr
            key={item.id}
            name={item.name}
            price={item.price}
            img={item.img}
          />
        ))}
      </div>
    </div>
  );
}
