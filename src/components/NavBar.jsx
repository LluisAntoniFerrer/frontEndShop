import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import { Navbar, Nav, Form, FormControl, NavDropdown,Button, DropdownButton, Dropdown } from 'react-bootstrap';
import { connect } from 'react-redux';
import { loginUser, logoutUser, registryUser } from '../actions/auth'
import { FaUser } from "react-icons/fa";
import RegistryModal from "./RegistryModal"
import LoginModal from "./LoginModal"
import "../css/NavBar.css"

class NavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showRegistryModal: false,
            showLoginModal: false
        }
    }
    getNavLinkClass = (path) => {
        return this.props.location.pathname === path ? 'active  bg-dark' : '';
    }
    handleSendMessage(target) {
        target.preventDefault();
        this.props.history.push(`/search/${this.state.text}`);
    }
    render() {
        return (
            <Navbar bg="dark" variant="dark" expand="md">
                <Link to="/"><Navbar.Brand>Tienda Informatica</Navbar.Brand></Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
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
                </Navbar.Collapse>
                {this.props.token ?
                    <DropdownButton drop={"left"} id="bg-vertical-dropdown-3" title={<FaUser />}>
                        <Dropdown.Item as="button" onClick={() => { this.props.logoutUser() }}>Logout</Dropdown.Item>
                        <Link to={"/mybills"} className="dropdown-item">Mis pedidos</Link>
                    </DropdownButton> :
                    <Button  onClick = {()=>{ this.setState({showLoginModal: true})}}>
                        Login
                        <LoginModal
                            show={this.state.showLoginModal}
                            onLoginHide={() => this.setState({ showLoginModal: false })}
                            registry={() => this.setState({ showRegistryModal: true })}
                            loginUser={this.props.loginUser}
                        />
                        <RegistryModal
                            show={this.state.showRegistryModal}
                            onHide={() => this.setState({ showRegistryModal: false })}
                            registryUser={this.props.registryUser}
                        />
                    </Button>
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
    logoutUser: () => dispatch(logoutUser()),
    registryUser: (user) => dispatch(registryUser(user))
})
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
