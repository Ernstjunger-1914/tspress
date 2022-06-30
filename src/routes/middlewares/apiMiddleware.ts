import { Request, Response, NextFunction } from 'express';

export class apiLogic {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.json({
            "hostname": req.hostname,
            "path": req.path,
            "method": req.method,
            "body": req.body
        });
    }
}