import React from 'react';
import './AdvantagesItem.scss';
import cup from '../../img/advantages/item-trophy.png';
import protection from '../../img/advantages/item-checkMark.png';
import shipping from '../../img/advantages/item-shipping.png';
import support from '../../img/advantages/item-support.png';

const AdvantagesItem = ({ item }) => {
  if (item.iconName === 'cup') {
    return (
      <li className="advatages-list__item">
        <div className="list-item__img-wrapper">
          <img src={cup} alt={item.iconName} />
        </div>
        <div className="list-item__descr-wrapper">
          <h5 className="list-item__descr-subtitle">{item.title}</h5>
          <span className="list-item__descr-text">{item.text}</span>
        </div>
      </li>
    );
  } else if (item.iconName === 'protection') {
    return (
      <li className="advatages-list__item">
        <div className="list-item__img-wrapper">
          <img src={protection} alt={item.iconName} />
        </div>
        <div className="list-item__descr-wrapper">
          <h5 className="list-item__descr-subtitle">{item.title}</h5>
          <span className="list-item__descr-text">{item.text}</span>
        </div>
      </li>
    );
  } else if (item.iconName === 'shipping') {
    return (
      <li className="advatages-list__item">
        <div className="list-item__img-wrapper">
          <img src={shipping} alt={item.iconName} />
        </div>
        <div className="list-item__descr-wrapper">
          <h5 className="list-item__descr-subtitle">{item.title}</h5>
          <span className="list-item__descr-text">{item.text}</span>
        </div>
      </li>
    );
  } else if (item.iconName === 'support') {
    return (
      <li className="advatages-list__item">
        <div className="list-item__img-wrapper">
          <img src={support} alt={item.iconName} />
        </div>
        <div className="list-item__descr-wrapper">
          <h5 className="list-item__descr-subtitle">{item.title}</h5>
          <span className="list-item__descr-text">{item.text}</span>
        </div>
      </li>
    );
  }
};
export default AdvantagesItem;
