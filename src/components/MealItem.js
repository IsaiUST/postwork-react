import React from "react";

const MealItem = ({ meal }) => {
  return (
    <div className="col-lg-6 menu-item filter-starters">
      <div className="menu-content">
        <a href="/#">{meal.name}</a>
        <span>${meal.price}</span>
      </div>
      <div className="menu-ingredients">{meal.description}</div>
    </div>
  );
};

export default MealItem;
