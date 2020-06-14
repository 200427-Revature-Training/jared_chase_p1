import React, { useState } from 'react';
import { Table, Button, DropdownButton, Dropdown, Modal } from 'react-bootstrap';

export const TicketHistoryComponent: React.FC = () => {
    const [show, setShow] = useState(false);

    const modalOpen = () => setShow(true);
    const modalClose = () => setShow(false);

    return(
        <div>
            <header>
                <h1>My Ticket History</h1>
                <hr></hr>
            </header>
            <div className="ticket-table">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th colSpan={2}>
                                <Button variant="info">Return to Home</Button>
                            </th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th>   
                                <DropdownButton drop="left" variant="info" id="dropdown-item-button" title=" Sort Tickets:">
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
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
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
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>$200</td>
                            <td>Food</td>
                            <td>2020-06-10</td>
                            <td>
                                <Button variant="outline-info">Expand</Button>
                            </td>
                            <td>receipt link</td>
                            <td>Pending</td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>$200</td>
                            <td>Food</td>
                            <td>2020-06-10</td>
                            <td>
                                <Button variant="outline-info">Expand</Button>
                            </td>
                            <td>receipt link</td>
                            <td>Pending</td>
                            <td></td>
                            <td></td>
                        </tr>
                    </tbody>
                </Table>
            </div>
        </div>
    )
}

{/*<th><Button size="sm" variant="info">Return to Home</Button></th>

<DropdownButton drop="left" size="sm" variant="info" id="dropdown-item-button" title=" Sort By: ">
    <Dropdown.Item as="button">Date- Newest</Dropdown.Item>
    <Dropdown.Item as="button">Date- Oldest</Dropdown.Item>
    <Dropdown.Item as="button">Pending</Dropdown.Item>
    <Dropdown.Item as="button">Approved</Dropdown.Item>
    <Dropdown.Item as="button">Denied</Dropdown.Item>
</DropdownButton>
</th>*/}