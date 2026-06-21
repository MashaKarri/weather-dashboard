import { GlobalStyle } from './styles/GlobalStyles.js';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Header } from 'components/Header/Header.jsx';
import { Hero } from 'components/Hero/Hero.jsx';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <ToastContainer />
      <Hero />
    </>
  );
}

export default App;
