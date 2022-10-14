import {useParams} from "react-router-dom";
import useHttp from "../hooks/use-http";
import React, {useEffect,useContext} from 'react'
import StateContext from "../Contexts/StateContext";
import actions from "../Reducers/Actios";
import MainCarousel from '../Styles/MainCarousel';
import Footer from "../Styles/Footer"
import MenuContext from '../Contexts/MenuContext';

function Meal(){
   
    const {index} = useParams();
    const {request} = useHttp();
    const {dispatch, state} = useContext(StateContext);
    const BASE_URL = "https://react-http-a419f-default-rtdb.firebaseio.com/";

  useEffect(() => {
    const fetchDish = async () => {
        const url = `${BASE_URL}/dish.json`;
        const data = await request({url});
        const found = data.find(element => element.id == index);
        dispatch({
            type: actions.SET_MEAL,
            payload: found
        });
    };
    fetchDish();
}, [index, request, dispatch])

    return(
        <MenuContext.Provider>

    <div className="container-fluid">
        <MainCarousel />
    <div className="card">
        <div className="card-body">
         <h1 className="text-center">{state.meal?.name}</h1>
         <p className="text-center">{state.meal?.description}</p>
         <p className="text-center">${state.meal?.price}</p>
         </div>
    </div>
    <Footer /> 
    </div>
        </MenuContext.Provider>
    )
}

export default Meal;