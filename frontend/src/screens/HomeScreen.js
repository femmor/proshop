import React, {useState, useEffect} from 'react'
import axios from 'axios'
import { Row, Col } from 'react-bootstrap'
import Product from '../components/Product';

const HomeScreen = () => {
  const [products, setProducts] = useState([])

  const fetchProducts = async () => {
    const { data } = await axios.get('/api/products')
    setProducts(data)
  }

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div>
      <h1>Latest Products</h1>
      <Row>
        {products.map(product => (
          <Col sm={12} md={6} lg={4} xl={3} key={product._id}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </div>
  )
}

export default HomeScreen
