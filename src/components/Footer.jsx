import React from 'react';
import FooterMenuItem from '../UI/FooterMenuItem/FooterMenuItem';
import './Footer.scss';
import paperPlane from '../img/footer/paperPlane.png';

const Footer = () => {
  const footerMenu = ['Products', 'Rooms', 'Inspirations', 'About Us', 'Terms & Policy'];
  const footerAccount = ['My Account', 'Checkout', 'My Cart', 'My catalog'];
  const footerConnect = ['Facebook', 'Instagram', 'Twitter'];
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__contacts">
          <h3 className="footer-contacts__title">Funiro.</h3>
          <p className="footer-contacts__point footer-contacts__descr">Worldwide furniture store since 2020. We sell over 1000+ branded products on our website</p>
          <p className="footer-contacts__point footer-contacts__location">Sawojajar Malang, Indonesia</p>
          <p className="footer-contacts__point footer-contacts__phoneNum">+6289 456 3455</p>
          <p className="footer-contacts__point footer-contacts__website">www.funiro.com</p>
        </div>
        <ul className="footer__menu">
          <FooterMenuItem title={'Menu'} list={footerMenu} />
          <FooterMenuItem title={'Account'} list={footerAccount} />
          <FooterMenuItem title={'Stay Connected'} list={footerConnect} />
        </ul>
        <div className="footer__getMail">
          <h3 className="footer__getMail-title">Stay Updated</h3>
          <div className="footer-getMail__input-conatiner">
            <input type="text" className="footer-getMail__input" placeholder="Enter your email" />
            <button className="footer-getMail__input-btn">
              <img src={paperPlane} alt="paper plane" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
