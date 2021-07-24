import React, { useContext } from 'react';
import './Products.css';

import withSearch from '../../HOC/withSearch';
import { ProductContext } from "../../context/ProductProvider";
import { CartContext } from "../../context/CartProvider";
// import productsData from '../../Json/items.json';


const Products = (props) => {
    const [productData, setProductData] = useContext(ProductContext);
    const [cart, setCart] = useContext(CartContext);

    const filteredProduct = productData.filter(m => m.name.toLowerCase()
        .includes(props.searchTerm.toLowerCase()));

    const addToCart = e => {
        setCart([...cart, productData[e.target.value]]);
        alert("item added");
    };
    if (filteredProduct.length === 0) {
        throw new Error('Data not found')
    }
    return (
        <div>
            {filteredProduct.length === 0 ? (
                <h3>No data found</h3>

            ) : (
                    filteredProduct.map((product, id) => (
                        <div className="Product" key={id}>
                            <h3>{product.name}</h3>
                            <p>$ {product.price}</p>
                            <button className="btn" value={id} onClick={addToCart}>
                                Add to Cart
                      </button>
                        </div>
                    ))
                )}
        </div>
    );

}

export default withSearch(Products);



// import React from 'react';
// import { Link } from 'react-router-dom';

// const products = (props) => {
//     console.log(props);
//     return (
//         <div>
//             <h5>This component will show all products info</h5>
//             <ul>
//                 <li><Link to={`${props.match.url}/67`}>Product Id 67</Link></li>
//                 <li><Link to={`${props.match.url}/80`}>Product Id 80</Link></li>
//                 <li><Link to={`${props.match.url}/90`}>Product Id 90</Link></li>
//             </ul>

//         </div>
//     );
// }

// export default products;