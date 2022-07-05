import express, { NextFunction, Response, Request } from 'express';
import dotenv from 'dotenv';
import indexRouter from './routes/controllers/index';
import apiRouter from './routes/controllers/api';
import userRouter from './routes/controllers/user';
import Log from './utils/log';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/api', apiRouter);
app.use('/user', userRouter);

/**
 * @description 501 Error Handler
 */
app.all('*', (req: Request, res: Response, next: NextFunction) => {
    res.status(501).json({
        status: 501,
        Error: "This Method is Not Implemented"
    }).send();
    Log.e(`${req.method} ${req.originalUrl} ${res.statusCode} ${res.statusMessage}`);
});

app.listen(port, () => {
    Log.i(`Server is running on port ${port}`);
});

export default app;