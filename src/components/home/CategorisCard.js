import Link from "next/link";
import React from "react";

export default function CategorisCard(props) {
  return (
    <div className="caragorisCard text-center">
      <Link href="/categories" className="d-block text-center">
        <img src="/images/categoris.png" alt="" />
        <p>{props.name}</p>
      </Link>
    </div>
  );
}
