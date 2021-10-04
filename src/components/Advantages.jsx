import React from 'react';
import AdvantagesList from '../UI/AdvantagesList/AdvantagesList';
import './Advantages.scss';

const Advantages = () => {
  const decriptionPoints = [
    { title: 'Hign Quality', text: 'crafted from top materials', iconName: 'cup' },
    { title: 'Warrany Protection', text: 'Over 2 years', iconName: 'protection' },
    { title: 'Free Shipping', text: 'Order over 150 $', iconName: 'shipping' },
    { title: '24 / 7 Support', text: 'Dedicated support', iconName: 'support' },
  ];
  return (
    <section className="advantages">
      <div className="advantages-container">
        <AdvantagesList data={decriptionPoints} />
      </div>
    </section>
  );
};

export default Advantages;
