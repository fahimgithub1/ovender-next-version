import BgWrapper from '@/layouts/bgWrapper'
import React from 'react'
import ShockingTitle from './shockingTitle'
import { Swiper,SwiperSlide } from 'swiper/react';
import { FreeMode } from 'swiper';

import 'swiper/css';
import 'swiper/css/free-mode';
import ShockingProductCard from '@/lib/shockingProductCard';

const owlitmes = [
    {
        id:1,
        name: "free shipping"
    },
    {
        id:2,
        name: "campaign"
    },
    {
        id:3,
        name: "Oven Mall"
    },
    {
        id:4,
        name: 'Oven Mart'
    },
    {
        id:5,
        name: 'Gift Card'
    },
    {
        id:6,
        name: "Global Collection"
    },
    {
        id:7,
        name: "Tourse & Tickets"
    },
    {
        id:8,
        name: "Digital Sheba"
    },
    {
        id:9,
        name: 'Daily Rewards'
    }
]
export default function ShockingSale() {
  return (
    <BgWrapper>
      <ShockingTitle />

      <Swiper 
            freeMode= {true}
            modules= {[FreeMode]}
            className= "mySwiper"
            grabCursor={true}
            slidesPerView="auto"
            spaceBetween={10}
            breakpoints={{
                0:{
                    slidesPerView:2,
                },
                767:{
                    slidesPerView:4,
                },
                1024:{
                    slidesPerView:7,
                }
            }}
        >
            {owlitmes.map((item)=>(
                <SwiperSlide  key={item.id}>
                    <ShockingProductCard name={item.name} />
                </SwiperSlide>
            ))}
      </Swiper>
    </BgWrapper>
  )
}
