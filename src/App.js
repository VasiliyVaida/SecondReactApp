import React from 'react';
import Header from './components/Header.jsx';
import Promo from './components/Promo.jsx';
import Advantages from './components/Advantages.jsx';
import './styles/index.scss';
import Products from './components/Products.jsx';
import Inspirations from './components/Inspirations.jsx';
import Tips from './components/Tips.jsx';
import Gallery from './components/Gallery.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Promo />
      <Advantages />
      <Products />
      <Inspirations />
      <Tips />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
