import React from 'react';
//import CarouselProducts from '../components/CarouselProducts';
import ProductsList from '../components/ProductsList';
import '../css/home.css'
import { connect } from 'react-redux';
import { getBestSeller } from '../actions/init'

class Home extends React.Component {
    componentDidMount() {
        this.props.getBestSeller();
    }
    render() {
        return (
            <div className='homeView'>
                {/* <CarouselProducts /> */}
                {this.props.recommended.length > 0 &&
                    <div>
                        <h3>Te recomendamos</h3>
                        <ProductsList products={this.props.recommended} />
                    </div>
                }
                {this.props.products &&
                    <div>
                        <h3>Los mas vendidos</h3>
                        <ProductsList products={this.props.products} />
                    </div>
                }
            </div>
        );
    }
}
const mapStateToProps = state => ({
    products: state.init.products,
    recommended: state.init.recommended
})

const mapDispatchToProps = dispatch => ({
    getBestSeller: () => dispatch(getBestSeller())
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);