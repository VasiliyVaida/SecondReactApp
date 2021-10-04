import React from 'react';
import './Inspirations.scss';
import bedRoom from '../img/inspirations/inspiration-bedroom.png';
import commonRoom from '../img/inspirations/inspiration-commonRoom.png';
import partRoom from '../img/inspirations/inspiration-partRoom.png';

const Inspirations = () => {
  return (
    <section className="inspirations">
      <div className="inspirations__container">
        <div className="inspirations__card">
          <h2 className="inspirtions__title">50+ Beautiful rooms inspiration</h2>
          <p className="inspirations__descr">Our designer already made a lot of beautiful prototipe of rooms that inspire you</p>
          <button className="inspirations__btn">Explore More</button>
        </div>
        <div className="inspirations_pictures">
          <div className="inspirations__picture-wrapper">
            <img src={bedRoom} alt="Bedroom" />
            <div className="inspirations__picture-card">
              <span className="inspirations-picture__card-product">01 - Bed Room</span>
              <span className="inspirations-picture__card-productName">Inner Peace</span>
            </div>
          </div>
          <div className="inspirations__picture-wrapper">
            <img src={commonRoom} alt="Common Room" />
          </div>
          <div className="inspirations__picture-wrapper">
            <img src={partRoom} alt="Room" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Inspirations;
