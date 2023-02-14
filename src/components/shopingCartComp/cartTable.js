import React from "react";
import CartTr from "./cartTr";

const cartInfo = [
  {
    id: 1,
    name: "White short Checkered",
    price: 320,
    quantity: 1,
    total: "320",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
  },
  {
    id: 2,
    name: "White short Checkered",
    price: 320,
    quantity: 1,
    total: "320",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
  },
  {
    id: 3,
    name: "White short Checkered",
    price: 320,
    quantity: 1,
    total: "320",
    img: "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?cs=srgb&dl=pexels-math-90946.jpg&fm=jpg",
  },
];

export default function CartTable() {
  return (
    <div className="table-responsive">
      <table className="table table-borderless">
        <thead>
          <tr>
            <th>Image</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {cartInfo.map((item) => (
            <CartTr
              key={item.id}
              id={item.id}
              img={item.img}
              name={item.name}
              price={item.price}
              total={item.total}
              quantity={item.quantity}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
