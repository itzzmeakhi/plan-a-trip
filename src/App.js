import React from 'react';

import PromoBanner from './components/PromoBanner/PromoBanner';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Weather from './components/Weather/Weather';
import Destinations from './components/Destinations/Destinations';
import Promo from './components/Promo/Promo';
import Quote from './components/Quote/Quote';
import Footer from './components/Footer/Footer';

import './App.scss';

const App = () => {
  return (
    <div className="app">
        <PromoBanner />
        <Header />
        <Main />
        <Weather />
        <Destinations />
        <Promo />
        <Quote />
        <Footer />
    </div>
  );
}

export default App;
