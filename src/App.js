import React, { Component } from 'react';
import Route from 'react-router-dom/Route'
import products from './views/Products'
import detail from './views/Detail'
import Home from './views/Home'
import { BrowserRouter } from 'react-router-dom'
import './css/App.css';
import { connect } from 'react-redux';
import {getHome} from './actions/home'

import Nav from "./components/NavBar"
class App extends Component {
  componentDidMount() {
    if (this.props.state === "0") {
      this.props.getHome();
    }
  }
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Nav />
            <section>
              <Route exact path="/" component={Home} />
              <Route path="/productos/:id" component={products} />
              <Route path="/detail/:type_id/:product_id" component={detail} />
            </section>
            <footer className='footer mt-auto py-3 bg-dark text-white'>
              <div className='container'>@Lluis Antoni Ferrer Muñoz</div>
            </footer>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  products: state.home.products,
  state: state.home.state
})

const mapDispatchToProps = dispatch => ({
  getHome: () => dispatch(getHome())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
