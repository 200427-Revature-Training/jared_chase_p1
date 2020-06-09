import express from 'express';
import { db } from './daos/db';
import bodyParser from 'body-parser';
import { reimbRouter } from './routers/reimbursement-router';
import { userRouter } from './routers/user-router';

const app = express();

const port = process.env.PORT || 3000;

app.set('port', port);

app.use(bodyParser.json());

app.use((req, res, next) => {
    next();
});

app.use('/reimbursement', reimbRouter);
app.use('/user', userRouter);

process.on('unhandledRejection', () => {
    db.end().then(() => {
        console.log('unhandledRejection');
        console.log('Database pool closed');
    });
});

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});