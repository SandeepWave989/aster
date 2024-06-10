import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import './SpecialitiesSlider.css'

const SpecialitiesSlider = ({ specialitiesData, speed = 1000 }) => (
  <Swiper
    modules={[Navigation]}
    spaceBetween={20}
    slidesPerView={5}
    navigation
    speed={speed}
  >
    {specialitiesData.map((speciality, index) => (
      <SwiperSlide key={index}>
        <div className='specialities_details text-center'>
          <img src={speciality.imageUrl} alt={speciality.title} />
          <p className='pt-2 specialities_text'>{speciality.description}</p>
        </div>
      </SwiperSlide>
    ))}
  </Swiper>
);

export default SpecialitiesSlider;
