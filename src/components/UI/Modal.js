import React, { useContext } from 'react';
import StateContext from '../Contexts/StateContext';
import actions from '../Reducers/Actios';
import {Link} from 'react-router-dom';
import swal from 'sweetalert';

function Modal() {

    const { state, dispatch } = useContext(StateContext);

    const succes = () => {
        swal("Tidy!", "Your order was ordered", "success");
    }

    const celarCart = () => {
        dispatch({
            type: actions.CLEAR_CART
        });
    }

    const oneItem = (id, all = false) => {
        console.log(id, all);
        if (all) {
            dispatch({
                type: actions.REMOVE_ALL_FROM_CART,
                payload: id 
            });
        } else {
            dispatch({
                type: actions.REMOVE_ONE_FROM_CART,
                payload: id
            });
        }
    }

    function increment(id) {
        dispatch({
            type: actions.UPDATE_MEAL,
            payload: { id, quantity: 1 },
        });
    }

    function decrement(id) {
        dispatch({
            type: actions.UPDATE_MEAL,
            payload: { id, quantity: -1 },
        });
    }
    
    const total = state.cart.map((cartItem) => (
             parseInt(cartItem.meal.price) * parseInt(cartItem.quantity)
        ), 0);
     
    let newtotal = total.reduce((a, b) => a + b, 0);

    return (
        <>
            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h1 className="modal-title fs-5" id="exampleModalLabel">Modal title</h1>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container text-center">
                                <div className="row align-items-center">
                                    <div className="col">
                                        Nombre
                                    </div>
                                    <div className="col">
                                        Precio
                                    </div>
                                    <div className="col">
                                        Cantidad
                                    </div>
                                    <div className="col">
                                        SubTotal
                                    </div>
                                    <div className="col">
                                        Acciones
                                    </div>
                                </div>
                                {/* {cartItem.meal.name} */}
                                {state.cart.map((cartItem) => (
                                    <div className="row align-item-start">
                                        <div className="col">
                                            <a href="/#">{cartItem.meal.name}</a>
                                        </div>
                                        <div className="col">
                                            <span>${cartItem.meal.price}</span>
                                        </div>
                                        <div className="col">
                                            {/* <div className="menu-ingredients">{meal.count}</div> */}
                                            {/* <input type="number" min="1" value={meal.count} onChange={handleChange} className="form-control" style={{ width: "150px", flex: "none" }} placeholder="Cantidad" aria-label="Cantidad" aria-describedby="button-addon2" />                             */}
                                            <span>x{cartItem.quantity}</span>
                                        </div>
                                        <div className="col">
                                            <span>$ {parseInt(cartItem.meal.price) * parseInt(cartItem.quantity)}</span>
                                        </div>
                                        <div className="col">
                                            <div className="menu-ingredients">
                                                <button className="btn btn-sm" onClick={() => decrement(cartItem.meal.id)} style={{ background: "#ffb03b" }} type="button" id="button-addon2"><i className="bi bi-dash-circle-fill text-white"></i></button>
                                                {/* <button className="btn btn-sm" onClick={() => oneItem(cartItem.meal.id, true)} style={{ background: "#ffb03b" }} type="button" id="button-addon2"><i className="bi bi-dash-circle-fill text-white"></i>ALL</button> */}
                                                <button className="btn btn-sm" onClick={() => increment(cartItem.meal.id)} style={{ background: "#ffb03b" }} type="button" id="button-addon2"><i className="bi bi-plus-circle-fill text-white"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h1>Total: $ { newtotal }</h1>
                                </div>
                                <div className="col-6">
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-warning" onClick={ celarCart }>Clear</button>
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <Link to= "/checkout">
                            <button type="button" onClick={ succes }className="btn btn-primary" data-bs-dismiss="modal">Ordenar</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Modal;