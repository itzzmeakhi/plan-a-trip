import React from 'react';

import PromoBanner from './components/PromoBanner/PromoBanner';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Weather from './components/Weather/Weather';
import Promo from './components/Promo/Promo';

import './App.scss';

const App = () => {
  return (
    <div className="app">
        <PromoBanner />
        <Header />
        <Main />
        <Weather />
        <Promo />
        <Quote />
    </div>
  );
}

export default App;
