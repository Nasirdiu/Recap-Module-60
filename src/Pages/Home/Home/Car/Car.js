import React, { useEffect, useState } from "react";
import Cars from "../Cars/Cars";
import "./Car.css";
const Car = () => {
  const [car, setCar] = useState([]);

  useEffect(() => {
    fetch(`generated.json`)
      .then((res) => res.json())
      .then((data) => setCar(data));
  }, []);

  return (
    <div className="container">
      <h1 className="text-center text-success mt-3">BMW Car</h1>
      <div className="row">
        {car.map((cars) => (
          <Cars key={cars.id} cars={cars}></Cars>
        ))}
      </div>
    </div>
  );
};

export default Car;
