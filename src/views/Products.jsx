import React from 'react';
import ProductsList from '../components/ProductsList'
import { connect } from 'react-redux';
import { getProductsByType } from '../actions/products.js'
import MyPagination from '../components/Pagination';

class Products extends React.Component {
    state = {
        type: 0
    }
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
    handleSelect(number) {
        console.log('handle select', number);
        this.setState({ currentPageNumber: number });
    }
    render() {
        return (
            <div className='Products'>
                {this.props.products ? (
                    <div>
                        <ProductsList products={this.props.products} />
                        <MyPagination
                            totalPages={this.props.totalPages}
                            param={this.props.match.params.id}
                            getMethod={this.props.getProductsByType}
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
    getProductsByType: (type,page) => dispatch(getProductsByType(type,page))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Products);