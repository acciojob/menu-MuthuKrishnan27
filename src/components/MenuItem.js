import React from 'react';

const MenuItem = ({item}) => {
  const { title, price, img, desc } = item;
 
  return (
    <div className="menu-item">
      <img src={img} alt={title} />
      <div className="item-info">
        <header>
          <h4>{title}</h4>
          <h4 className="price">${price}</h4>
        </header>
        <p>{desc}</p>
      </div>
    </div>
  );
};

export default MenuItem;
