import React from 'react';
import Login from './components/Login/Login';

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
}

export default App;



// import React from 'react';
// import './App.css';
// import IncreamentDecreament from './components/IncreamentDecreament/IncreamentDecreament';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Home from './components/Home/Home';
// import Login from './components/Login/Login';
// import Register from './components/Register/Register';
// import Products from './components/Products/Products';
// import Categories from './components/Categories/Categories';
// import About from './components/About/About';
// import Prod from './components/Products/Prod';
// import Customers from './components/Customers/Customers';
// import MyErrorBoundary from './ErrorBoundary/MyErrorBoundary';
// import { CustomerProvider } from "./context/CustomerProvider";
// import { ProductProvider } from "./context/ProductProvider";
// import { CategoryProvider } from "./context/CategoryProvider";
// import { CartProvider } from "./context/CartProvider";
// import Cart from './components/card/Card';

// import Nav from './Navigation';

// function App() {
//   // const [cart, setCart] = useContext(CartContext);

//   // useEffect(() => { }, [cart]);
//   return (
//     <BrowserRouter>
//       <div className="App">

//         <Switch>
//           <CartProvider>
//             <Nav />
//             <Route path='/' exact >
//               <Home />
//             </Route>
//             <Route path='/login' >
//               <Login />
//             </Route>
//             <Route path='/register'>
//               <Register />
//             </Route>
//             <ProductProvider>
//               <Route exact path='/products' >
//                 <MyErrorBoundary>
//                   <Products />
//                 </MyErrorBoundary>
//               </Route>
//             </ProductProvider>

//             {/* This is about validation of id as number and optional parameter */}
//             <Route path='/products/:id(80|90|67)/:name?' >
//               <Prod />
//             </Route>
//             {/* <Route path='/products/:id(\d+)' component={Prod} /> */}
//             <CategoryProvider>
//               <Route path='/Categories' >
//                 <MyErrorBoundary>
//                   <Categories />
//                 </MyErrorBoundary>
//               </Route>
//             </CategoryProvider>
//             <CustomerProvider>
//               <Route path='/Customers'>
//                 <MyErrorBoundary>
//                   <Customers />
//                 </MyErrorBoundary>
//               </Route>
//             </CustomerProvider>

//             <Route path='/about' >
//               <About />
//             </Route>
//             <Route path='/IncrDecr' >
//               <IncreamentDecreament />
//             </Route>
//             <Route path="/cart" >
//               <Cart />
//             </Route>
//           </CartProvider>
//           <Route path='**' render={() => <h1>error ...</h1>} />
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;
