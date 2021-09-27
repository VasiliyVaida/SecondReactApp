import React from 'react';

const NavItem = (title, itemList) => {
  function dropBtn() {}
  if (title === 'Products') {
    return (
      <div className="header-nav__nav-item">
        <button onClick="dropBtn()" className="header-nav__item-dropbtn">
          {title}
        </button>
        <div className="header-nav__dropbtn-content">
          {itemList.map((item, index) => {
            return (
              <a key={index} href="#" className="header-nav__dropbtn-item">
                {item}
              </a>
            );
          })}
        </div>
      </div>
    );
  }
};

export default NavItem;
