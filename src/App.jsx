import { GlobalStyle } from './styles/GlobalStyles.js';

import { Header } from 'components/Header/Header.jsx';
import { Hero } from 'components/Hero/Hero.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
    </>
  );
}

export default App;
