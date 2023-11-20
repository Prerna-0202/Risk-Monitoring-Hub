"use client";
import { useReducer } from "react";
import jsonData from "../../assets/data.json";
import DataContext from "./dataContext";

const defaultState = {
  data: jsonData,
};

const HandelReducer = (state, action) => {
  if (action.type === "close") {
    return {
      data: state.data.map((i) => {
        if (i.email === action.email) {
          return {
            ...i,
            isPending: false,
          };
        }
        return i;
      }),
    };
  }
  return defaultState;
};

function DataProvider(props) {
  const [state, dispatch] = useReducer(HandelReducer, defaultState);

  const closeAccount = (email) => {
    dispatch({
      type: "close",
      email,
    });
  };

  const ContextValue = {
    data: state.data,
    closeAccount,
  };

  return (
    <DataContext.Provider value={ContextValue}>
      {props.children}
    </DataContext.Provider>
  );
}

export default DataProvider;
