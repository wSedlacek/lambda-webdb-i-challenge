import express from 'express';
import { accountRouter } from './routes/account.route';

export const server = express();
server.use(express.json());
server.use('/budget', accountRouter);
