import React, { useState } from 'react'
import Footer from './components/UI/Footer';
import Header from './components/UI/Header';
import Main from './components/UI/Main';
import MainCarousel from './components/UI/MainCarousel';
import Scripts from './components/UI/Scripts';
import TopBar from './components/UI/TopBar';

const App = () => {

  const meals = [
    {
      id: 1,
      name: 'Pizza',
      description: 'Italian pizza',
      price: 10
    },
    {
      id: 2,
      name: 'Hamburger',
      description: 'American hamburger',
      price: 15
    },
    {
      id: 3,
      name: 'Hot dog',
      description: 'American hot dog',
      price: 8
    }
  ];

  const addMeal = (meal) => {
    setCart((prevCart) => [...prevCart, meal]);
  };

  const [cart, setCart] = useState([]);



  return (
    <>
      <TopBar />
      <Header cart={cart}/>
      <MainCarousel />
      <Main meals={meals} onAddMeal={addMeal} />
      <Footer />
      <Scripts />
    </>
  );
}

export default App
