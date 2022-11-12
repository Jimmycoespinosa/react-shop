import React, { useState, useContext } from "react";
import '@styles/Header.scss';
import Menu from '@components/Menu';
import menu from '@icons/icon_menu.svg';
import logo from '@logos/logo_yard_sale.svg';
import shoppingCart from '@icons/icon_shopping_cart.svg';
import AppContext from '../context/AppContext';
import MyOrder from '../containers/MyOrder';

// RECOMENDACIONES REACT:
// En react la palabra "class" es reservada, por lo que es necesario reemplazarla por className.
// En react todas las etiquetas se deben cerrar a diferencia de html.

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const [toggleOrders, setToggleOrders] = useState(false);
    const {state}= useContext(AppContext);

    const handleToogle =()=>{
        setToggle(!toggle);// Cambia estado a la inversa.
    }

    return (
        <nav>
            <img src={menu} alt="menu" className="menu" />
            <div className="navbar-left">
                <img src={logo} alt="logo" className="nav-logo" />
                <ul>
                    <li>
                        <a href="/">All</a>
                    </li>
                    <li>
                        <a href="/">Clothes</a>
                    </li>
                    <li>
                        <a href="/">Electronics</a>
                    </li>
                    <li>
                        <a href="/">Furnitures</a>
                    </li>
                    <li>
                        <a href="/">Toys</a>
                    </li>
                    <li>
                        <a href="/">Others</a>
                    </li>
                </ul>
            </div>
            <div className="navbar-right">
                <ul>
                    <li className="navbar-email" onClick={handleToogle}>
                        jimmycoespinosa@gmail.com
                    </li>
                    <li className="navbar-shopping-cart" onClick={() => setToggleOrders(!toggleOrders)}>
                        <img src={shoppingCart} alt="shopping cart" />
                        {/* Agrega el contador de articulos en el carrito */}
                        {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                    </li>
                </ul>
            </div>
            {toggle && <Menu />/*Visualiza menú dependiendo del estado de toogle. */}
            {toggleOrders && <MyOrder />/*Visualiza menú dependiendo del estado de toogle. */}
        </nav>
    );
}

export default Header;
