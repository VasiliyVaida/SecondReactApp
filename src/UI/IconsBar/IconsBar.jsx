import React from 'react';
import './IconsBar.scss';
import heart from '../../img/header/header-heart.png';
import basket from '../../img/header/header-basket.svg';
import userAvatar from '../../img/header/header__user-avatar.png';

const IconsBar = () => {
  return (
    <div className="header__icons-btns">
      <button className="header__icons-btn header__icons-btn_heart">
        <img src={heart} alt="heart" />
      </button>
      <button className="header__icons-btn header__icons-btn_basket">
        <img src={basket} alt="basket" />
      </button>
      <button className="header__icons-btn header__icons-btn_user">
        <img src={userAvatar} alt="user" />
      </button>
    </div>
  );
};

export default IconsBar;
