import React, { useState, useEffect } from 'react';
import { Table, Button, DropdownButton, Dropdown, Form, FormControl, Modal, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './home.css';
import * as reimbRemote from '../remotes/reimb-remote';
import { Reimbursement } from '../models/reimbursement';

export const MGRTicketHistoryComponent: React.FC = () => {
    const [reimbs, setReimbs] = useState<Reimbursement[]>([]);
    const [reimbStatus, setReimbStatus] = useState(false);

    const [show, setShow] = useState(false);
    const [mgrShow, mgrSetShow] = useState(false);

    const modalOpen = () => setShow(true);
    const modalClose = () => setShow(false);

    const mgrModalOpen = () => mgrSetShow(true);
    const mgrModalClose = () => mgrSetShow(false);

    useEffect(() => {
        reimbRemote.getAllReimbs().then(reimbs => {
            setReimbs(reimbs);
        })
    }, []);

    return(
        <div>
            <header>
                <h1>Ticket History</h1>
                <hr></hr>
            </header>
            <div className="ticket-table">
                <Table className="table" striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th colSpan={3}>
                                <Button as={Link} to="/mgr/home" variant="info">Return to Home</Button>
                            </th>
                            <th colSpan={4}>
                            {/*<Form inline>
                                <Button variant="info">Search</Button>
                                <FormControl type="text" placeholder="Search by first name" className="mr-sm-2" />
                            </Form>*/}
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th colSpan={2}>   
                                <DropdownButton drop="left" variant="info" id="dropdown-item-button" title=" Sort By: ">
                                    <Dropdown.Item as="button">Date- Newest</Dropdown.Item>
                                    <Dropdown.Item as="button">Date- Oldest</Dropdown.Item>
                                    <Dropdown.Item as="button">Pending</Dropdown.Item>
                                    <Dropdown.Item as="button">Approved</Dropdown.Item>
                                    <Dropdown.Item as="button">Denied</Dropdown.Item>
                                </DropdownButton>                               
                            </th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Submitted On</th>
                            <th>Description</th>
                            <th>Receipt</th>
                            <th>Status</th>
                            <th>Resolved On</th>
                            <th>Resolved By</th>
                            <th>Update Ticket</th>
                        </tr>
                    </thead>
                    <tbody>
                        {reimbs.map(r => {
                            return (<tr key={r.reimbID}>
                                <th scope="row">{r.reimbID}</th>
                                <td>{r.reimbAuthor}</td>
                                <td>{'$' + r.reimbAmount}</td>
                                <td>{r.reimbTypeID}</td>
                                <td>{typeof r.reimbSubmitted == 
                                    'string' ? r.reimbSubmitted : 
                                    r.reimbSubmitted.toDateString()}</td>
                                <td>
                                <Button variant="outline-info" onClick={modalOpen} >Expand</Button>
                                <Modal className="modal-text" show={show} onHide={modalClose}>
                                    <Modal.Header>
                                        <Modal.Title>Description</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>{r.reimbDescription}</Modal.Body>
                                </Modal>
                            </td>
                                <td>{r.reimbReceipt}</td>
                                <td>{r.reimbStatusID}</td>
                                <td>{typeof r.reimbResolved == 
                                    'string' ? r.reimbResolved : 
                                    '---'}</td>
                                <td>{r.reimbResolver ? r.reimbResolver : '---'}</td>
                                <td>
                                <Button variant="outline-info" onClick={mgrModalOpen} >Update</Button>
                                </td>
                            </tr>)
                        })}

                        {/*<tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>$200</td>
                            <td>Food</td>
                            <td>2020-06-10</td>
                            <td>
                                <Button variant="outline-info" onClick={modalOpen} >Expand</Button>
                                <Modal className="modal-text" show={show} onHide={modalClose}>
                                    <Modal.Header>
                                        <Modal.Title>Description</Modal.Title>
                                    </Modal.Header>
                                    <Modal.Body>alan excitement printable instruction yards long voting watched formal customize sentences tree freedom two here print practitioners sufficiently telling drop meaningful repair immediately statement picks crazy reached vision kennedy fig indexes metabolism hearings reasonable discretion december reduces highways trail across stewart population flags muscles picture diary geek astrology hearing commissions computed providing soap computation readers summary acres drops depends handbook messages clocks specific batch metres willing enable</Modal.Body>
                                </Modal>
                            </td>
                            <td>receipt link</td>
                            <td>Pending</td>
                            <td></td>
                            <td></td>
                            <td>
                                <Button variant="outline-info" onClick={mgrModalOpen} >Update</Button>
                            </td>
                        </tr>*/}
                    </tbody>
                </Table>

                <Modal className="modal-text" show={mgrShow} onHide={mgrModalClose}>
                <Form className="modal-form">
                    <Modal.Header>
                        <Modal.Title>Update Ticket</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                            <Form.Group className="align-items-left">
                                <Form.Label>Resolver's Name</Form.Label>
                                <Form.Control readOnly defaultValue="FirstName LastName" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Resolved On</Form.Label>
                                <Form.Control type="date" />
                            </Form.Group>

                            <Form.Group>
                                <Form.Label>Updated Status</Form.Label>
                                <Form.Control as="select" defaultValue="Pending">
                                    <option>Pending</option>
                                    <option>Approved</option>
                                    <option>Denied</option>
                                </Form.Control>
                            </Form.Group>
                    </Modal.Body>
                    <Modal.Footer>
                    <Button variant="secondary" onClick={mgrModalClose}>
                        Cancel
                    </Button>
                    <Button variant="info" onClick={mgrModalClose}>
                        Submit
                    </Button>
                    </Modal.Footer>
                </Form>
                </Modal>

            </div>
        </div>
    )
}