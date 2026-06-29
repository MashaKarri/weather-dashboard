import styled from 'styled-components';

export const LoaderOverlay = styled.div`
  position: fixed;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(2px);
  z-index: 999;
`;

export const List = styled.ul`
  width: 100%;
  max-width: 1140px;
  margin: 65px auto 0;
  padding: 0 15px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 90px;
  list-style: none;

  @media (max-width: 1199px) {
    max-width: 768px;
    grid-template-columns: repeat(2, 1fr);
    gap: 40px;
  }

  @media (max-width: 767px) {
    max-width: 320px;
    grid-template-columns: 1fr;
    gap: 25px;
    margin-top: 30px;
    padding: 0;
  }
`;

export const ListItem = styled.li`
  flex-shrink: 0;
`;
