import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding: 26px 76px;
  border-radius: 20px;
  background: #e8e8e8;
  box-sizing: border-box;

  @media (max-width: 1199px) {
    max-width: 768px;
    margin: 0 auto;
    padding: 20px 35px;
  }

  @media (max-width: 767px) {
    max-width: 300px;
    padding: 18px 25px;
  }
`;

export const Title = styled.h2`
  margin-bottom: 20px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 1199px) {
    font-size: 12px;
    margin-bottom: 17px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
    margin-bottom: 25px;
    margin-left: 18px;
  }
`;

export const ForecastGrid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;

  @media (max-width: 1199px) {
    gap: 17px;
  }

  @media (max-width: 767px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 35px;
    justify-items: center;
  }
`;

export const ForecastRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  padding: 14px 50px;
  border-radius: 10px;
  background: #d9d9d9;

  @media (max-width: 1199px) {
    padding: 11px 15px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 110px;
    height: 170px;
    padding: 15px 10px;
    box-sizing: border-box;
    gap: 8px;
  }
`;

export const DateText = styled.span`
  min-width: 70px;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 14px;
    min-width: 45px;
  }

  @media (max-width: 767px) {
    min-width: auto;
    font-size: 10px;
    margin-bottom: 20px;
  }
`;

export const WeatherInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;

  @media (max-width: 1199px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    flex-direction: column;
    gap: 7px;
  }
`;

export const WeatherIcon = styled.img`
  width: 45px;
  height: 45px;
  object-fit: contain;

  @media (max-width: 1199px) {
    width: 35px;
    height: 35px;
  }

  @media (max-width: 767px) {
    width: 30px;
    height: 30px;
  }
`;

export const Temp = styled.span`
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 14px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
    margin-bottom: 15px;
  }
`;

export const Description = styled.span`
  min-width: 140px;
  text-align: right;
  font-size: 16px;
  font-weight: 500;
  text-transform: lowercase;

  @media (max-width: 1199px) {
    min-width: 120px;
    font-size: 14px;
  }

  @media (max-width: 767px) {
    min-width: auto;
    text-align: center;
    font-size: 10px;
    line-height: 1.3;
  }
`;
