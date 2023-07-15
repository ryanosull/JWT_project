import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';

function LoginModal() {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (

    <div> 
        <Button variant="primary" onClick={handleShow}> Click to Login</Button>

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <Form>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email"placeholder="name@example.com" autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="password" />
                    <br/>
                    <Form.Text className="text-muted">
                        Password must be between 8 and 16 characters and contain at least one number (9), upper case letter (Z), lower case letter (a), and symbol (!). Passwords are case sensitive!
                    </Form.Text>
                </Form.Group>

            </Form>

        </Modal.Body>

        <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>Close</Button>
            <Button variant="primary" onClick={handleClose}>Save Changes</Button>
        </Modal.Footer>

        </Modal>
    </div>

    );
};

export default LoginModal;