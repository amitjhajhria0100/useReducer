import React, { useContext, createContext, useReducer } from "react";

const reducerContext = createContext();

export const useCounter = function () {
  return useContext(reducerContext);
};

function counterReducer(state, action) {
  if (action.type === "INCREMENT") {
    return state + 1;
  } else if (action.type === "DECREMENT") {
    return state - 1;
  } else if (action.type === "ADD") {
    return state + Number(action.payload);
  } else if (action.type === "SUB") {
    return state - Number(action.payload);
  } else {
    return state;
  }
}

function detailsReducer(state, action) {
  if (action.type === "ADDUSER") {
    return [...state, action.payload];
  } else if (action.type === "REMOVE") {
    const newdata = state.filter((value, index) => index !== action.payload);
    return newdata;
  } else if (action.type === "UPDATE") {
    return state.map((value, index) =>
      index === action.payload.index ? action.payload.data : value
    );
  } else {
    return state;
  }
}

function ReducerStore({ children }) {
  const [counter, dispatchCounter] = useReducer(counterReducer, 0);
  const [details, dispatchDetails] = useReducer(detailsReducer, []);
  return (
    <reducerContext.Provider
      value={{ dispatchCounter, counter, details, dispatchDetails }}
    >
      {children}
    </reducerContext.Provider>
  );
}

export default ReducerStore;
