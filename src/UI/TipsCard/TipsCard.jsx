import React from 'react';
import './TipsCard.scss';

const TipsCard = ({ title, date, img }) => {
  return (
    <div className="tips__card">
      <div className="tips-card__img-wrapper">
        <img src={'/img/tips&tricks' + img} alt="card-illustration" />
      </div>
      <div className="tips-card__text-wrapper">
        <h6 className="tips__card-title">{title}</h6>
        <span className="tips__card-date">{date}</span>
      </div>
    </div>
  );
};

export default TipsCard;
