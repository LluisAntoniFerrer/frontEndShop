import React from 'react';
import ProductsList from '../components/ProductsList'
import { connect } from 'react-redux';
import { searchProducts } from '../actions/products.js'
import MyPagination from '../components/Pagination';

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
                    <div>
                        <ProductsList products={this.props.products} />
                        <MyPagination
                            totalPages={this.props.totalPages}
                            param={this.props.match.params.search}
                            getMethod={this.props.searchProducts}
                        />
                    </div>
                ) : ""}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.products.products,
    totalPages: state.products.pages
})

const mapDispatchToProps = dispatch => ({
    searchProducts: (search,page) => dispatch(searchProducts(search,page))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);