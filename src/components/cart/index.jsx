import React from 'react';

import { Link } from 'react-router-dom';

import { useTheCart } from "../../hooks/useTheCart";

export const Checkout = () => {
    const { items, count, clearCart } = useTheCart();
    let total = 0;

    const handlePurchase = () => {
        clearCart();
    };

    return (
        <div className="cartProductContainer">
            <h1>Your Cart</h1>
            {count === 0 ? (
                <p className="cartEmptyStyle">Your cart is empty!</p>
            ) : (
                <ul>
                    {items.map((item) => {
                        total += item.discountedPrice;
                        return (
                            <li key={item.id}>
                                <h2>{item.title}</h2>
                                <img
                                    className="cartImageStyle"
                                    src={item.imageUrl}
                                    alt={item.title}
                                />
                                <p className="descriptionStyle">{item.description}</p>
                                <p className="priceStyle">{item.discountedPrice}</p>
                                <Link
                                    to="/checkoutSuccess"
                                    className="purchaseButton"
                                    onClick={handlePurchase}
                                >
                                    Purchase
                                </Link>
                            </li>
                        );
                    })}
                    <li>
                        <div className="totalStyle">
                            <h2>Total:</h2>
                            <p>{total}</p>
                        </div>
                    </li>
                </ul>
            )}
        </div>
    );
};

