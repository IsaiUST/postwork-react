import React from 'react'
import MealItem from './MealItem'

const Meals = ({meals, onAddMealToCart}) => {

  const handleAddMealToCart = (meal) => {
    onAddMealToCart(meal);
  };

  return (
    <div className="row menu-container">
        <div className="row">          
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} onHandleAddMealToCart={handleAddMealToCart} />
          ))}
        </div>
    </div>
  )
}

export default Meals