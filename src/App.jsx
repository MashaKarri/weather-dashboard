import { useState, useEffect } from 'react';

import { GlobalStyle } from './styles/GlobalStyles.js';
import { Page, Main } from './App.styled.js';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from './components/Header/Header.jsx';
import { Hero } from './components/Hero/Hero.jsx';
import { WeatherList } from './components/WeatherList/WeatherList.jsx';
import { News } from './components/News/News.jsx';
import { Footer } from './components/Footer/Footer.jsx';

import { fetchWeather } from './services/weatherApi.js';

function App() {
  const [weatherCards, setWeatherCards] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadSavedCities = async () => {
      const saved = localStorage.getItem('weatherCards');

      if (!saved) return;

      const parsed = JSON.parse(saved);

      try {
        setLoading(true);

        const updated = await Promise.all(
          parsed.map(card => fetchWeather(card.name))
        );

        const cards = updated.map((item, index) => ({
          ...item,
          favorite: parsed[index].favorite || false,
        }));

        setWeatherCards(cards);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    loadSavedCities();
  }, []);

  useEffect(() => {
    localStorage.setItem('weatherCards', JSON.stringify(weatherCards));
  }, [weatherCards]);

  const handleSearch = async city => {
    try {
      setLoading(true);

      const weather = await fetchWeather(city);

      setWeatherCards(prev => {
        const exists = prev.some(card => card.id === weather.id);

        if (exists) return prev;

        return [
          ...prev,
          {
            ...weather,
            favorite: false,
          },
        ];
      });
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  const handleRefresh = async id => {
    try {
      const currentCard = weatherCards.find(card => card.id === id);

      if (!currentCard) return;

      const updated = await fetchWeather(currentCard.name);

      setWeatherCards(prev =>
        prev.map(card =>
          card.id === id
            ? {
                ...updated,
                favorite: card.favorite,
              }
            : card
        )
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleFavorite = id => {
    setWeatherCards(prev =>
      prev.map(card =>
        card.id === id
          ? {
              ...card,
              favorite: !card.favorite,
            }
          : card
      )
    );
  };

  const deleteCard = id => {
    setWeatherCards(prev => prev.filter(card => card.id !== id));
  };

  return (
    <>
      <GlobalStyle />

      <Page>
        <Main>
          <Header />

          <ToastContainer />

          <Hero onSearch={handleSearch} />

          <WeatherList
            weatherCards={weatherCards}
            loading={loading}
            onDelete={deleteCard}
            onRefresh={handleRefresh}
            onFavorite={handleFavorite}
          />

          <News />
        </Main>

        <Footer />
      </Page>
    </>
  );
}

export default App;
