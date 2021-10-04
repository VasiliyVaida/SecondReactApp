import React from 'react';
import './Tips.scss';
import TipsCard from '../UI/TipsCard/TipsCard';

const Tips = () => {
  const tipsTricks = [
    { title: 'How to create a living room to love', date: '20 jan 2020', img: '/HowToCreate.png' },
    { title: 'Solution for clean look working space', date: '10 jan 2020', img: '/Solution.png' },
    { title: 'Make your cooking activity more fun with good setup', date: '20 jan 2020', img: '/MakeYourCooking.png' },
  ];
  return (
    <section className="tips">
      <div className="tips__container">
        <h2 className="tips__title">Tips & Tricks</h2>
        <div className="tip__cards">
          {tipsTricks.map((item, index) => {
            return <TipsCard key={index} title={item.title} date={item.date} img={item.img} />;
          })}
        </div>
      </div>
    </section>
  );
};

export default Tips;
