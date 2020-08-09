import React from 'react';
// import './Member.css';


//TODO: Covert to bootstrap cards
export default function Member(props) {
      return (
<div className="Member">
  <div className="image-container">
    <img src={props.name} alt=''/>
  </div>
  <h2>{props.prefix} {props.name}</h2>
  <div className="member-information">
    <div className="member-address">
      <p>State: {props.location}</p>
      <p>District: {props.district}</p>
    </div>
    <div className="member-hometown">
      <h3>Hometown:</h3>
      <p>{props.hometown}</p>
    </div>
  </div>
</div>
) }