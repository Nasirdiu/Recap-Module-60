import React from "react";
import "./Cars.css";
const Cars = ({ cars }) => {
  const { name, price, img } = cars;
  return (
    <div className="g-5 col-sm-12 col-md-6 col-lg-4 ">
      <div className="cars m-2 p-2">
        <img className="img-fluid rounded-3" src={img} alt="" />
        <h4>{name}</h4>
        <p>{price}</p>
        <button className="btn btn-info">Car Details</button>
      </div>
    </div>
  );
};

export default Cars;
