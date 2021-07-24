import React, { createContext, useState } from "react";

export const ProductContext = createContext();

export const ProductProvider = props => {
    const [productData, setProductData] = useState([
        {
            id: 1,
            name: "Shirt",
            price: 5.5
        },
        {
            id: 2,
            name: "Pant",
            price: 10.5
        },
        {
            id: 3,
            name: "Book",
            price: 50.5
        },
        {
            id: 4,
            name: "Bat",
            price: 5.5
        },
        {
            id: 5,
            name: "Laptop",
            price: 50.5
        },
        {
            id: 6,
            name: "Mobile",
            price: 30.5
        }
    ]);

    return (
        <ProductContext.Provider value={[productData, setProductData]}>
            {props.children}
        </ProductContext.Provider>
    );
};
