import BgWrapper from "@/layouts/bgWrapper";
import SectionTitle from "@/lib/sectionTitle";
import React, { useState } from "react";

export default function Review() {
  const [reviewText, setReviewText] = useState("sfdf");

  const onReviewSubmit = (event) =>{
    event.preventDefault();
    console.log(reviewText);
  }

  return (
    <BgWrapper>
      <SectionTitle title="Product Ratings" />

      <div className="YourReview">
        <h4>Your Review:</h4>
        <div>
          <form>
            <textarea
              placeholder="write your review111"
              onChange={(e) => {
                setReviewText(e.target.value);
              }}
            ></textarea>
            <br />

            <ul>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
              <li>
                <i className="fa fa-star"></i>
              </li>
            </ul>

            <button type="submit" onClick={onReviewSubmit}>Submit</button>
          </form>
        </div>
      </div>
    </BgWrapper>
  );
}
