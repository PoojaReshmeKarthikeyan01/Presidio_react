import React from 'react'
import App from './App'

export default function Hotel({hotel}) {
  return (
    <div>
      <div className="d-flex justify-content-center">
      <div className="card p-5 w-50"
      style={{
          background: "linear-gradient(to right, #1e3c72, #bdc3c7)", // blue → red
          borderRadius: "15px",
          color: "white",
          textShadow: "1px 1px 4px rgba(0,0,0,0.8)" // makes text pop
        }}>
        <p><strong>Name:</strong> {hotel.name}</p>
        <p><strong>Address:</strong> {hotel.address}</p>
        <p><strong>Phone:</strong> {hotel.phone}</p>
        <p><strong>Email:</strong> {hotel.email}</p>
        </div>
      </div>
    </div>
  )
}
