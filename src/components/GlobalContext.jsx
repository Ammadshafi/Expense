import React, { createContext, useReducer } from "react";
import { AppReducer } from "./Reducer";
const initailstate = { transiction: [] };

export const GlobalContext = createContext(initailstate);
export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initailstate);
  function del(id) {
    dispatch({ type: "Delete", load: id });
  }
  function add(transition) {
    dispatch({ type: "Add", load: transition });
  }
  return (
    <GlobalContext.Provider
      value={{
        transiction: state.transiction,
        add,
        del,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
