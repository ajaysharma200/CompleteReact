import React, { useState } from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 10000;
  const dollar = 10;
  const [counter, setCounter] = useState(0);
  return (
    <MoneyContext.Provider 
    value={{ 
      dollar, money, counter, setCounter }}>
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
