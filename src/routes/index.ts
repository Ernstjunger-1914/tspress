import { Router } from 'express';
import { RequestType } from 'type';

const router: Router = Router();

const indexRouterPath = {
    main: '/'
};

router.get(indexRouterPath.main, ({ req, res, next }: RequestType) => {
    res.json({ "status": "server is running" });
});

export default router;