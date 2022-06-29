import express from 'express';
import dotenv from 'dotenv';
import Log from './utils/log';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

const indexRouter = require('./routes/index');
const apiRouter = require('./routes/api');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);
app.use('/api', apiRouter);

/**
 * @description 존재하지 않는 경로에 접근 시, 메인 페이지로 redirect.
 */
app.all('*', (_, res) => {
    res.redirect('/');
});

app.listen(port, () => {
    Log.i(`Server is running on port ${port};`);
});

module.exports = app;