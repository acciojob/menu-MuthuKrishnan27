import React, { useState } from 'react';
import MenuItem from './MenuItem';
import Categories from './Categories';
import data from './data'; // Import the pre-defined items data
{/* <link rel="stylesheet" href="./Menu.css" /> */}
import "./Menu.css"


const Menu = () => {
  const [menuItems, setMenuItems] = useState(data);
  const [categories, setCategories] = useState([
    'all',
    ...new Set(data.map((item) => item.category)),
  ]);

  const filterItems = (category) => {
    if (category === 'all') {
      setMenuItems(data);
      return;
    }

    const filteredItems = data.filter((item) => item.category === category);
    setMenuItems(filteredItems);
  };

  return (
    <div>
      <h1>Menu</h1>
      <Categories categories={categories} filterItems={filterItems} />
      <div id="main">
        {menuItems.map((item) => (
          <MenuItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Menu;
