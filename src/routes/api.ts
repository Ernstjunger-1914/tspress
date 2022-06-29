import { Request, Response, NextFunction, Router } from 'express';

const router: Router = Router();

const apiRouterPath = {
    main: '/'
};

router.get(apiRouterPath.main, (req: Request, res: Response, next: NextFunction) => {
    res.json({
        "hostname": req.hostname,
        "path": req.path,
        "method": req.method
    });
});

export default router;