import React from 'react';
import { connect } from 'react-redux';
import { Table, Button } from 'react-bootstrap';
import { getBills } from '../actions/user'
import BillModal from "../components/BillModal"

class MyBills extends React.Component {
    state = {
        showModal: false,
        products: []
    }
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
                    <>
                        <Table striped bordered hover variant="dark">
                            <thead>
                                <tr>
                                    <th>Nº Pedido</th>
                                    <th>Fecha</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.props.bills.reverse().map(bill => (
                                    <tr key={bill.id}>
                                        <td>{bill.id}</td>
                                        <td>{this.formatDate(bill.create_at)}</td>
                                        <td><Button onClick={() => this.setState({ showModal: true, products: bill.products_stocks })} variant="light">Ver productos</Button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <BillModal
                            show={this.state.showModal}
                            onHide={() => this.setState({ showModal: false })}
                            products={this.state.products}
                        />
                    </>
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