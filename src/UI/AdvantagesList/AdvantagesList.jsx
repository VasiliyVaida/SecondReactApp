import React from 'react';
import './AdvantagesList.scss';
import AdvantagesItem from '../AdvantagesItem/AdvantagesItem';

const AdvantagesList = ({ data }) => {
  return (
    <ul className="advantages__list">
      {data.map((item, index) => {
        return <AdvantagesItem key={index} item={item} />;
      })}
    </ul>
  );
};

export default AdvantagesList;
