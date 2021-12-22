import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

import "./App.css";
import Trivia from "./Components/trivia";

const App = () => {
  return (
    <div className="App">
      <Trivia />
    </div>
  );
};

export default App;
