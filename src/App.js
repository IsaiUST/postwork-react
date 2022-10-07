import React, { useReducer, useEffect, useState} from 'react'
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
import Modal from './components/UI/Modal';
import useHttp from './components/hooks/use-http';

const App = () => {
  const BASE_URL = "https://react-http-a419f-default-rtdb.firebaseio.com/";
  // const [cart] = useState([]);
  const [state, dispatch] = useReducer(reducer, InitialState);

  const {request} = useHttp();  

  const [meals, setMeals] = useState([]);

  useEffect(() => {
    const fetchDish = async () => {
      const url = `${BASE_URL}/dish.json`;
      const data = await request({url})

      setMeals( data || []);
    };
    fetchDish();
  }, [request])


  return (
    <MenuContext.Provider value={meals}>
      <StateContext.Provider value={{ state, dispatch }}>
        <TopBar />
        <Header />
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
