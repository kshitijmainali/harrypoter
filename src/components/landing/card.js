import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from 'react-bootstrap/CardDeck';
import Button from 'react-bootstrap/esm/Button';

function CardComponent({ charecters }) {
  console.log('hilo', charecters);
  return (
    <CardDeck>
      {charecters.map((ch) => (
        <Card>
          <Card.Img variant='top' src={ch.photo} />
          <Card.Body>
            <Card.Title>{ch.name}</Card.Title>
            <Button> View Detail</Button>
          </Card.Body>
        </Card>
      ))}
    </CardDeck>
  );
}

export default CardComponent;
