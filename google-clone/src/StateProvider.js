import React, { createContext, useContext, useReducer } from 'react';

// preparing DataLayer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children
}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)} >
        {children}
    </StateContext.Provider>
);

// Hook, which allows us to pull the data from Data Layer
export const useStateValue = () => useContext(StateContext);
