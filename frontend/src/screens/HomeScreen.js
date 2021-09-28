import React, {useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product';
import {listProducts} from "../actions/productActions"

const HomeScreen = () => {
  const dispatch = useDispatch()

  const productList = useSelector(state => state.productList)
  const { loading, products, error } = productList

  useEffect(() => {
    dispatch(listProducts())
  }, [])



  return (
    <div>
      <h1>Latest Products</h1>
      { loading ? <h2>Loading...</h2> : error ? <div>{error}</div> : <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>}
      
    </div>
  )
}

export default HomeScreen
