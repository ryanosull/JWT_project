// LoginModal.js

import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Alert from 'react-bootstrap/Alert';

function LoginModal({currentUser, setCurrentUser}) {

    // modal ↓
    const [show, setShow] = useState(false);

    const handleClose = () => {    //not for login
        setShow(false)
        resetForm()       //resets form inputs when modal is closed
    }

    const handleShow = () => setShow(true);
    // modal ↑


    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const [errors, setErrors] = useState([])

    const resetForm = () => {
        setEmail("")
        setPassword("")
    };

    const handleLogin = (e) => {

        e.preventDefault()

        let loginInfo = {      //loginInfo object
            email: email,
            password: password,
        };

        setEmail("")     //reset of state
        setPassword("")  //reset of state

        if (errors.length === 0) {
        fetch('/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Accept: 'application/json'
            },
            body: JSON.stringify(loginInfo)
        })
        .then(resp => resp.json())
        // .then(resp => {
        //     if (!resp.ok) {
        //         throw new Error('Network response was NOT ok')
        //     }
        //     return resp.json();
        // })
        .then(user => {
            if (!user.errors) {
                localStorage.uid = user.uid
                setCurrentUser(user.id)
                window.alert(`User # ${user.id} successfully logged in!`)
                handleClose()
            } else setErrors(user.errors)
        })
        .catch(errors =>{
            window.alert('oops, an error:', errors)
        })
    }
    };

    // console.log('LM currentUser:', currentUser) //leaving in for display purposes

    return (

    <div> 
        <Button variant="primary" onClick={handleShow} size="lg" >Log in</Button>

        <Modal show={show} onHide={handleClose}>

        <Modal.Header closeButton>
            <Modal.Title>Enter your login info below.</Modal.Title>
        </Modal.Header>

        <Modal.Body>

            <Form onSubmit={handleLogin}>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address:</Form.Label>
                    <Form.Control onChange={(e) => setEmail(e.target.value)} name="email" value={email} 
                    type="email"placeholder="name@example.com" autoFocus/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control onChange={(e) => setPassword(e.target.value)} name="password" value={password} 
                    type="password" placeholder="password" minLength="8" maxLength="16" />
                    <br/>
                    <Form.Text className="text-muted">
                        Passwords must be between 8 and 16 characters and contain at least one number (9), upper case letter (Z), lower case letter (a), and symbol (!). Passwords are case sensitive!
                    </Form.Text>
                </Form.Group>

                <Modal.Footer>
                    <Button variant="secondary"  onClick={handleClose}>Close</Button>
                    <Button variant="primary" type="submit">Log in</Button>
                </Modal.Footer>

                {errors && errors.map((error, index) => (
                    <Alert key={index} variant="danger">{error}</Alert>))}

            </Form>

        </Modal.Body>


        </Modal>
    </div>

    );
};

export default LoginModal;

//note that devtools will display the following message:

//Uncaught (in promise) Error: A listener indicated an asynchronous response by returning true, but the message channel closed before a response was received

// but this is caused by Chrome extensions - see: https://stackoverflow.com/questions/72494154/a-listener-indicated-an-asynchronous-response-by-returning-true-but-the-messag

//you can test this by experimenting in incognito mode - no error present in incognito