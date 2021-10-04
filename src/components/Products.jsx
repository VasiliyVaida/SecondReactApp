import React from 'react';
import './Products.scss';
import ProductsCard from '../UI/ProductsCard/ProductsCard';

const Products = () => {
  const products = [
    { title: 'Syltherine', description: 'Stylish cafe chair', newPrice: 2500000, oldPrice: 3500000, sale: 30, isNew: false, img: '/Syltherine.png' },
    { title: 'Leviosa', description: 'Stylish cafe chair', newPrice: 2500000, oldPrice: null, sale: null, isNew: false, img: '/Leviosa.png' },
    { title: 'Lolito', description: 'Luxury big sofa', newPrice: 7000000, oldPrice: 14000000, sale: 50, isNew: false, img: '/Lolito.png' },
    { title: 'Respira', description: 'Minimalist fan', newPrice: 500000, oldPrice: null, sale: null, isNew: true, img: '/Respira.png' },
    { title: 'Grifo', description: 'Night lamp', newPrice: 1500000, oldPrice: null, sale: null, isNew: false, img: '/Grifo.png' },
    { title: 'Muggo', description: 'Small mug', newPrice: 150000, oldPrice: null, sale: null, isNew: true, img: '/Muggo.png' },
    { title: 'Pingky', description: 'Cute bed set', newPrice: 7000000, oldPrice: 14000000, sale: 50, isNew: false, img: '/Pingky.png' },
    { title: 'Potty', description: 'Minimalist flower pot', newPrice: 500000, oldPrice: null, sale: null, isNew: true, img: '/Potty.png' },
  ];

  return (
    <section className="products">
      <div className="products__container">
        <h2 className="products__title">Our Products</h2>
        <div className="products__cards">
          {products.map((item, index) => {
            return <ProductsCard key={index} title={item.title} descr={item.description} newPrice={item.newPrice} oldPrice={item.oldPrice} sale={item.sale} isNew={item.isNew} img={item.img} />;
          })}
        </div>
        <button className="products__btn">Show More</button>
      </div>
    </section>
  );
};

export default Products;
