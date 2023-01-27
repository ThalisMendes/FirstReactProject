import React from "react";

export default function Card(props) {
  
  return (
    <div className="card-complete">
      <div className="card">
          <img src={props.imageUrl} className="card-image" />
          <div className="card-description text-align-justify">
            <div className="card-country">
                <i className="fa-solid fa-location-dot"></i>
                <span>{props.location}</span>
                <a href={props.googleMapsUrl} target="_blank">View on Google Maps</a>
            </div>
            <span className="span-title">{props.title}</span>
            <span className="date">({props.startDate}) - ({props.endDate}) </span>
            <p className="description text-align-justify">{props.description}</p>
          </div>
      </div>
      {!props.isLast && <div className="divider"></div>}
    </div>
  )
}