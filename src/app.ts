import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.json({"status": "server is running"});
});

app.listen(3333, () => {
    console.log("server is running on port 3333");
});