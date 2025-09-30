import logo from "./logo.svg";
import "./App.css";
import NavBar from "./NavBar";
import { useState } from "react";
import Hotel from "./Hotel";
import "bootstrap/dist/css/bootstrap.min.css";

const myHotel = [
  {
    name: "Happy Hotel",
    address: "Main Street, Trichy",
    phone: 9876543210,
    email: "happy@info.com",
  },
  {
    name: "Saravana Bhava",
    address: "South Street, Trichy",
    phone: 9876567890,
    email: "saro@info.com",
  },
  {
    name: "A2B",
    address: "Theradi Street, Trichy",
    phone: 9845673210,
    email: "a2b@info.com",
  },
];

function App() {
  return (
    <div>
      <NavBar />
      <div className="container mt-4">
        <div className="row">
          {myHotel.map((hotel, index) => (
            <div className="col-md-6 mb-4" key={index}>
              <Hotel hotel={hotel} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
