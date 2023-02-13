import Link from "next/link";
import React from "react";

export default function SmalImagBlox(props) {
  return (
    <div>
      <Link
        href="/images/prduct.jpg"
        // href={props.smalHref}
        data-zoom-id="jeans"
        data-image="/images/prduct.jpg"
        data-options="cssclassName: mz-show-arrows;"
      >
        <img src="/images/prduct.jpg" alt="" />
      </Link>
    </div>
  );
}
