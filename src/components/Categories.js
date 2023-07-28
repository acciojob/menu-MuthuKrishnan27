import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button id='filter-btn-{index}' key={index} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
