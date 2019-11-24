import React from 'react';
import { Modal, Alert, Button, Form } from 'react-bootstrap';

class RegistryModal extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            error: null
        }
    }

    async login() {
        let data = { "email": this.state.email, "password": this.state.password }
        try {
            let result = await this.props.loginUser(data);
            if (result) {
                this.props.onHide()
            } else {
                this.setState({ error: "Email o contraseña incorrecta" })
            }
        } catch (error) {
            console.log(error)
        }
    }
    handleChange = (event) => {
        const field = event.target.name;
        const value = event.target.value

        this.setState({
            [field]: value
        });
    }
    render() {
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
                        Registro
        </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.error ? <Alert variant="danger">{this.state.error}</Alert> : ""}
                    <Form>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email</Form.Label>
                            <Form.Control required onChange={this.handleChange}
                                name="email"
                                autoFocus
                                type="email"
                                placeholder="Introduzca email" />
                        </Form.Group>
                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control required onChange={this.handleChange}
                                name="password"
                                type="password"
                                placeholder="Contraseña" />
                        </Form.Group>
                    </Form>
                    <label className="label-link" onClick={() => {
                        this.props.registry();
                        this.props.onHide();
                    }
                    }>Registrarse</label>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={this.props.onHide}>Cerrar</Button>
                    <Button variant="primary" type="button" onClick={() => { this.login() }}>
                        Logearse
          </Button>
                </Modal.Footer>
            </Modal>
        );
    }
}
export default RegistryModal;