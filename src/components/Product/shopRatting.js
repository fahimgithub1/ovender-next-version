import BgWrapper from "@/layouts/bgWrapper";
import React from "react";

export default function ShopRatting() {
  return (
    <BgWrapper>
      <div className="row">
        <div className="ShopBtn col-lg-3 col-md-4 col-sm-12">
          <p>ovender</p>
          <button>chat now</button>

          <button>view shop</button>
        </div>

        <div className="ShopRating col-lg-7 col-md-8 col-sm-12">
          <div>
            <ul>
              <li>
                Rating <span>2.6k</span>
              </li>
              <li>
                Response Rate <span>2.6k</span>
              </li>
              <li>
                Joined <span>2.6k</span>
              </li>
            </ul>
          </div>

          <div>
            <ul>
              <li>
                Rating <span>2.6k</span>
              </li>
              <li>
                Response Rate <span>2.6k</span>
              </li>
              <li>
                Joined <span>2.6k</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </BgWrapper>
  );
}
