require('dotenv').config();

import express from 'express';
import * as userService from '../services/user-service';
import * as userDao from '../daos/user-dao';
import { User } from '../models/user';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

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

/*
    http://localhost:3000/user
    Saves user securely with hashed password
*/

userRouter.post('', async (req, res, next) => {
    //const user = req.body;
    console.log('something');
    try{
        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.ersPassword, salt);
        console.log('salt---> ' + salt);
        console.log('hashed password---> ' + hashedPassword);

        const user: any = {
            ersUsername: req.body.ersUsername,
            ersPassword: hashedPassword,
            userFirstName: req.body.userFirstName,
            userLastName: req.body.userLastName,
            userEmail: req.body.userEmail,
            userRoleID: req.body.userRoleID
        } 

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

/*
    http://localhost:3000/user/login
    Post request to log someone in
*/

userRouter.post('/login', async (req, res, next) => {
    try {
        const user = await userDao.getUserByUsername(req.body.ersUsername);
        if(!user) {
            console.log('no user');
            res.sendStatus(400);
        }
        if(await bcrypt.compare(req.body.ersPassword, user.ersPassword)) {
            console.log('Logged in!!');
            res.status(200);

            const username = req.body.ersUsername;
            const accessToken = jwt.sign(username, process.env.ACCESS_TOKEN_SECRET)
            res.json(accessToken);
            console.log('accessToken --> ' + accessToken);
        }else {
            console.log('Access denied');
            res.send('Access denied')
        }
    }catch(err) {
        res.sendStatus(500);
        console.log(err);
    }   
});
