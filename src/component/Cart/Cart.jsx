import React from 'react';

const Cart = ({cart}) => {
    const {name} = cart;
    return (
        <div >
            <ol type='1'>
                <li>{name}</li>
            </ol>
        </div>
    );
};

export default Cart;