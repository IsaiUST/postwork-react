import React, {useEffect, useState} from 'react'

import Meals from '../UI/Meals';
import MainCarousel from '../Styles/MainCarousel';
import Footer from "../Styles/Footer"
import MenuContext from '../Contexts/MenuContext';
import useHttp from '../hooks/use-http';


const App = () => {
 
  const [meals, setMeals] = useState([]);
  const BASE_URL = "https://react-http-a419f-default-rtdb.firebaseio.com/";
  const {request} = useHttp();  

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
        
        <MainCarousel />
        <Meals />
        <Footer /> 
    </MenuContext.Provider>
  );

}

export default App;
