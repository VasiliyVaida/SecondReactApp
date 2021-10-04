import React from 'react';
import './Header.scss';
import Nav from '../UI/Nav/Nav';
import logo from '../img/header/header-logo.png';
import SearchBar from '../UI/Searchbar/Searchbar';
import IconsBar from '../UI/IconsBar/IconsBar';
let Header = (props) => {
  const menuPoints = [
    { title: 'Products', list: ['Product 1', 'Product 2', 'Product 3', 'Product 4'] },
    { title: 'Rooms', list: ['Room 1', 'Room 2'] },
    { title: 'Inspirations', list: [] },
  ];
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__navElems-container">
          <img className="header__logo" src={logo} alt="logo" />
          <Nav data={menuPoints} />
          <SearchBar />
        </div>
        <div className="header__userElems-container">
          <IconsBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
