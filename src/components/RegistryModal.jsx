import React from 'react';
import { Modal, Alert, Button, Form } from 'react-bootstrap';

class RegistryModal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password: '',
      error:null
    }
  }

  async registry()  {
    let data = { "name": this.state.name, "email": this.state.email, "password": this.state.password }
    try {
      let result = await this.props.registryUser(data);
      if (result) {
        this.props.onHide()
      } else {
        this.setState({error:"Usuario ya registrado"})
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
            <Form.Group controlId="formBasicname">
              <Form.Label>Nombre</Form.Label>
              <Form.Control required onChange={this.handleChange}
                name="name"
                autoFocus
                type="text"
                placeholder="Introduzca su nombre" />
            </Form.Group>
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
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={this.props.onHide}>Cerrar</Button>
          <Button variant="primary" type="button" onClick={() => { this.registry() }}>
            Registrarse
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}
export default RegistryModal;