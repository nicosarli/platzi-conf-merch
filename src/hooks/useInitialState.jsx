import React, { useState } from 'react';
import initialState from '../initialState';

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload, indexRemove) => {
    setState({
      ...state,
      cart: [
        ...state.cart.filter(
          (items, indexCurrent) =>
            items.id !== payload.id || indexCurrent !== indexRemove
        ),
      ],
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: [...state.buyer, payload],
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    addToBuyer,
  };
};

export default useInitialState;
