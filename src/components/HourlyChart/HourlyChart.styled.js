import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  margin: 80px auto;
  padding: 25px 15px;
  background: #e8e8e8;
  border-radius: 20px;
  box-sizing: border-box;

  .chart {
    height: 480px;
  }

  @media (max-width: 1199px) {
    max-width: 768px;
    margin: 50px auto;
    padding: 20px 35px;

    .chart {
      height: 340px;
    }
  }

  @media (max-width: 767px) {
    max-width: 300px;
    margin: 35px auto;
    padding: 15px 10px;

    .chart {
      height: 200px;
    }
  }
`;

export const Title = styled.h3`
  margin: 0 0 5px 40px;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;

  @media (max-width: 1199px) {
    margin-left: 45px;
    font-size: 12px;
  }

  @media (max-width: 767px) {
    margin-left: 43px;
    font-size: 10px;
  }
`;
