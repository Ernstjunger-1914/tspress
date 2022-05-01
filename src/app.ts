import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const port = process.env.PORT || 3333;

const indexRouter = require('./routes/index');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', indexRouter);

app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});

module.exports = app;