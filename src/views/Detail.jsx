import React from 'react';
import { Media } from 'react-bootstrap';
import { connect } from 'react-redux';

class Detail extends React.Component {
    getProducts(props) {
        let type = props.products.find(item => (item.id === parseInt(props.match.params.type_id, 10)))
        let product = type.products.find(item => (item.id === parseInt(props.match.params.product_id, 10)))
        return product
    }
    render() {
        return (
            <div className='Products'>
                {this.props.state === "1" && (
                    <div>
                        <Media>
                            <img
                                width={300}
                                height={300}
                                className="mr-3"
                                src={this.getProducts(this.props).image}
                            />
                            <Media.Body>
                                <h3>{this.getProducts(this.props).brand}</h3>
                                <p>
                                    {this.getProducts(this.props).name}
                                    <select>
                                        <option selected disabled>Selecciona un producto</option>
                                        {this.getProducts(this.props).product_stock.map(stock => (
                                            stock.stock > 0?
                                            <option value={stock.id}>{stock.product_color.name + " " + stock.product_memory.size}</option>
                                        :""
                                        ))}
                                    </select>
                                </p>
                            </Media.Body>
                        </Media>
                    </div>
                )}
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
)(Detail);