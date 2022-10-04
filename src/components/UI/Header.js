import React from 'react'

const Header = ({cart}) => {
    // console.log(cart.reduce((a, b) => parseInt(a) + parseInt(b.count), 0));
  return (
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

        <a href="#book-a-table" className="book-a-table-btn scrollto"><i className="bi bi-cart-plus-fill"></i> Carrito <span className="badge rounded-pill bg-dark">{cart.reduce((a, b) => parseInt(a) + parseInt(b.count), 0)}</span></a>

        </div>
    </header>
  )
}

export default Header