import React from 'react';
//import CarouselProducts from '../components/CarouselProducts';
import ProductsList from '../components/ProductsList';
import '../css/home.css'
import { connect } from 'react-redux';

class Home extends React.Component {
    render() {
        return (
            <div className='homeView'>
                {/* <CarouselProducts /> */}
                {this.props.products.map(product => (
                    <div key={product.id}>
                        <span>{product.name}</span>
                        <ProductsList products={product.products} type={product.id}/>
                    </div>
                ))}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    products: state.home.products
})

const mapDispatchToProps = dispatch => ({
   
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);
