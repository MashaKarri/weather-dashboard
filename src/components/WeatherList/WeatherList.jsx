import { WeatherCard } from '../WeatherCard/WeatherCard';

import { Oval } from 'react-loader-spinner';

import { List, ListItem, LoaderOverlay } from './WeatherList.styled.js';

export const WeatherList = ({ weatherCards, loading, onDelete }) => {
  return (
    <>
      {loading && (
        <LoaderOverlay>
          <Oval
            height={60}
            width={60}
            color="#FFB36C"
            secondaryColor="#E8E8E8"
            strokeWidth={2}
            strokeWidthSecondary={2}
          />
        </LoaderOverlay>
      )}

      <List>
        {weatherCards.map(card => (
          <ListItem key={card.id}>
            <WeatherCard weather={card} onDelete={onDelete} />
          </ListItem>
        ))}
      </List>
    </>
  );
};
