import React from "react";

const Product = ({title, camera, ram, price,brand }) => {
  // const obj = {
  //   title: "Apple iphone",
  //   brand: "apple",
  //   price: 150000,
  // };
  return (
    <>
      <div>
        <h1>Mobile Name= {title}</h1>
        <p>Mobile Brand= {brand}</p>
        <h4>Mobile Price= {price}</h4>
        <p>Mobile ram= {ram}</p>
        <h4>Mobile camera= {camera}</h4>
        
      </div>
    </>
  );
};

export default Product;
