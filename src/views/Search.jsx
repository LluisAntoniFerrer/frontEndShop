import React from 'react';
import ProductsList from '../components/ProductsList'
import { connect } from 'react-redux';
import { searchProducts } from '../actions/products.js'

class Search extends React.Component {
    componentDidMount() {
            this.setState({ search: this.props.match.params.search });
            this.props.searchProducts(this.props.match.params.search);
    }
    componentDidUpdate() {
        if (this.state.search !== this.props.match.params.search) {
            this.setState({ search: this.props.match.params.search });
            this.props.searchProducts(this.props.match.params.search);
        }
    }
    state = {
        search: 0
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
    searchProducts: (search) => dispatch(searchProducts(search))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);