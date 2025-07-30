import React from "react";
import Person from "./Person";
import Product from "./components/Product";
import Ternary from "./components/Ternary";
import Css from "./components/Css";
import Events from "./components/Events";
import Counter from "./components/counter";
import UseState from "./components/UseState"
import Map from "./components/Map";
import Filter from "./components/Filter";
import UseEffect from "./components/UseEffect";
import ApiFetch from "./components/ApiFetch";
import FormHandling from "./components/FormHandling"
import Multiple_Input_Handling from "./components/Multiple_Input_Handling";

const App = () => {
  return (
    <>
      {/* <div>
      <Person/> 

      <Product title="Apple 15" brand="Apple" price={120000} ram={128} camera={200} />
      <Product title="Samsung 15" brand="Apple" price={150000} />
      <Product title="Apple 18" brand="Apple" price={180000} />

      <Product />

    </div> */}
      {/* 


    <div>
      <Ternary name = "ajay" age= {26}/>
    </div> */}

      {/* <div>
        <Css brandname="hp" model="probook" price={150000} />
        <Css brandname="lenovo" model="probook" price={150000} />
      </div> */}

{/*       
      <div>
      <Events />

      </div> */}

      <div>
        {/* <Counter /> */}
        {/* <UseState /> */}
        {/* <Map /> */}
        {/* <Filter /> */}
        {/* <UseEffect /> */}
        {/* <ApiFetch /> */}
        {/* <FormHandling /> */}
        <Multiple_Input_Handling />
      </div>
    </>
  );
};

export default App;
