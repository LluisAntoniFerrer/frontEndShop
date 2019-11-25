import React from 'react';
import { connect } from 'react-redux';
import { Row, Col, Table } from 'react-bootstrap';
import "../css/CompleteBuy.css"

class CompleteBuy extends React.Component {
    render() {
        let total = 0;
        this.props.lastBuy ? this.props.lastBuy.map(product => (total += parseInt(product.price))) : total = 0;
        return (
            <div className='lastBuy'>
                {this.props.lastBuy ? (
                    this.props.lastBuy.length === 1 ?
                        <Row className="noMargin">
                            <Col lg={12} >
                                <h1 className="complete-buy-title">Felicidades por su compra</h1><br />
                            </Col>
                            <Col md={4}>
                                <img
                                    alt="Imagen del producto"
                                    className="img-fluid"
                                    style={{ maxHeight: "400px" }}
                                    src={this.props.lastBuy[0].image}
                                /><br />
                            </Col>
                            <Col md={8}>
                                <b>{`${this.props.lastBuy[0].product.brand} ${this.props.lastBuy[0].product.name}`}</b><h3>{this.props.lastBuy[0].price + " €"}</h3>
                                <p>{this.props.lastBuy[0].description}</p>
                            </Col>
                        </Row>
                        : (
                            <Row className="noMargin">
                                <Col lg={12} >
                                    <h1 className="complete-buy-title">Felicidades por su compra</h1><br />
                                </Col>
                                <Col md={12}>
                                    <Table responsive striped bordered hover variant="light">
                                        <thead>
                                            <tr>
                                                <th>Marca</th>
                                                <th>Producto</th>
                                                <th>Color</th>
                                                <th>Memoria</th>
                                                <th>Precio</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.lastBuy.map(product => (
                                                <tr key={product.id}>
                                                    <td>{product.product.brand}</td>
                                                    <td>{product.product.name}</td>
                                                    <td>{product.product_color.name}</td>
                                                    <td >{product.product_memory.size}</td>
                                                    <td>{product.price} €</td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                    <span style={{ float: "right" }}>Total: <b>{total} €</b></span>
                                </Col>
                            </Row>
                        )
                ) : ""}

            </div>
        );
    }
}

const mapStateToProps = state => ({
    lastBuy: state.user.lastBuy
})

const mapDispatchToProps = dispatch => ({
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CompleteBuy);