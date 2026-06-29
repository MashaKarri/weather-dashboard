import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';

import {
  Container,
  Title,
  SliderWrapper,
  SlideImage,
} from './Gallery.styled.js';

export const Gallery = ({ images }) => {
  return (
    <Container>
      <Title>Beautiful nature</Title>

      <SliderWrapper>
        <Swiper
          effect="coverflow"
          grabCursor
          centeredSlides
          loop
          spaceBetween={10}
          modules={[EffectCoverflow]}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
            slideShadows: true,
          }}
          breakpoints={{
            0: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1200: {
              slidesPerView: 3,
            },
          }}
        >
          {images.map(img => (
            <SwiperSlide key={img.id}>
              <SlideImage src={img.webformatURL} alt={img.tags} />
            </SwiperSlide>
          ))}
        </Swiper>
      </SliderWrapper>
    </Container>
  );
};
