import React, { useContext } from 'react';
import './Customer.css';

import withSearch from '../../HOC/withSearch';
import { CustomerContext } from "../../context/CustomerProvider";
// import customerData from '../../Json/Customers.json';


const Customers = (props) => {
    const [customerData, setCustomerData] = useContext(CustomerContext);

    let filteredCustomer = customerData.filter(m => (
        m.name.toLowerCase().includes(props.searchTerm.toLowerCase())
    ));

    if (filteredCustomer.length === 0) {
        throw new Error('Data not found')
    }
    return (
        <div>
            {/* <input type='text' name='search' onChange={this.handleSearch} /> */}
            {/* <hr /> */}
            {filteredCustomer.length === 0 ? (
                // () => throw new Error('Nodata found')
                <h3>No data found</h3>
            ) : (filteredCustomer.map((cust, index) => (
                <div className="Customer" key={index}>
                    <h2>{cust.name}</h2>
                    <h3>{cust.address}</h3>
                    <h4>{cust.email}</h4>
                </div>
            )))}
        </div>
    );

}

export default withSearch(Customers);