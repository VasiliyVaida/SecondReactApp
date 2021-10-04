import React from 'react';
import './FooterMenuItem.scss';

const FooterMenuItem = ({ title, list }) => {
  if (list.length === 5) {
    return (
      <li className="footer__menu-item">
        <ul className="footer-menu__item-points footer-menu__item-points_5">
          <li className="footer-menu__item-title">{title}</li>
          {list.map((item, index) => {
            return (
              <li key={index} className="footer-menu__item-point">
                <a href="#" className="footer-menu__item-pointLink">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    );
  } else if (list.length === 4) {
    return (
      <li className="footer__menu-item">
        <ul className="footer-menu__item-points footer-menu__item-points_4">
          <li className="footer-menu__item-title">{title}</li>
          {list.map((item, index) => {
            return (
              <li key={index} className="footer-menu__item-point">
                <a href="#" className="footer-menu__item-pointLink">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    );
  } else if (list.length === 3) {
    return (
      <li className="footer__menu-item">
        <ul className="footer-menu__item-points footer-menu__item-points_3">
          <li className="footer-menu__item-title">{title}</li>
          {list.map((item, index) => {
            return (
              <li key={index} className="footer-menu__item-point">
                <a href="#" className="footer-menu__item-pointLink">
                  {item}
                </a>
              </li>
            );
          })}
        </ul>
      </li>
    );
  }
};

export default FooterMenuItem;
