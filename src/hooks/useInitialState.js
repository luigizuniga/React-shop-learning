import { useState } from 'react';

// state initial 
const initialState = {
    cart: []
};

// hook para obtener el elemento cart
const useInitialState = () =>{
    const [ state,  setState ] = useState(initialState);  

    const addToCart = (payload) => {
        setState({
            ...state,
            cart: [ ...state.cart, payload]
        });
    };

    return {
        state, 
        addToCart
    }
}

export default useInitialState;