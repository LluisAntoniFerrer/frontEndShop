import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, NavDropdown, DropdownButton, Button, Dropdown, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser, logoutUser } from '../actions/auth'
import { FaUser } from "react-icons/fa";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            text: '',
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
    handleSendMessage(target) {
        target.preventDefault();
        this.props.history.push(`/search/${this.state.text}`);
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to="/"><Navbar.Brand>Tienda Informatica</Navbar.Brand></Link>

                <Nav className="mr-auto">
                    <Link to="/" className={this.getNavLinkClass("/") + " nav-link"}>Home</Link>
                    <NavDropdown title="Productos" id="collasible-nav-dropdown">
                        {this.props.productsTypes && this.props.productsTypes.map(type => (
                            <Link key={type.id} to={"/productos/" + type.id}
                                className={this.getNavLinkClass("/productos/" + type.id) + " dropdown-item"}>
                                {type.name}
                            </Link>

                        ))}
                    </NavDropdown>
                </Nav>
                <Form onSubmit={(ev) => { this.handleSendMessage(ev) }} inline>
                    <FormControl type="text" placeholder="Search" onChange={e => { this.setState({ text: e.target.value }) }} className="mr-sm-2" />
                </Form>
                {this.props.token ?
                    <DropdownButton drop={"left"} id="bg-vertical-dropdown-3" title={<FaUser />}>
                        <Dropdown.Item as="button" onClick={() => { this.props.logoutUser() }}>Logout</Dropdown.Item>
                        <Link to={"/mybills"} className="dropdown-item">Mis pedidos</Link>
                    </DropdownButton> :
                    <DropdownButton drop={"left"} title="Login" id="bg-vertical-dropdown-3">
                        <form onSubmit={this.handleSubmit} style={{ width: "28vw", padding: "3vh" }}>
                            {this.props.error ? <Alert variant="danger">{"Usuario o contraseña incorrectos"}</Alert> : ""}
                            <Form.Group controlId="email">
                                <Form.Label>Email</Form.Label>
                                <Form.Control required onChange={this.handleChange}
                                    name="email"
                                    autoFocus
                                    type="email"
                                />
                            </Form.Group>
                            <Form.Group controlId="password" >
                                <Form.Label>Password</Form.Label>
                                <Form.Control required
                                    onChange={this.handleChange}
                                    name="password"
                                    type="password"
                                />
                            </Form.Group>
                            <Button block type="submit">
                                Login
                            </Button>
                        </form>
                        <label>Registrarse</label>
                    </DropdownButton>
                }
            </Navbar>
        )
    }
};
NavBar = withRouter(NavBar);

const mapStateToProps = state => ({
    productsTypes: state.init.productsTypes,
    token: state.auth.token,
    error: state.auth.error
})

const mapDispatchToProps = dispatch => ({
    loginUser: (user) => dispatch(loginUser(user)),
    logoutUser: () => dispatch(logoutUser())
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
