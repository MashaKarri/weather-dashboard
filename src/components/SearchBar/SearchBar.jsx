import { IoSearch } from 'react-icons/io5';

import {
  SearchWrapper,
  SearchInput,
  SearchButton,
} from './SearchBar.styled.js';

export const SearchBar = () => {
  return (
    <SearchWrapper>
      <SearchInput type="text" placeholder="Search location..." />

      <SearchButton type="button">
        <IoSearch />
      </SearchButton>
    </SearchWrapper>
  );
};
