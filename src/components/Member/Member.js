import React from 'react';
import {Col, Card} from 'react-bootstrap';
// import './Member.css';
import flag from './flag.png';


//TODO: Covert to bootstrap cards
export default function Member(props) {
      return (
<div className="Member">
    <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={flag} alt="state flag" />
    <Card.Body>
        <Card.Title>{props.prefix}{props.name}</Card.Title>
        <Card.Text>
            <p>District: {props.district}</p>
            <p>Hometown: {props.hometown}</p>
            <p>State: {props.location}</p>
        </Card.Text>
    </Card.Body>
    </Card>
    </Col>
</div>
) }