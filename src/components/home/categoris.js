import BgWrapper from "@/layouts/bgWrapper";
import SectionTitle from "@/lib/sectionTitle";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper";

import "swiper/css";
import "swiper/css/free-mode";
import CategorisCard from "./CategorisCard";
import { useGetAllCategorisQuery } from "@/pages/api/apiSlices";

const owlitmes = [
  {
    id: 1,
    name: "Women's clothing",
  },
  {
    id: 2,
    name: "Women's Shoes",
  },
  {
    id: 3,
    name: "Women's Bag",
  },
  {
    id: 4,
    name: "Home And Living",
  },
  {
    id: 5,
    name: "Gift Card",
  },
  {
    id: 6,
    name: "Health & Beauty",
  },
  {
    id: 7,
    name: "Baby&Toys",
  },
  {
    id: 8,
    name: "Fashion Accessories",
  },
  {
    id: 9,
    name: "Automotive",
  },
  {
    id: 10,
    name: "Muslim Fashion",
  },
];



export default function Categoris() {
  const { data: Categories, error, isLoading } = useGetAllCategorisQuery();
  console.log(Categories);

  let cateDiv = ''

  if(Categories !== undefined){
    cateDiv = Categories.data.map((item) => (
      <SwiperSlide key={item.id}>
        <CategorisCard
          name={item.name}
          slug={item.slug}
          img={item.image_url}
        />
      </SwiperSlide>
    )) ;
  }else{
    
  } 

  return (
    <BgWrapper>
      <SectionTitle title="Categories" />

      <Swiper
        freeMode={true}
        modules={[FreeMode]}
        className="mySwiper"
        grabCursor={true}
        slidesPerView="auto"
        spaceBetween={10}
        breakpoints={{
          0: {
            slidesPerView: 3,
          },
          767: {
            slidesPerView: 5,
          },
          1024: {
            slidesPerView: 10,
          },
        }}
      >
        
        {cateDiv}
        {error && <p>data not found !!</p>}
        {isLoading && <p>.. loading</p>}
        {/* {Categories !== ""
          ? Categories.data.map((item) => (
              <SwiperSlide key={item.id}>
                <CategorisCard
                  name={item.name}
                  slug={item.slug}
                  img={item.image_url}
                />
              </SwiperSlide>
            ))
          : ""} */}
      </Swiper>
    </BgWrapper>
  );
}
