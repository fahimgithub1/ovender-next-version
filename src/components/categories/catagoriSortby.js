import React from "react";

export default function CatagoriSortby() {
  return (
    <div className="CtagorisFilter">
      <div className="ShortIcon">
        <span className="DisNoneinPhone">58 Items Available</span>
        <span className="CatagoriFilter showInphone">Filter</span>
      </div>

      <div className="ShortBy">
        <div>
          <span>Short By </span>
          <select>
            <option value="0">Prositon</option>
            <option value="1">Product Name</option>
            <option value="2">Price</option>
            <option value="3">Pupoler Product</option>
          </select>
        </div>
      </div>
    </div>
  );
}
