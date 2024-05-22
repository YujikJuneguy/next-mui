"use client"
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay,Navigation } from 'swiper/modules';
import 'swiper/css/navigation';


const Slider = () => { 
  return (
    <div className='slider'>
      <Swiper
      spaceBetween={50}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      slidesPerView={2}
      navigation={true} modules={[Autoplay,Navigation]} 
     >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
      
      ...
    </Swiper>
    </div>
  )
}

export default Slider
// __________________________________________________________________________
