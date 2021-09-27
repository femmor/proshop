import React from 'react'
import { Card } from 'react-bootstrap'
import Rating from "../components/Rating"

const Product = ({ product }) => {

  const {_id, name, image, price, rating, numReviews} = product

  return (
    <Card className="my-3 rounded">
      <a href={`/product/${_id}`}>
        <Card.Img variant="top" src={image} />
      </a>
      <Card.Body>
        <Card.Title as="div">{name}</Card.Title>
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
