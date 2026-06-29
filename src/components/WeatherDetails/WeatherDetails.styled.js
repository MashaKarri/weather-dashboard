import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: 60px auto;
  padding: 40px 77px;
  background: #e8e8e8;
  border-radius: 20px;
  box-sizing: border-box;

  @media (max-width: 1199px) {
    max-width: 768px;
    padding: 30px;
    margin: 50px auto;
  }

  @media (max-width: 767px) {
    max-width: 300px;
    padding: 40px;
    margin: 40px auto;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 58px;

  @media (max-width: 1199px) {
    gap: 20px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 35px;
  }
`;

export const Item = styled.div`
  height: 217px;
  padding: 20px;
  background: #d9d9d9;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: 'Montserrat', sans-serif;

  @media (max-width: 1199px) {
    height: 200px;
  }

  @media (max-width: 767px) {
    height: 160px;
    padding: 15px;
  }
`;

export const Title = styled.p`
  margin: 0;
  font-size: 16px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 12px;
  }

  @media (max-width: 767px) {
    font-size: 10px;
  }
`;

export const Value = styled.p`
  margin: 10px 0;
  font-size: 32px;
  font-weight: 500;

  @media (max-width: 1199px) {
    font-size: 16px;
  }

  @media (max-width: 767px) {
    font-size: 14px;
    margin: 8px 0;
  }
`;

export const Icon = styled.div`
  margin-top: 23px;
  width: 85px;
  height: 85px;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 1199px) {
    width: 60px;
    height: 60px;
    margin-top: 37px;
  }

  @media (max-width: 767px) {
    width: 60px;
    height: 60px;
    margin-top: 18px;
  }
`;
