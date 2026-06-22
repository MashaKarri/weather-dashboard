import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding-top: 80px;
  padding-bottom: 50px;
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 40px;
`;

export const SliderWrapper = styled.div`
  padding: 0 100px;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    width: 500px;
    height: 200px;
  }

  .swiper-slide-active {
    transform: scale(1.1);
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
