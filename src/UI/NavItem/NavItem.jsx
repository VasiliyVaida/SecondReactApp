import React, { useEffect, useState } from 'react';
import '../NavItem/NavItem.scss';

const NavItem = ({ title, itemList }) => {
  const [condition, setCondition] = useState(1);
  useEffect(() => {
    const btnsArr = document.querySelectorAll('#hidden-content');
    if (condition % 2) {
    }
  });

  if (itemList.length !== 0) {
    return (
      <div className="header-nav__nav-item header-nav__nav-item-dropdown">
        <button onClick={() => setCondition(condition + 1)} className="header-nav__item-dropbtn">
          {title}
        </button>
        <div id="hidden-content" className="header-nav__dropbtn-content">
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
  } else {
    return (
      <div className="header-nav__nav-item ">
        <a href="#" className="header-nav__item-link">
          {title}
        </a>
      </div>
    );
  }
};

export default NavItem;
