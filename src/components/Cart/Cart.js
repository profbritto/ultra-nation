import React from 'react';

const Cart = (props) => {
    
    const Cart=props.cart;
 
    let totalPopulation=0;
    for (let i = 0; i < Cart.length; i++) {
        const Country = Cart[i];
        totalPopulation=totalPopulation+Country.population;
        
    }
    
    
    return (
        <div>
            <h2>This is cart: {Cart.length}</h2>
            <h2>This is cart: {totalPopulation}</h2>
        </div>
    );
};

export default Cart;