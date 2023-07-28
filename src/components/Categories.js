import React from 'react';

const Categories = ({ categories, filterItems }) => {
  return (
    <div className="categories">
      {categories.map((category, index) => (
        <button  id={`filter-btn-${index}`} key={index} onClick={() => filterItems(category)}>
          {category}
        </button>
      ))}

      {/* <button>All</button>
      <button id='filter-b'>Breakfast</button>
      <button>Lunch</button>
      <button>Shakes</button> */}
    </div>
  );
};

export default Categories;
