import React from 'react';
import NavItem from '../NavItem/NavItem';
import '../Nav/Nav.scss';

const Nav = ({ data }) => {
  return (
    <nav className="header-nav">
      {data.map((item, index) => {
        return <NavItem key={index} title={item.title} itemList={item.list} />;
      })}
    </nav>
  );
};

export default Nav;
