import React, { Component } from 'react';
import {Route} from 'react-router-dom'
import products from './views/Products'
import detail from './views/Detail'
import search from './views/Search'
import BestSellers from './views/BestSellers'
import CompleteBuy from './views/CompleteBuy'
import Home from './views/Home'
import MyBills from './views/MyBills'
import { BrowserRouter } from 'react-router-dom'
import './css/App.css';
import { connect } from 'react-redux';
import {getTypes} from './actions/init'

import Nav from "./components/NavBar"
class App extends Component {
  componentDidMount() {
      this.props.getTypes();
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
              <Route path="/detail/:product_id" component={detail} />
              <Route path="/search/:search" component={search} />
              <Route path="/mybills" component={MyBills} />
              <Route path="/completeBuy" component={CompleteBuy} />
              <Route path="/bestsellers" component={BestSellers} />
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
})

const mapDispatchToProps = dispatch => ({
  getTypes: () => dispatch(getTypes())
})
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
