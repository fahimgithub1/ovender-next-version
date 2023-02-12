import Link from "next/link";
import React from "react";

export default function ShockingTitle() {
  return (
    <div className="sectionTitle">
      <div className="TimeTitle">
        <h2>Shocking Sale</h2>
        <div className="Timing">
          <span>07 :</span>
          <span>27 :</span>
          <span> 56</span>
        </div>
      </div>

      <Link href="/categories" className="seaAll">
        See All
      </Link>
    </div>
  );
}
