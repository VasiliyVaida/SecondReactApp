import React from 'react';
import Nav from '../UI/Nav/Nav';

let Header = (props) => {
  const menuPoints = [
    { title: 'Products', list: ['Product 1', 'Product 2', 'Product 3', 'Product 4'] },
    { title: 'Rooms', list: ['Room 1', 'Room 2'] },
    { title: 'Inspirations', list: [] },
  ];
  return (
    <header className="header">
      <img className="header__logo" src="../img/header/header-logo.png" alt="logo" />
      <Nav data={menuPoints} />
    </header>
  );
};

export default Header;
