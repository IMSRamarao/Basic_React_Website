import React, { useContext, useEffect } from 'react';
import '../../App.css';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom'
import Home from '../Home/Home';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
import Products from '../Products/Products';
import Categories from '../Categories/Categories';
import About from '../About/About';
import Prod from '../Products/Prod';
// import Customers from './components/Customers/Customers';
import MyErrorBoundary from '../../ErrorBoundary/MyErrorBoundary';
// import { CustomerProvider } from "./context/CustomerProvider";
import { ProductProvider } from "../../context/ProductProvider";
import { CategoryProvider } from "../../context/CategoryProvider";
import { CartProvider } from "../../context/CartProvider";
import Cart from '../card/Card';

// import Nav from './Navigation';

function Employee() {
    // const [cart, setCart] = useContext(CartContext);

    // useEffect(() => { }, [cart]);
    return (
        <BrowserRouter>
            <div className="App">

                <Switch>
                    <CartProvider>
                        < header className='Header' >
                            <nav>
                                <ul>
                                    <li><NavLink to='/' exact>Home</NavLink></li>
                                    {/* <li><NavLink to='/login'>Login</NavLink></li>
                                    <li><NavLink to='/register'>Register</NavLink></li> */}
                                    <li><NavLink to='/products'>Products</NavLink></li>
                                    <li><NavLink to='/categories'>Categories</NavLink></li>
                                    {/* <li><NavLink to='/customers'>Customers</NavLink></li> */}
                                    <li><NavLink to='/about'>About</NavLink></li>
                                    {/* <li><NavLink to='/IncrDecr'>IncreamentDecreament</NavLink></li> */}
                                    <li><NavLink to="/cart" className="nav-link">Cart
                                    {/* ({cart.length}) */}
                                    </NavLink></li>
                                    {/* <NavLink className="header-nav__item" to="/Logout/">LOGOUT</NavLink> */}
                                </ul>
                            </nav>
                        </header >
                        <Route path='/' exact >
                            <Home />
                        </Route>
                        <ProductProvider>
                            <Route exact path='/products' >
                                <MyErrorBoundary>
                                    <Products />
                                </MyErrorBoundary>
                            </Route>
                        </ProductProvider>

                        {/* This is about validation of id as number and optional parameter */}
                        <Route path='/products/:id(80|90|67)/:name?' >
                            <Prod />
                        </Route>
                        {/* <Route path='/products/:id(\d+)' component={Prod} /> */}
                        <CategoryProvider>
                            <Route path='/Categories' >
                                <MyErrorBoundary>
                                    <Categories />
                                </MyErrorBoundary>
                            </Route>
                        </CategoryProvider>

                        <Route path='/about' >
                            <About />
                        </Route>

                        <Route path="/cart" >
                            <Cart />
                        </Route>
                    </CartProvider>
                    {/* <Route path="/Logout" component={Logout} /> */}
                    <Route path='**' render={() => <h1>error ...</h1>} />
                </Switch>
            </div>
        </BrowserRouter>
    );
}

export default Employee;

// const Logout = () => {
//     window.location.href = '/';
// }