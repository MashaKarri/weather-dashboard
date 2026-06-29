import styled from 'styled-components';

export const Section = styled.section`
  max-width: 1140px;
  margin: 0 auto;
  padding: 80px 16px 18px;

  @media (max-width: 1199px) {
    max-width: 768px;
    padding-top: 70px;
  }

  @media (max-width: 767px) {
    max-width: 320px;
    padding: 60px 0 18px;
  }
`;

export const Title = styled.h2`
  margin: 0 0 40px;
  font-family: 'Montserrat', sans-serif;
  font-size: 20px;
  font-weight: 500;

  @media (max-width: 767px) {
    margin-bottom: 25px;
    text-align: center;
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 1199px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 24px;
  }

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

export const Card = styled.a`
  text-decoration: none;
  color: inherit;
`;

export const Image = styled.div`
  width: 100%;
  height: 208px;
  overflow: hidden;
  border-radius: 10px;
  margin-bottom: 20px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  @media (max-width: 767px) {
    height: 180px;
    margin-bottom: 15px;
  }
`;

export const Text = styled.p`
  margin: 0;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  line-height: 1.3;
  font-weight: 500;

  @media (max-width: 767px) {
    font-size: 15px;
  }
`;

export const Button = styled.button`
  display: block;
  margin: 30px auto 0;
  width: 138px;
  height: 40px;
  border: none;
  border-radius: 10px;
  background: #ffb36c;
  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;

  @media (max-width: 767px) {
    width: 100%;
    max-width: 320px;
  }
`;
