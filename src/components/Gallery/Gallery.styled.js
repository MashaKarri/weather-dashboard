import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 80px 16px 50px;

  @media (max-width: 1199px) {
    max-width: 768px;
    padding-top: 70px;
  }

  @media (max-width: 767px) {
    max-width: 320px;
    padding: 60px 0;
  }
`;

export const Title = styled.h2`
  font-family: 'Montserrat', sans-serif;
  font-weight: 500;
  font-size: 20px;
  margin: 0 0 40px;

  @media (max-width: 767px) {
    margin-bottom: 25px;
    text-align: center;
  }
`;

export const SliderWrapper = styled.div`
  padding: 0 100px;

  .swiper {
    width: 100%;
  }

  .swiper-slide {
    height: 200px;
  }

  .swiper-slide-active {
    transform: scale(1.1);
  }

  @media (max-width: 1199px) {
    padding: 0 40px;

    .swiper-slide {
      height: 180px;
    }
  }

  @media (max-width: 767px) {
    padding: 0;

    .swiper-slide {
      height: 180px;
    }

    .swiper-slide-active {
      transform: scale(1);
    }
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
