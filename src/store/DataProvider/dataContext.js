import React from "react";
const DataContext = React.createContext({
  data: [],
  closeAccount: (email) => {},
});
export default DataContext;
