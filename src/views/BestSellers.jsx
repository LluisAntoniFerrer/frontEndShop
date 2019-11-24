import React from 'react';
import ProductsList from '../components/ProductsList'
import { connect } from 'react-redux';
import MyPagination from '../components/Pagination';
import { getBestSeller } from '../actions/init'

class BestSellers extends React.Component {
    componentDidMount(){
        if(!this.props.products){
            this.props.getBestSeller();
        }
    }
    render() {
        return (
            <div className='Products'>
                {this.props.products ? (
                    <div>
                        <ProductsList products={this.props.products} />
                        <MyPagination
                            totalPages={this.props.totalPages}
                            onSelect={this.handleSelect}
                            getMethod={this.props.getBestSeller}
                        />
                    </div>
                ) : ""}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    products: state.init.products,
    totalPages: state.init.pages
})

const mapDispatchToProps = dispatch => ({
    getBestSeller: (page) => dispatch(getBestSeller(page))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(BestSellers);