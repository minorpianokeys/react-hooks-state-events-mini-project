import React, { useState } from "react";

function CategoryFilter({ categories, onCategoryFilter }) {
  const [isClicked, setIsClicked] = useState(null)

  function handleClick(category) {
    setIsClicked(category === isClicked ? null : category)
    onCategoryFilter(category);
  }

  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categories.map(category => (
        <button key={category} onClick={() => handleClick(category)} className={category === isClicked ? "selected" : ""}>{category}</button>
      ))}
    </div>
  );
}

export default CategoryFilter;