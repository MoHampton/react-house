import React from 'react';
import {Card} from 'react-bootstrap';
// import './Member.css';
import flag from './flag.png';


//TODO: Covert to bootstrap cards
export default function Member(props) {
      return (
<div id="Member">
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={flag} alt="state flag" />
    <Card.Body>
        <Card.Title>{props.prefix}{props.name}</Card.Title>
        <Card.Text id="Member-info">
            <span>District: {props.district}</span>
            <span>Hometown: {props.hometown}</span>
            <span>State: {props.location}</span>
        </Card.Text>
    </Card.Body>
    </Card>
</div>
) }