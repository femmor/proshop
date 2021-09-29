import React, {useEffect} from 'react'
import {useDispatch, useSelector} from "react-redux"
import {Link, useParams} from 'react-router-dom'
import {Row, Col, Image, ListGroup, Card, Button} from "react-bootstrap"
import Rating from "../components/Rating"
import {getProductDetails} from "../actions/productActions"
import Loader from '../components/Loader'
import Message from '../components/Message'


const ProductScreen = () => {
  const dispatch = useDispatch()
  const productDetails = useSelector(state => state.productDetails)
  const {loading, product, error} = productDetails

  const productId = useParams().id

  useEffect(() => {
    dispatch(getProductDetails(productId))
  }, [dispatch, productId])

  const {name, image, rating, numReviews, price, description, countInStock} = product

  return (
    <div>
      <Link className="btn btn-light my-3" to='/'>
        <i className="fas fa-arrow-left"></i> Go Back
      </Link>
      {loading ? <Loader/> : error ? <Message variant='danger'>{error}</Message> : 
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
      }
    </div>
  )
}

export default ProductScreen
