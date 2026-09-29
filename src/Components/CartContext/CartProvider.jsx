import { useState } from "react";
import CartContext from "./CartContext";

const Cart1provider = ({ children }) => {
    const [CartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("CartItems");
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const updateAndSaveCart = (newItems) => {
        setCartItems(newItems);
        localStorage.setItem("CartItems", JSON.stringify(newItems));
    };

    const AddToCart = (item) => {
        const IsExist = CartItems.find((theItem) => {
            return theItem.id === item.id;
        });

        if (IsExist) {
            const updatedItems = CartItems.map((itemFind) => {
                return itemFind.id === item.id ? item : itemFind;
            });
            updateAndSaveCart(updatedItems);
        } else {
            updateAndSaveCart([...CartItems, item]);
        }
    };

    const RemoveFromCart = (id) => {
        const cart = CartItems.filter((removeItem) => {
            return removeItem.id !== id;
        });
        updateAndSaveCart(cart);
    };

    const cartItemLength = CartItems.length;

    return (
        <CartContext.Provider
            value={{
                AddToCart,
                RemoveFromCart,
                CartItems,
                cartItemLength,
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

export default Cart1provider;