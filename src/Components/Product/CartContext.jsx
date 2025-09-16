import React, { createContext, useReducer, useContext, useEffect } from "react";
import { cartReducer } from "../../Components/Utility/reducer";
import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  INCREMENT_QUANTITY,
  DECREMENT_QUANTITY,
  CLEAR_CART,
} from "../../Components/Utility/action.type";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, dispatch] = useReducer(cartReducer, [], () => {
    const localData = localStorage.getItem("cartItems");
    return localData ? JSON.parse(localData) : [];
  });

  useEffect(() => {
    localStorage.setItem("cartItems", JSON.stringify(cartItems));
  }, [cartItems]);

  const addToCart = (product) => {
    dispatch({ type: ADD_TO_CART, payload: product });
  };

  const removeFromCart = (product) => {
    dispatch({ type: REMOVE_FROM_CART, payload: product });
  };

  const incrementQuantity = (product) => {
    dispatch({ type: INCREMENT_QUANTITY, payload: product });
  };

  const decrementQuantity = (product) => {
    dispatch({ type: DECREMENT_QUANTITY, payload: product });
  };

  const clearCart = () => {
    dispatch({ type: CLEAR_CART });
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        incrementQuantity,
        decrementQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
