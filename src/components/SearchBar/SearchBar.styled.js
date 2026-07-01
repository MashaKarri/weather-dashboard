import styled from 'styled-components';

export const SearchWrapper = styled.div`
  width: 625px;
  height: 42px;
  display: flex;
  overflow: hidden;
  border-radius: 10px;
  background-color: #d9d9d9;
  margin: 145px auto 0;

  @media (max-width: 1199px) {
    width: 402px;
    height: 27px;
    margin-top: 64px;
  }

  @media (max-width: 767px) {
    width: 173px;
    height: 15px;
    border-radius: 5px;
    margin-top: 48px;
  }
`;

export const SearchInput = styled.input`
  flex: 1;
  border: none;
  outline: none;
  background-color: transparent;
  padding: 12px 29px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #878787;

  &::placeholder {
    color: #878787;
  }

  @media (max-width: 1199px) {
    padding: 8px 19px;
    font-size: 10px;
  }

  @media (max-width: 767px) {
    padding: 4px 10px;
    font-size: 6px;
  }
`;

export const SearchButton = styled.button`
  width: 45px;
  border-left: 2px solid #000;
  background-color: #ffb36c;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  padding: 0;

  svg {
    font-size: 25px;
    color: #000;
    flex-shrink: 0;
  }

  @media (max-width: 1199px) {
    width: 28px;

    svg {
      font-size: 16px;
    }
  }

  @media (max-width: 767px) {
    width: 16px;

    svg {
      font-size: 9px;
    }
  }
`;

export const DropdownContainer = styled.div`
  position: relative;
  width: 625px;
  margin: 145px auto 0;

  @media (max-width: 1199px) {
    width: 402px;
    margin-top: 64px;
  }

  @media (max-width: 767px) {
    width: 173px;
    margin-top: 48px;
  }
`;

export const SuggestionsList = styled.ul`
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  background-color: #fff;
  border: 1px solid #d9d9d9;
  border-radius: 10px;
  margin-top: 5px;
  padding: 0;
  list-style: none;
  max-height: 200px;
  overflow-y: auto;
  z-index: 10;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;

export const SuggestionItem = styled.li`
  padding: 12px 29px;
  font-family: 'Montserrat', sans-serif;
  font-size: 14px;
  font-weight: 500;
  color: #464646ff;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }

  @media (max-width: 1199px) {
    padding: 8px 19px;
    font-size: 10px;
  }

  @media (max-width: 767px) {
    padding: 4px 10px;
    font-size: 8px;
  }
`;
