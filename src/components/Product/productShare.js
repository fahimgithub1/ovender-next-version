import Link from "next/link";
import React from "react";

export default function ProductShare() {
  return (
    <div className="product-share">
      <span>Share Link:</span>
      <div className="social">
        <Link href="#">
          <i className="fa-brands fa-facebook-f"></i>
        </Link>{" "}
        <Link href="#">
          <i className="fa-brands fa-twitter"></i>
        </Link>{" "}
        <Link href="#">
          <i className="fa-brands fa-google-plus-g"></i>
        </Link>
        <Link href="#">
          <i className="fa-solid fa-rss"></i>
        </Link>
      </div>
    </div>
  );
}
