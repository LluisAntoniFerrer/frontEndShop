import React from 'react';
import { Modal, Table, Button } from 'react-bootstrap';

class BillModal extends React.Component {
    render() {
        let total = 0;
        this.props.products.map(product => (total += parseInt(product.price)))
        return (
            <Modal
                show={this.props.show}
                onHide={this.props.onHide}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header closeButton>
                    <Modal.Title id="contained-modal-title-vcenter">
                        Factura
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
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
                            {this.props.products.map(product => (
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
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Cerrar</Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default BillModal;