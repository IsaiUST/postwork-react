import React, { useContext } from 'react';
import StateContext from '../Contexts/StateContext';

function Header () {
    // console.log(cart.reduce((a, b) => parseInt(a) + parseInt(b.count), 0));

    const { state } = useContext(StateContext);
    const total = state.cart.reduce((sum, item) => sum + item.quantity, 0);

    return (
        <>
            <header id="header" className="fixed-top d-flex align-items-center header-transparent">
                <div className="container-fluid container-xl d-flex align-items-center justify-content-between">

                    <div className="logo me-auto">
                        <h1><a href="index.html">Delicious</a></h1>

                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" className="img-fluid"/></a> */}
                    </div>

                    <nav id="navbar" className="navbar order-last order-lg-0">
                        <ul>
                            <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                            <li><a className="nav-link scrollto" href="#menu">Menu</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle"></i>
                    </nav>

                    <a href="#book-a-table" className="book-a-table-btn scrollto" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="bi bi-cart-plus-fill"></i> Carrito
                        <span className="badge rounded-pill bg-dark">
                            { total }                                                   
                        </span>
                    </a>
                </div>
            </header>
        </>
    )
}

export default Header