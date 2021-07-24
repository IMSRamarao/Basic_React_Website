import React, { useContext, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "./context/CartProvider";

const Nav = () => {
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => { }, [cart]);
    return (
        < header className='Header' >
            <nav>
                <ul>
                    <li><NavLink to='/' exact>Home</NavLink></li>
                    <li><NavLink to='/login'>Login</NavLink></li>
                    <li><NavLink to='/register'>Register</NavLink></li>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/categories'>Categories</NavLink></li>
                    <li><NavLink to='/customers'>Customers</NavLink></li>
                    <li><NavLink to='/about'>About</NavLink></li>
                    <li><NavLink to='/IncrDecr'>IncreamentDecreament</NavLink></li>
                    <li><NavLink to="/cart" className="nav-link">Cart({cart.length})</NavLink></li>
                </ul>
            </nav>
        </header >
    )
}

export default Nav;