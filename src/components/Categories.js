import React from 'react';

const Categories = ({ filterItems }) => {

    function callback(category){
       filterItems(category);
    }

  return (
    <div className="categories">
      <button onClick={()=>callback('all')}>All</button>
      <button id='filter-btn-1' onClick={()=>callback('breakfast')}>Breakfast</button>
      <button id='filter-btn-2' onClick={()=>callback('lunch')}>Lunch</button>
      <button id='filter-btn-3' onClick={()=>callback('shakes')}>Shakes</button>
    </div>
  );
};

export default Categories;
