import React from 'react';
import ProductsList from '../components/ProductsList'
import { connect } from 'react-redux';
import { getProductsByType } from '../actions/products.js'

class Products extends React.Component {
    componentDidMount() {
            this.setState({ type: this.props.match.params.id });
            this.props.getProductsByType(this.props.match.params.id);
    }
    componentDidUpdate() {
        if (this.state.type !== this.props.match.params.id) {
            this.setState({ type: this.props.match.params.id });
            this.props.getProductsByType(this.props.match.params.id);
        }
    }
    state = {
        type: 0
    }
    render() {
        return (
            <div className='Products'>
                {this.props.products ? (
                    <ProductsList products={this.props.products} />
                ) : ""}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products
})

const mapDispatchToProps = dispatch => ({
    getProductsByType: (type) => dispatch(getProductsByType(type))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);