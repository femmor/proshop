import React from "react"
import {BrowserRouter as Router, Route} from "react-router-dom" 
import {Container} from "react-bootstrap"
import Header from "./components/Header"
import Footer from "./components/Footer"
import HomeScreen from './screens/HomeScreen';
import Cart from './screens/Cart'
import Login from './screens/Login'
import ProductScreen from "./screens/ProductScreen"
import ErrorPage from "./screens/ErrorPage"

const App = () => {
  return (
    <Router>
      <Header/>
        <main className="py-3">
          <Container>
            <Route path="/" component={HomeScreen} exact/>
            <Route path="/cart" component={Cart}/>
            <Route path="/login" component={Login}/>
            <Route path="/product/:id" component={ProductScreen}/>
          </Container>
        </main>
      <Footer/>
    </Router>
  );
}

export default App;
