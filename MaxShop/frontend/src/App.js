import React from 'react'
// import { Container, Row, Col } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import { BrowserRouter  as Router, Route } from 'react-router-dom'
import ProductScreen from './screens/ProductScreen'

const App = () => {
  return (
    <Router>
      <Header/>
      <main className='py-3'>
        <div className='container'>
          <div className='row justify-content-center'>
            <Route path='/' component={HomeScreen} exact/>
            <Route path='/products/:id' component={ProductScreen} />
          </div>
        </div>
      </main>
      <Footer/>
    </Router>
  )
}

export default App
