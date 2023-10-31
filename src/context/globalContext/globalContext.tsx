import React, { createContext, useReducer } from "react";
import AppReducer from "../reducer/appReducer";

// Initial state
const initialState: any = {
  allproduct: [],
};
// Create context
export const GlobalContext = createContext(initialState);
// Provider component
export const GlobalProvider = ({ children }: any) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);
  return (
    <GlobalContext.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};