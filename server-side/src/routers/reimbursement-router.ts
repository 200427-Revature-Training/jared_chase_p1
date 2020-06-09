import express from 'express';
import * as reimbService from '../services/reimbursement-service';
import { Reimbursement } from '../models/reimbursement';

export const reimbRouter = express.Router();

/*
    http://localhost:3000/reimbursements
    Retrieves an array of reimbursements from database
*/

reimbRouter.get('', async (req, res, next) => {
    console.log('something');
    try{
        const reimbs = await reimbService.getAllReimb();
        //console.log('reimbs' + JSON.stringify([reimbs]));
        res.json(reimbs);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*
    http://localhost:3000/reimbursement/user
    Retrieves all reimbursements for specific user
*/

reimbRouter.get('/:user', async (req, res, next) => {
    const user: string = req.params.user;
    console.log('user here-->' + user);
    let reimbs: Reimbursement[];

    try{
        reimbs = await reimbService.getAllReimbByUser(user);
    }catch (err){
        res.sendStatus(500);
        console.log(err);
        return;
    }

    if(!reimbs) {
        res.sendStatus(404);
    }else{
        res.json(reimbs);
    }
    next();
});

/*
    http://localhost:3000/reimbursement/status
    Retrieves all reimbursements by status
*/

reimbRouter.get('/:status', async (req, res, next) => {
    const status: string = req.params.status;
    console.log('status here--> ' + status);
    let reimbs: Reimbursement[];

    try{
        reimbs = await reimbService.getAllReimbByStatus(status);
    }catch(err){
        res.sendStatus(500);
        console.log(err);
        return;
    }

    if(!reimbs){
        res.sendStatus(404);
    }else{
        res.json(reimbs);
    }
    next();
});

/*
    http://localhost:3000/reimbursement
    Creates new reimbursement
*/

reimbRouter.post('', async (req, res, next) => {
    const reimb = req.body;

    try{
        const newReimb = await reimbService.saveReimb(reimb);
        res.status(201);
        res.json(newReimb);
        next();
    }catch(err){
        res.sendStatus(500);
        console.log(err);
        next();
    }
});

/*
    http://localhost:3000/reimbursement
    Updates existing reimbursement
*/

reimbRouter.patch('', async (req, res, next) => {
    const reimb = req.body;

    try{
        const newReimb = reimbService.updateReimb(reimb);
        if(newReimb) {
            res.json(newReimb);
        }else {
            res.sendStatus(404);
        }
    }catch(err) {
        res.sendStatus(500);
        console.log(err);
    }finally{
        next();
    }
});