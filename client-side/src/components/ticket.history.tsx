import React from 'react';
import { Table, Button, DropdownButton, Dropdown, Container } from 'react-bootstrap';

export const TicketHistoryComponent: React.FC = () => {
    return(
        <div>
            <header>
                <h1>Ticket History</h1>
                <hr></hr>
            </header>
            <div className="ticket-table">
                <Table striped bordered hover variant="light">
                    <thead>
                        <tr>
                            <th className="top-row">
                                <div>
                                    <Button size="sm" variant="info">Return to Home</Button>
                                </div>
                                <div>
                                    <DropdownButton drop="left" size="sm" variant="info" id="dropdown-item-button" title=" Sort By: ">
                                        <Dropdown.Item as="button">Date- Newest</Dropdown.Item>
                                        <Dropdown.Item as="button">Date- Oldest</Dropdown.Item>
                                        <Dropdown.Item as="button">Pending</Dropdown.Item>
                                        <Dropdown.Item as="button">Approved</Dropdown.Item>
                                        <Dropdown.Item as="button">Denied</Dropdown.Item>
                                    </DropdownButton>
                                </div>
                                <div>
                                    <p>sbvirbi</p>
                                </div>
                            </th>
                        </tr>
                        <tr>
                            <th>#</th>
                            <th>Author</th>
                            <th>Amount</th>
                            <th>Type</th>
                            <th>Submitted On</th>
                            <th>Resolved On</th>
                            <th>Description</th>
                            <th>Receipt</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>$200</td>
                            <td>Food</td>
                            <td>2020-06-10</td>
                            <td>---</td>
                            <td>
                                <Button variant="outline-info">Expand</Button>
                            </td>
                            <td>receipt link</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>$200</td>
                            <td>Food</td>
                            <td>2020-06-10</td>
                            <td>---</td>
                            <td>
                                <Button variant="outline-info">Expand</Button>
                            </td>
                            <td>receipt link</td>
                            <td>Pending</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>Mark</td>
                            <td>$200</td>
                            <td>Food</td>
                            <td>2020-06-10</td>
                            <td>---</td>
                            <td>
                                <Button variant="outline-info">Expand</Button>
                            </td>
                            <td>receipt link</td>
                            <td>Pending</td>
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