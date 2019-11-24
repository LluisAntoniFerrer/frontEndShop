import React from 'react';
import { connect } from 'react-redux';
import { Table } from 'react-bootstrap';
import { getBills } from '../actions/user'

class MyBills extends React.Component {
    componentDidMount() {
        this.props.getBills(this.props.token);
    }
    formatDate(date) {
        let dt = new Date(date)
        return `
        ${dt.getDate().toString().padStart(2, '0')}/
        ${(dt.getMonth() + 1).toString().padStart(2, '0')}/
        ${ dt.getFullYear().toString().padStart(4, '0')} 
        ${dt.getHours().toString().padStart(2, '0')}:
        ${dt.getMinutes().toString().padStart(2, '0')}
        `
    }
    render() {
        return (
            <div className='bills'>
                <h1>Mis Pedidos</h1>
                {this.props.bills &&
                    <Table striped bordered hover variant="dark">
                        <thead>
                            <tr>
                                <th>Nº Pedido</th>
                                <th>Marca</th>
                                <th>Producto</th>
                                <th>Color</th>
                                <th  className="d-none d-sm-table-cell">Memoria</th>
                                <th className="d-none d-md-table-cell">Fecha</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.props.bills.reverse().map(bill => (
                                <tr key={bill.bill_id}>
                                    <td>{bill.bill_id}</td>
                                    <td>{bill.products_stock.product.brand}</td>
                                    <td>{bill.products_stock.product.name}</td>
                                    <td>{bill.products_stock.product_color.name}</td>
                                    <td className="d-none d-sm-table-cell">{bill.products_stock.product_memory.size}</td>
                                    <td className="d-none d-md-table-cell">{this.formatDate(bill.create_at)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                }
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