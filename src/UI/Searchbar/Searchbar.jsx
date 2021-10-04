import React from 'react';
import './searchbar.scss';
import loupe from '../../img/header/header__searcj-loupe.png';

const SearchBar = () => {
  return (
    <form className="header__searchbar">
      <input type="text" className="header__searchbar-field" placeholder="Search for minimalist chair" />
      <button className="header__searchbar-btn">
        <img src={loupe} alt="search lupe" />
      </button>
    </form>
  );
};

export default SearchBar;
