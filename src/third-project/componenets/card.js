import React from 'react';
import '../style.css'
export default function Card(porps) {
    return (
      <div className="card">
        <div className="card-image">
          {!porps.status  && <div className="badge">Sold out</div>}
          <img src={porps.image} alt="tools" />
        </div>
        <div className="card-content">
         {porps.title  && <h2 className="title">{porps.title}</h2>}
          <p className="location">{porps.location}</p>
          <div className="price-rating">
            <p className="price">{porps.price}</p>
            <span className="rating">{porps.rating}</span>
          </div>
          <p className="reviews">{porps.reviews}</p>
        </div>
      </div>
    );
  }
  