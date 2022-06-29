import express, { Router } from 'express';
import { RequestType } from 'type';

const router: Router = Router();

const apiRouterPath = {
    main: '/'
};

router.get(apiRouterPath.main, ({ req, res, next }: RequestType) => {
    res.json({ "path": "API" });
});

export default router;