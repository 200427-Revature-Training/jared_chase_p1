import React from 'react';
import { Table, Button, DropdownButton, Dropdown, Form, FormControl } from 'react-bootstrap';
import './home.css';

export const MGRTicketHistoryComponent: React.FC = () => {
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
                                <Button variant="info">Return to Home</Button>
                            </th>
                            <th colSpan={4}>
                            <Form inline>
                                <Button variant="info">Search</Button>
                                <FormControl type="text" placeholder="Search by first name" className="mr-sm-2" />
                            </Form>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
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
                            <td>
                                <Button variant="outline-info">Update</Button>
                            </td>
                        </tr>
                    </tbody>
                </Table>
                {/*<div id="bottom-bar" className="fixed-bottom">              
                    <Button size="lg" className="float-left" variant="outline-light">Back to Home</Button>
                    <Button size="lg" className="float-right" variant="outline-light">Log Out</Button>
                </div>*/}
            </div>
        </div>
    )
}