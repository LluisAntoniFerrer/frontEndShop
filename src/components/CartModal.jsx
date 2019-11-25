import React from 'react';
import { connect } from 'react-redux';
import { Modal, Alert, Button, Table } from 'react-bootstrap';
import { showCartModal,deleteFromCart,deleteAllCart } from '../actions/cart'
import { buyProduct } from '../actions/user.js'
import { withRouter } from "react-router-dom";

class CartModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null
        }
    }

    async buyCart() {
        try {
            let result = await this.props.buyProduct(this.props.token, this.props.cart);
            if (result) {
                this.props.deleteAllCart()
                this.props.showCartModal(false)
                this.props.history.push(`/completeBuy`);
            } else {
                this.setState({ error: "Fallo en la compra" })
            }
        } catch (error) {
            console.log(error)
        }
    }
    deleteProduct(id){
        this.props.deleteFromCart(id);
    }
    render() {
        let total = 0;
        this.props.cart.map(product => (total += parseInt(product.price)))
        return (
            <Modal
                show={this.props.showCart}
                onHide={() => this.props.showCartModal(false)}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Carrito de compra
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.error ? <Alert variant="danger">{this.state.error}</Alert> : ""}
                    <Table responsive striped bordered hover variant="light">
                        <thead>
                            <tr>
                                <th>Marca</th>
                                <th>Producto</th>
                                <th>Color</th>
                                <th>Memoria</th>
                                <th>Precio</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.cart.map(product => (
                                <tr key={product.id}>
                                    <td>{product.product.brand}</td>
                                    <td>{product.product.name}</td>
                                    <td>{product.product_color.name}</td>
                                    <td >{product.product_memory.size}</td>
                                    <td>{product.price} €</td>
                                    <td><span onClick={()=> this.deleteProduct(product.id)} title={"Eliminar"} style={{cursor:"pointer",color:"red"}}>X</span></td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <span style={{float:"right"}}>Total: <b>{total} €</b></span>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={() => this.props.showCartModal(false)}>Cerrar</Button>
                    {this.props.cart.length > 0 ?
                        <Button variant="primary" type="button" onClick={() => { this.buyCart() }}>Comprar</Button>:
                        <Button variant="primary" type="button" disabled>Comprar</Button>
                    }
                </Modal.Footer>
            </Modal>
        );
    }
}
const mapStateToProps = state => ({
    token: state.auth.token,
    cart: state.cart.cart,
    showCart: state.cart.showCart,
})

const mapDispatchToProps = dispatch => ({
    showCartModal: (show) => dispatch(showCartModal(show)),
    buyProduct: (token,products) => dispatch(buyProduct(token,products)),
    deleteAllCart: () => dispatch(deleteAllCart()),
    deleteFromCart: (id) => dispatch(deleteFromCart(id))
})
export default  withRouter(connect(
    mapStateToProps,
    mapDispatchToProps
)(CartModal));