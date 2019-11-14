import React from 'react';
import ProductsList from '../components/ProductsList'
import { connect } from 'react-redux';
class Products extends React.Component {
    getProducts(props){
        let type = props.products.find(item => (item.id === parseInt(props.match.params.id,10)))
        return type
    }
    render() {
        return (
            <div className='Products'>
                {this.props.state === "1"?(
                 <ProductsList products={this.getProducts(this.props).products} type={this.getProducts(this.props).id}/>
                ):""}
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.home.products,
    state: state.home.state
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);