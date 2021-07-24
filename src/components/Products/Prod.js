import React from 'react';


const prod = (props) => {
    console.log(props);
    return (
        <div>
            <h1>ID: {props.match.params.id}</h1>
            <h2>Name: {props.match.params.name}<small>(Optional)</small></h2>
        </div>
    );
}

export default prod;