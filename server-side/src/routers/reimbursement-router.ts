import express, { response } from 'express';
import * as reimbService from '../services/reimbursement-service';
import { Reimbursement } from '../models/reimbursement';

export const reimbRouter = express.Router();

/*
    http://localhost:3000/reimbursements
    Retrieves an array of people from database
*/

reimbRouter.get('', async (req, res, next) => {
    try{
        const reimbs = await reimbService.getAllReimb();
        res.json(reimbs);
        next();
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*
    http://localhost:3000/reimbursements/user
    Retrieves all reimbursements for specific user
*/

reimbRouter.get('/user', async (req, res, next) => {
    const user = req.params.userFirstName;
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
    http://localhost:3000/reimbursements/status
    Retrieves all reimbursements by status
*/

reimbRouter.get('', async (req, res, next) => {
    const status = req.params.reimbStatus;
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
    http://localhost:3000/reimbursements
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
    http://localhost:3000/reimbursements
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