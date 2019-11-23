import React from 'react';
import { Card, Button, Row, Col } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getProduct, changeStock } from '../actions/products.js'
import { buyProduct } from '../actions/user.js'

class Detail extends React.Component {
    componentDidMount() {
        this.props.getProduct(this.props.match.params.product_id);
    }
    changeStock(id) {
        this.props.product.map(stock => {
            if (stock.id === parseInt(id)) {
                this.props.changeStock(stock);
            }
            return "";
        });
    }
    componentWillUnmount() {
        this.props.changeStock(null);
    }
    buyComplete() {
        this.props.buyProduct(this.props.token, this.props.productStock.id);
        this.props.history.push(`/completeBuy`);
    }
    render() {
        if (this.props.product && !this.props.productStock) {
            this.changeStock(this.props.product[0].id);
        }
        return (
            <div className='Products'>
                {this.props.product && (
                    <Card className="text-center">
                        <Card.Header><b>{this.props.product[0].product.brand}</b> {this.props.product[0].product.name}</Card.Header>
                        <Card.Body>
                            <Row>
                                <Col xs={12} md={6}>
                                    <img
                                        alt="Imagen del producto"
                                        className="img-fluid"
                                        style={{ maxHeight: "400px" }}
                                        src={this.props.productStock ?
                                            this.props.productStock.image
                                            :
                                            this.props.product[0].product.image
                                        }
                                    />
                                </Col>
                                <Col xs={12} md={6}>
                                    <Card.Title>{this.props.productStock ? this.props.productStock.price + " €" : ""}</Card.Title>
                                    <Card.Text>
                                        <select value={this.props.productStock ? this.props.id : ""} onChange={e => { this.changeStock(e.target.value) }}>
                                            {this.props.product.map(stock => {
                                                return (
                                                    <option key={stock.id} value={stock.id} >
                                                        {stock.product_color.name + " " + stock.product_memory.size}
                                                    </option>
                                                )
                                            }

                                            )}
                                        </select>
                                        <br />
                                        {this.props.productStock ?  <span> {this.props.productStock.description} </span>: ""}
                                    </Card.Text>
                                </Col>
                            </Row>

                        </Card.Body>
                        <Card.Footer className="text-muted">
                            {this.props.token ? (
                                this.props.productStock && (
                                    this.props.productStock.stock > 0 ?
                                        <div>
                                            <Button variant="primary" onClick={() => this.buyComplete()}>Comprar</Button>
                                            <br />
                                            <label>Hay {this.props.productStock.stock} unidad{this.props.productStock.stock === 1 ? "" : "es"} en Stock</label>
                                        </div>

                                        :
                                        <div>
                                            <Button variant="primary" disabled>Comprar</Button>
                                            <br />
                                            <label>No hay unidades en Stock</label>
                                        </div>
                                )) : ""}
                        </Card.Footer>
                    </Card>
                )}
            </div>
        );
    }
}
const mapStateToProps = state => ({
    product: state.products.product,
    productStock: state.products.productStock,
    token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
    getProduct: (id) => dispatch(getProduct(id)),
    changeStock: (stock) => dispatch(changeStock(stock)),
    buyProduct: (token, product) => dispatch(buyProduct(token, product))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Detail);