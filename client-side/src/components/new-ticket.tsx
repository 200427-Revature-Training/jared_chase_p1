import React from 'react';
import { Form, Button } from 'react-bootstrap';

export const NewTicketComponent: React.FC = () => {
    return(
        <div>
            <header>
                <h1>Submit New Ticket</h1>
                <hr></hr>
            </header>
            <div>
                <Form>
                    <Form.Row>
                        <Form.Group className="col-6 row-item" controlId="formGridName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control readOnly defaultValue="FirstName LastName" />
                        </Form.Group>

                        <Form.Group className="col-6 row-item" controlId="formGridDate">
                            <Form.Label>Today's Date</Form.Label>
                            <Form.Control type="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group className="col-6 row-item" controlId="formGridType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control as="select" defaultValue="Select type">
                                <option>Select type</option>
                                <option>Lodging</option>
                                <option>Travel</option>
                                <option>Food</option>
                                <option>Other</option>
                            </Form.Control>
                        </Form.Group>

                        <Form.Group className="col-6 row-item" controlId="formGridAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group className="Col" controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="Col" controlId="formGridZip">
                        <Form.File id="exampleFormControlFile1" label="Receipt" />
                    </Form.Group>

                    <Button variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className="fixed-bottom">              
                    <Button size="lg" className="float-left" variant="outline-light">Back to Home</Button>
                    <Button size="lg" className="float-right" variant="outline-light">Log Out</Button>
                </div>
            </div>
        </div>
    )
}