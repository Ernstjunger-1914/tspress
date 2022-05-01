import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({"status": "server is running"});
});

module.exports = router;