import React, { useState } from 'react';
import './home.css';
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom';

export const MGRHomeComponent: React.FC = () => {
    return(
        <div className="main-content">
            <div className="fixed-top">
                <Button as={Link} to="/history" size="lg" className="float-left" variant="outline-light">View My Tickets</Button>
                <Button as={Link} to="/mgr/history" size="lg" className="float-right" variant="outline-light">View All Tickets</Button>
            </div>
            <header>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <h1 className="text-center" >Welcome</h1>
            </header>
            <div>
                <h3 className="text-center" >To your Expense Reimbursement System</h3>
            </div>
            <div className="fixed-bottom">
                {/*<span className="text-left">Submit New Ticket</span>*/}               
                <Button as={Link} to="/newticket" size="lg" className="float-left" variant="outline-light">Submit New Ticket</Button>
                <Button as={Link} to="/" size="lg" className="float-right" variant="outline-light">Log Out</Button>
            </div>
        </div>
    )
}