import React, { useContext, useRef } from 'react';
import MenuContext from '../Contexts/MenuContext';
import StateContext from '../Contexts/StateContext';
import actions from '../Reducers/Actios';
import {Link} from "react-router-dom";
import swal from 'sweetalert';

function Meals() {

  const inputs = useRef([]);
  const meals = useContext(MenuContext);
  const { dispatch } = useContext(StateContext);

  function addMeal(index) {

    const meal = meals[index];
    const input = inputs.current[index];    

    if (input.value > 0) {
      dispatch({
        type: actions.ADD_MEAL,
        payload: { meal, quantity: parseInt(input.value) },
      });

      input.value = "";
    } else {

      swal("Oops!", "Cannot be negative values", "error");
      input.value = "";

    }
  }


  return (
    <main id='main'>
      <section id="menu" className="menu">
        <div className="container">
          <div className="section-title">
            <h2>
              Check our tasty <span>Menu</span>
            </h2>
          </div>
          <div className="row menu-container">
            <div className="row">
              {meals.map((item, index) => (
                <div className="col-lg-6 menu-item filter-starters">
                  <div className="menu-content">
                  <Link to= {`/meal/${item.id}`}>
                    <p>{item.name}</p>
                  </Link>
                    {/* Cantidad y boton de agregar */}
                    <div className="input-group mb-3 d-flex justify-content-end" style={{ zIndex: 3 }}>
                      <input type="number" min="1" ref={(el) => (inputs.current[index] = el)} className="form-control" style={{ width: "150px", flex: "none" }} placeholder="Cantidad" aria-label="Cantidad" aria-describedby="button-addon2" />
                      <button className="btn btn-sm" onClick={() => addMeal(index)} style={{ background: "#ffb03b" }} type="button" id="button-addon2"><i className="bi bi-plus-circle-fill text-white"></i></button>
                    </div>
                  </div>
                  <div className="menu-ingredients">{item.description}</div>
                  <span>${item.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Meals