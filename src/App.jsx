import React from "react";
import Edu from "./Edu";
import Exp from "./Exp";
import Gen from "./Gen";

const App = () => {
  return (
    <div>
      <div className="header"></div>
      <Edu />
      <Exp />
      <Gen />
    </div>
  );
};

export default App;
