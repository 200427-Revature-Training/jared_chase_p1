import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as reimbRemote from '../remotes/reimb-remote';
import { Reimbursement } from '../models/reimbursement';

export const NewTicketComponent: React.FC = () => {
    const [inputName, setInputName] = useState(0);
    const [inputDate, setInputDate] = useState(' ');
    const [inputType, setInputType] = useState(0);
    const [inputAmount, setInputAmount] = useState(0);
    const [inputDescription, setInputDescription] = useState(' ');
    const [resolved, setResolved] = useState('null');
    const [receipt, setReceipt] = useState('link to picture');
    const [statusID, setStatusID] = useState(1);
    const [resolver, setResolver] = useState(null);


    const addTicket = async () => {
        const payload = {
            reimbAuthor: inputName,
            reimbAmount: inputAmount,
            reimbSubmitted: inputDate,
            reimbResolved: resolved,
            reimbDescription: inputDescription,
            reimbTypeID: inputType,
            reimbReceipt: receipt,
            reimbStatusID: statusID,
            //reimbResolver: resolver
        };

        await reimbRemote.saveReimb(payload);
        setInputName(0);
        setInputDate(' ');
        setInputType(0);
        setInputAmount(0);
        setInputDescription(' ');
    }

    const convertType = (type: string) => {
        switch(type.toLowerCase()) {
            case 'Lodging':
                return 1;
            case 'Travel':
                return 2;
            case 'Food':
                return 3;
            case 'Other':
                return 4;
            default:
                return 4;
        }
    }

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
                            <Form.Label>ID#</Form.Label>
                            <Form.Control value={inputName} onChange={(e) => setInputName(+e.target.value)} defaultValue="Enter your ID" />
                        </Form.Group>

                        <Form.Group className="col-6 row-item" controlId="formGridDate">
                            <Form.Label>Today's Date</Form.Label>
                            <Form.Control value={inputDate} onChange={(e) => setInputDate(e.target.value)} type="date" />
                        </Form.Group>
                    </Form.Row>

                    <Form.Row>
                        <Form.Group className="col-6 row-item" controlId="formGridType">
                            <Form.Label>Type</Form.Label>
                            <Form.Control value={inputType} onChange={(e) => setInputType(convertType(e.target.value))} />
                            <Form.Text className="text-muted">
                            Please enter 'Lodging', 'Travel', 'Food', or 'Other'.
                            </Form.Text>
                        </Form.Group>

                        <Form.Group className="col-6 row-item" controlId="formGridAmount">
                            <Form.Label>Amount</Form.Label>
                            <Form.Control value={inputAmount} onChange={(e) => setInputAmount(+e.target.value)} />
                        </Form.Group>
                    </Form.Row>

                    <Form.Group className="Col" controlId="formGridDescription">
                        <Form.Label>Description</Form.Label>
                        <Form.Control value={inputDescription} onChange={(e) => setInputDescription(e.target.value)} as="textarea" rows={3} />
                    </Form.Group>

                    <Form.Group className="Col" controlId="formGridZip">
                        <Form.File id="exampleFormControlFile1" label="Receipt" />
                    </Form.Group>

                    <Button onClick={() => addTicket()} variant="info" type="submit">
                        Submit
                    </Button>
                </Form>
                <div className="fixed-bottom">              
                    <Button as={Link} to="/home" size="lg" className="float-left" variant="outline-light">Back to Home</Button>
                    <Button as={Link} to="/" size="lg" className="float-right" variant="outline-light">Log Out</Button>
                </div>
            </div>
        </div>
    )
}