import React from "react";
import Meals from "../Meals/Meals";

const Menu = ({meals, onAddMeal}) => {

  const addMealToCart = (meal) => {
    onAddMeal(meal);
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <div className="section-title">
          <h2>
            Check our tasty <span>Menu</span>
          </h2>
        </div>

        <Meals meals={meals} onAddMealToCart={addMealToCart} />
        
      </div>
    </section>
  );
};

export default Menu;
