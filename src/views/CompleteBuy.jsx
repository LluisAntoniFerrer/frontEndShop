import React from 'react';
import { connect } from 'react-redux';
import { Row , Col} from 'react-bootstrap';
import "../css/CompleteBuy.css"

class CompleteBuy extends React.Component {
    render() {
        return (
            <div className='lastBuy'>
                {this.props.lastBuy ? (
                    
                    <Row className="noMargin">
                        <Col lg={12} >
                            <h1 className="complete-buy-title">Felicidades por su compra</h1><br />
                        </Col>
                            <Col md={4}>
                                <img
                                    alt="Imagen del producto"
                                    className="img-fluid"
                                    style={{ maxHeight: "400px" }}
                                    src={this.props.lastBuy.image}
                                /><br />
                            </Col>
                            <Col md={8}>
                                <b>{`${this.props.lastBuy.product.brand} ${this.props.lastBuy.product.name}`}</b><h3>{this.props.lastBuy.price+" €"}</h3>
                                <p>{this.props.lastBuy.description}</p>
                            </Col>
                    </Row>
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