import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import {getBills} from '../actions/user'

class MyBills extends React.Component {
    componentDidMount() {
        console.log("hola")
        this.props.getBills(this.props.token);
    }
    render() {
        return (
            <div className='bills'>
                <h1>Mis Pedidos</h1>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                            <th>Nº Pedido</th>
                            <th>Marca</th>
                            <th>Producto</th>
                            <th>Color</th>
                            <th>Memoria</th>
                            <th>Fecha</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.bills.map(bill => (
                            <tr key={bill.bill_id}>
                                <td>{bill.bill_id}</td>
                                <td>{bill.products_stock.product.brand}</td>
                                <td>{bill.products_stock.product.name}</td>
                                <td>{bill.products_stock.product_color.name}</td>
                                <td>{bill.products_stock.product_memory.name}</td>
                                <td>{bill.create_at}</td>
                            </tr>
                        ))}
                    </tbody>
                </Table>

            </div>
        );
    }
}

const mapStateToProps = state => ({
    token: state.auth.token,
    bills: state.user.bills
})

const mapDispatchToProps = dispatch => ({
    getBills: (token) => dispatch(getBills(token))
})

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyBills);