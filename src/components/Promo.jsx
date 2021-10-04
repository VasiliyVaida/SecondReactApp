import React from 'react';
import './Promo.scss';
import interiorLeft from '../img/promo/interior-left.png';
import interiorCenter from '../img/promo/interior-center.png';
import interiorRight from '../img/promo/interior-right.png';

const Promo = () => {
  return (
    <section className="promo">
      <div className="promo-interiors">
        <img src={interiorLeft} alt="interior" />
        <img src={interiorCenter} alt="interior" />
        <img src={interiorRight} alt="interior" />
      </div>
      <div className="promo__main-card">
        <div className="promo__mainCard-wrapper">
          <h1 className="promo__mainCard-title">High-Quality Furniture Just For You</h1>
          <p className="promo-mainCard-text">Our furniture is made from selected and best quality materials that are suitable for your dream home</p>
          <button className="promo__mainCard-btn">Shop Now</button>
        </div>
      </div>
    </section>
  );
};

export default Promo;
