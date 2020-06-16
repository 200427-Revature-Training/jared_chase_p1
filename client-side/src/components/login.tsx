import React from 'react';
import { Button, Form, Container } from 'react-bootstrap';
import './login.css';
import { Link } from 'react-router-dom';

export const LoginComponent: React.FC = () => {
    return(
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div>
                <h1>Log In</h1>
                <Form>
                    <Form.Group controlId="formBasicUsername">
                        <Form.Label>Username</Form.Label>
                        <Form.Control size="lg" type="username" placeholder="Enter username" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control size="lg" type="password" placeholder="Enter password" />
                    </Form.Group>
                    <Button as={Link} to="/home" id="login-button" size="lg" variant="outline-light" type="submit">
                        Continue
                    </Button>
                </Form>
            </div>
        </div>
    )
}