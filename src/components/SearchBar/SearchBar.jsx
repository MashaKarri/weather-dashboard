import { useState, useEffect } from 'react';

import { fetchCitySuggestions } from '../../services/weatherApi.js';

import { IoSearch } from 'react-icons/io5';

import {
  SearchWrapper,
  SearchInput,
  SearchButton,
  SuggestionsList,
  SuggestionItem,
  DropdownContainer,
} from './SearchBar.styled.js';

export const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    if (!city.trim()) {
      setSuggestions([]);
      return;
    }

    const delayDebounceFn = setTimeout(async () => {
      const apiResult = await fetchCitySuggestions(city);

      if (apiResult && Array.isArray(apiResult)) {
        const strictFiltered = apiResult.filter(item =>
          item.name.toLowerCase().startsWith(city.toLowerCase())
        );

        setSuggestions(strictFiltered);
      }
    }, 100);

    return () => clearTimeout(delayDebounceFn);
  }, [city]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!city.trim()) return;

    onSearch(city);
    setCity('');
    setSuggestions([]);
  };

  const handleSuggestionClick = suggestion => {
    const searchString = `${suggestion.name}, ${suggestion.country}`;
    onSearch(searchString);
    setCity('');
    setSuggestions([]);
  };

  return (
    <DropdownContainer>
      <SearchWrapper as="form" onSubmit={handleSubmit}>
        <SearchInput
          type="text"
          placeholder="Search location..."
          value={city}
          onChange={e => setCity(e.target.value)}
        />

        <SearchButton type="submit">
          <IoSearch />
        </SearchButton>
      </SearchWrapper>

      {suggestions.length > 0 && (
        <SuggestionsList>
          {suggestions.map((item, index) => (
            <SuggestionItem
              key={`${item.lat}-${item.lon}-${index}`}
              onClick={() => handleSuggestionClick(item)}
            >
              {item.name}
              {item.state ? `, ${item.state}` : ''} ({item.country})
            </SuggestionItem>
          ))}
        </SuggestionsList>
      )}
    </DropdownContainer>
  );
};
