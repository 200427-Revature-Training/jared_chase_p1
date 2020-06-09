import express from 'express';
import * as userService from '../services/user-service';
import { User } from '../models/user';

export const userRouter = express.Router();

/*
    http://localhost:3000/user
    Retrieves an array of people from database
*/

userRouter.get('', async (req, res, next) => {
    try{
        const users = await userService.getAllUsers();
        res.json(users);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
    }
});

/*
    http://localhost:3000/user/username
    Retrieves a user by their username
*/

userRouter.get('/:username', async (req, res, next) => {
    const username: string = req.params.usernme;
    let user: User;

    try{
        user = await userService.getUserByUsername(username);
    }catch(err) {
        console.log(err);
        res.sendStatus(500);
        return;
    }

    //return (user ? res.json(user) : res.sendStatus(404));

    if(!user) {
        res.sendStatus(404);
    }else{
        res.json(user);
    }
    next();
});

userRouter.post('', async (req, res, next) => {
    const user = req.body;

    try{
        const newUser = await userService.saveUser(user);
        res.status(201);
        res.json(newUser);
        next();
    }catch(err) {
        res.sendStatus(500);
        console.log(err);
        next();
    }
});