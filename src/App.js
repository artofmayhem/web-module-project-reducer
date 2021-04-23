// import React, { useReducer } from "react";
//import reducer from "./reducers/index";
// import { initialState } from "./reducers/index";
import "./App.css";
// import {
//   addOne,
//   applyNumber,
//   changeOperation,
//   memoryAdd,
//   memoryClear,
//   memoryReplace,
//   clearDisplay,
// } from "./actions/index";
// import TotalDisplay from "./components/TotalDisplay";
// import CalcButton from "./components/CalcButton";
import { Calculator } from "./components/Calculator";

function App() {
  // const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          <img width="40px" src="./Lambda-Logo-Red.png" alt="lambda logo" />{" "}
          Lambda Reducer Challenge
        </a>
      </nav>
      <Calculator />
    </div>
  );
}

export default App;
