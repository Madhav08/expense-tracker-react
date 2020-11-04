import React, { createContext, useContext, useReducer } from "react";
import AppReducer from "./AppReducer";

//initial transaction

const initialState = {
  transaction: [
    { id: 1, text: "Flower", amount: -10 },
    { id: 2, text: "Salary", amount: 300 },
    { id: 3, text: "Book", amount: -10 },
    { id: 4, text: "Camera", amount: 150 },
  ],
};

//Create Context

export const GlobalContext = createContext(initialState);

//Provider Component
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <GlobalContext.Provider value={{ transactions: state.transaction }}>
      {children}
    </GlobalContext.Provider>
  );
};
