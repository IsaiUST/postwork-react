import React from 'react'
import Footer from './components/Footer';
import Header from './components/Header';
import Main from './components/Main';
import MainCarousel from './components/MainCarousel';
import Scripts from './components/Scripts';
import TopBar from './components/TopBar';

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
  ]

  return (
    <>
      <TopBar />
      <Header />
      <MainCarousel />
      <Main meals={meals} />
      <Footer />
      <Scripts />
    </>
  );
}

export default App
