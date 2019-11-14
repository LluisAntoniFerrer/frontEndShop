import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton, Button,Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser,logoutUser } from '../actions/auth'
import { FaUser } from "react-icons/fa";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }
    }
    handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value

        this.setState({
            [field]: value
        });
    }
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active  bg-dark' : '';
    }

    handleSubmit = (event) => {
        event.preventDefault();

        let data = { "email": this.state.email, "password": this.state.password }
        this.props.loginUser(data);
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Navbar.Brand>Tienda Informatica</Navbar.Brand>
                <Nav className="mr-auto">
                    <Link to="/" className={this.getNavLinkClass("/") + " nav-link"}>Home</Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        {this.props.products.map(product => (
                            <Link key={product.id} to={"/productos/" + product.id} className={this.getNavLinkClass("/productos/" + product.id) + " dropdown-item"}>{product.name}</Link>

                        ))}
                    </NavDropdown>
                </Nav>
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />

                </Form>

                {this.props.token.length > 1 ?
                    <DropdownButton drop={"left"} id="bg-vertical-dropdown-3" title={<FaUser />}>
                        <Dropdown.Item as="button" onClick={()=>{this.props.logoutUser()}}>Logout</Dropdown.Item>
                        <Dropdown.Item as="button">Facturas</Dropdown.Item>
                    </DropdownButton> :
                    <DropdownButton drop={"left"} title="Login" id="bg-vertical-dropdown-3">
                        <form onSubmit={this.handleSubmit} style={{ width: "28vw", padding: "3vh" }}>
                            <Form.Group controlId="email" bsSize="large">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required onChange={this.handleChange}
                                    name="email"
                                    autoFocus
                                    type="email"
                                />
                            </Form.Group>
                            <Form.Group controlId="password" bsSize="large">
                                <Form.Label>Password</Form.Label>
                                <Form.Control required
                                    onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                />
                            </Form.Group>
                            <Button block bsSize="large" type="submit">
                                Login
                            </Button>
                        </form>
                    </DropdownButton>
                }
            </Navbar>
        )
    }
};
NavBar = withRouter(NavBar);

const mapStateToProps = state => ({
    products: state.home.products,
    token: state.auth.token
})

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
