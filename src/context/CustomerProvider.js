import React, { createContext, useState } from "react";

export const CustomerContext = createContext();

export const CustomerProvider = props => {

    const [customerData, setCustomerData] = useState(
        [
            {
                name: "Madhu",
                address: "Attili",
                email: "madhu@gmail.com"
            },
            {
                name: "Ram",
                address: "Thanuku",
                email: "Ram@gmail.com"
            },
            {
                name: "Ravi",
                address: "Tadepalligudem",
                email: "Ravi@gmail.com"
            },
            {
                name: "Krishna",
                address: "Pippara",
                email: "Krishna@gmail.com"
            },
            {
                name: "Raju",
                address: "Bimmavaram",
                email: "Raju@gmail.com"
            },
            {
                name: "Rani",
                address: "Ganapavaram",
                email: "Rani@gmail.com"
            },
            {
                name: "Sita",
                address: "Machili",
                email: "Sita@gmail.com"
            },
            {
                name: "Ramesh",
                address: "Palluru",
                email: "Ramesh@gmail.com"
            },
            {
                name: "Srinu",
                address: "Kommara",
                email: "Srinu@gmail.com"
            },
            {
                name: "Ramarao",
                address: "Rajamundry",
                email: "Ramarao@gmail.com"
            }
        ]
    );
    return (
        <CustomerContext.Provider value={[customerData, setCustomerData]}>
            {props.children}
        </CustomerContext.Provider>
    );
};
