import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Checkout from './components/pages/checkout';
import Meal from './components/pages/meal';
import Menu from "./components/pages/Menu"
import NotFound from './components/pages/not-found';
import StateContext from './components/Contexts/StateContext';
import React, { useReducer} from 'react';
import reducer from './components/Reducers/Reducer';
import InitialState from './components/Reducers/InitialState';
import Scripts from '../src/components/Styles/Scripts';
import TopBar from '../src/components/Styles/TopBar';
import Modal from '../src/components/UI/Modal';
import Header from '../src/components/UI/Header';

function App() {
    
    const [state, dispatch] = useReducer(reducer, InitialState);
   
    return(
        <StateContext.Provider value={{ state, dispatch }}>
        
        <BrowserRouter>
        <TopBar />
        <Modal />
        <Header />
        <Scripts />
            <Routes>
                <Route path='/menu' element={<Menu/>}/>
                <Route path='/checkout' element={<Checkout/>}/>
                <Route path='/meal/:index' element={<Meal/>}/>
                <Route path='*' element={<NotFound/>}/>
            </Routes>
        </BrowserRouter>
        </StateContext.Provider>
    
    )
}

export default App;