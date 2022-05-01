import express from 'express';

const router = express.Router();

router.get('/', (req, res, next) => {
    res.json({ "status": "API" });
});

module.exports = router;