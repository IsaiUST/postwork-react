import React from 'react'
import MealItem from './MealItem'

const Meals = ({meals}) => {
  return (
    <div className="row menu-container">
        <div className="row">
          {meals.map((meal) => (
            <MealItem key={meal.id} meal={meal} />
          ))}
        </div>
    </div>
  )
}

export default Meals