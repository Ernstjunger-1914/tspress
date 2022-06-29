import { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router();

const indexRouterPath = {
    main: '/'
};

router.get(indexRouterPath.main, (req: Request, res: Response, next: NextFunction) => {
    res.json({ "status": "server is running" });
});

export default router;