import React from 'react';
import { connect } from 'react-redux';

class CompleteBuy extends React.Component {
    render() {
        return (
            <div className='lastBuy'>
                {this.props.lastBuy ? (
                    <div>
                        <h1>Felicidades por su compra</h1><br />
                        <img
                            alt="Imagen del producto"
                            className="img-fluid"
                            src={this.props.lastBuy.image}
                        /><br />
                        <b>{`${this.props.lastBuy.product.brand} ${this.props.lastBuy.product.name}`}</b><h3>{this.props.lastBuy.price}</h3>
                        <p>{this.props.lastBuy.description}</p>
                    </div>
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