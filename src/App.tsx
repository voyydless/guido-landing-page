import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Menu from './components/Menu/Menu';
import Location from './components/Location/Location';
import Footer from './components/Footer/Footer';
import './styles/global.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Helmet>
        <title>Guido</title>
      </Helmet>
      <Header />
      <Home />
      <About />
      <Menu />
      <Location />
      <Footer />
    </div>
  );
};

export default App;