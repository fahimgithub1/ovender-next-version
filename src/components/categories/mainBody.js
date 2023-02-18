import React from "react";
import CatagoriProducts from "./catagoriProducts";
import CatagoriSortby from "./catagoriSortby";
import CategorisLeft from "./categorisLeft";

export default function MainBody() {
  return (
    <div className="row mt-2 mt-lg-5 mt-md-3">

      <CategorisLeft />
      <div className="col-xl-9 col-lg-9 col-md-12 col-sm-12 AllProduct">
        <CatagoriSortby />
        <CatagoriProducts />
      </div>
    </div>
  );
}
