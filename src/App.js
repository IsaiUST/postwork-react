import React, { useReducer, useState } from 'react'
import Footer from './components/Styles/Footer';
import Header from './components/UI/Header';
import Meals from './components/UI/Meals';
import MainCarousel from './components/Styles/MainCarousel';
import Scripts from './components/Styles/Scripts';
import TopBar from './components/Styles/TopBar';
import StateContext from './components/Contexts/StateContext';
import MenuContext from './components/Contexts/MenuContext';
import reducer from './components/Reducers/Reducer';
import InitialState from './components/Reducers/InitialState';
import meals from '../src/menu.json';
import Modal from './components/UI/Modal';

const App = () => {

  const [cart] = useState([]);
  const [state, dispatch] = useReducer(reducer, InitialState);

  return (
    <MenuContext.Provider value={meals}>
      <StateContext.Provider value={{ state, dispatch }}>
        <TopBar />
        <Header cart={cart} />
        <MainCarousel />
        <Modal />
        <Meals />
        <Footer />
        <Scripts />
      </StateContext.Provider>
    </ MenuContext.Provider>
  );
}

export default App;
