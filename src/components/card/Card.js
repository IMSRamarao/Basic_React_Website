import React, { useContext, useEffect } from "react";
import { CartContext } from "../../context/CartProvider";
import './Card.css'

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);

    useEffect(() => { }, [cart]);

    const RemoveCartItem = event => {
        let newval = parseInt(event.target.value);
        let newArray = [...cart];
        let idx = newArray.indexOf(newval);
        newArray.splice(idx, 1);
        setCart(newArray);
    };

    return (
        <div className="cust">
            {cart.length === 0 ? (
                <h1>No Items found</h1>
            ) : (
                    cart.map((item, i) => (
                        <div className="Customer" key={i}>
                            <h3>{item.name}</h3>
                            <p>$ {item.price}</p>
                            <button className="btn-remove" value={i} onClick={RemoveCartItem}> Remove Item </button>
                        </div>
                    ))
                )}
        </div>
    );
};
export default Cart;
