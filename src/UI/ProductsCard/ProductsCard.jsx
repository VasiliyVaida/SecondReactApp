import React from 'react';
import './ProductsCard.scss';

const ProductsCard = ({ title, descr, newPrice, oldPrice, sale, isNew, img }) => {
  if (sale != null) {
    return (
      <div className="products__card">
        <img src={'/img/products' + img} alt="" className="products__card-img" />
        <div className="products__card-info">
          <h4 className="products__card-title">{title}</h4>
          <span className="product__card-descr">{descr}</span>
          <p className="products__card-price">
            {`Rp ${newPrice}`} <span className="products__card-price_old">{oldPrice != null ? `Rp ${oldPrice}` : ''}</span>
          </p>
        </div>
        <div className="products__card-label products__card-label_sale">{`-${sale}%`}</div>
      </div>
    );
  } else if (isNew) {
    return (
      <div className="products__card">
        <img src={'/img/products' + img} alt="" className="products__card-img" />
        <div className="products__card-info">
          <h4 className="products__card-title">{title}</h4>
          <span className="product__card-descr">{descr}</span>
          <p className="products__card-price">
            {`Rp ${newPrice}`} <span className="products__card-price_old">{oldPrice != null ? `Rp ${oldPrice}` : ''}</span>
          </p>
        </div>
        <div className="products__card-label products__card-label_new">New</div>
      </div>
    );
  } else {
    return (
      <div className="products__card">
        <img src={'/img/products' + img} alt="" className="products__card-img" />
        <div className="products__card-info">
          <h4 className="products__card-title">{title}</h4>
          <span className="product__card-descr">{descr}</span>
          <p className="products__card-price">
            {`Rp ${newPrice}`} <span className="products__card-price_old">{oldPrice != null ? `Rp ${oldPrice}` : ''}</span>
          </p>
        </div>
      </div>
    );
  }
};

export default ProductsCard;
