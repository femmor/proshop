import React from 'react'
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap"
import Rating from "../components/Rating"
import products from '../products'

const ProductScreen = () => {
  const productId = useParams().id
  const product = products.find(p => p._id === productId)
  const {name, description, image, countInStock, numReviews, rating, price} = product

  return (
    <>
      <Link className="btn btn-light my-3" to='/'>
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={image} className="rounded" alt={name} fluid/>
        </Col>
        <Col md={3}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
              <Rating value={rating} text={`from ${numReviews} reviews`}/>
            </ListGroup.Item>
            <ListGroup.Item>
              Price: <strong>${price}</strong>
            </ListGroup.Item>
            <ListGroup.Item>
              {description}
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col md={3}>
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item>
                <Row>
                  <Col>
                    Price:
                  </Col>
                  <Col>
                    <strong>${price}</strong>
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Row>
                  <Col>
                    Status:
                  </Col>
                  <Col>
                  {countInStock > 1 ? <strong className="text-success"><span className="text-primary">{countInStock}</span> In Stock</strong> : <strong className="text-danger">Out of Stock</strong>}
                  </Col>
                </Row>
              </ListGroup.Item>
              <ListGroup.Item>
                <Button className="add-to-cart" type="button" variant='primary' disabled={countInStock > 1 ? false : true}>Add to cart</Button>
              </ListGroup.Item>
            </ListGroup>
          </Card>
        </Col>
      </Row>
    </>
  )
}

export default ProductScreen