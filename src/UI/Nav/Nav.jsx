import React from 'react';
import NavItem from '../NavItem/NavItem';

const Nav = (data) => {
  return (
    <nav className="header-nav">
      <NavItem title={data[0].title} itemList={data[0].list} />
      <NavItem title={data[1].title} itemList={data[1].list} />
      <NavItem title={data[2].title} itemList={data[2].list} />
    </nav>
  );
};

export default Nav;
