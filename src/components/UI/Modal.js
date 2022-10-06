import React, { useContext } from 'react';
import StateContext from '../Contexts/StateContext';

function Modal() {

    const { state } = useContext(StateContext);

    console.log(state);

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
                                <div class="row align-items-center">
                                    <div class="col">
                                        Nombre
                                    </div>
                                    <div class="col">
                                        Precio
                                    </div>
                                    <div class="col">
                                        Cantidad
                                    </div>
                                    <div class="col">
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
                                            <div className="menu-ingredients">
                                                <button className="btn btn-sm" style={{ background: "#ffb03b" }} type="button" id="button-addon2"><i className="bi bi-dash-circle-fill text-white"></i></button>
                                                <button className="btn btn-sm" style={{ background: "#ffb03b" }} type="button" id="button-addon2"><i className="bi bi-plus-circle-fill text-white"></i></button>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="container">
                            <div className="row">
                                <div className="col-6">
                                    <h1>Total: $ </h1>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );

}

export default Modal;