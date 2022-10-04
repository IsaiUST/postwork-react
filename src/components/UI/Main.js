import React from 'react'
import Menu from './Menu'

const Main = ({meals, onAddMeal}) => {

  const addMeal = (qty) => {
    onAddMeal(qty);
  };

  return (
    <main id='main'>
      <Menu meals={meals} onAddMeal={addMeal} />
    </main>
  )
}

export default Main