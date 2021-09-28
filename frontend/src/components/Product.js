import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from "../components/Rating"
import { Link } from 'react-router-dom';

const Product = ({ product }) => {

  const {_id, name, image, price, rating, numReviews} = product

  return (
    <Card className="my-3 rounded">
        <Card.Img variant="top" src={image} />
      <Card.Body>
        <Link to={`/products/${_id}`}>
          <Card.Title as="div"><strong>{name}</strong></Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating value={rating} text={`from ${numReviews} reviews`} />
        </Card.Text>
        <Card.Text as="h3">
          ${price}
        </Card.Text>
      </Card.Body>
    </Card>
  )
}

export default Product
