import { Request, Response, NextFunction } from 'express';
import Log from '../../utils/log';

export class apiLogic {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.json({
            "hostname": req.hostname,
            "path": req.path,
            "method": req.method,
            "body": req.body
        });
        Log.i(`${req.method} ${req.url} ${JSON.stringify(req.route)} \nbody: ${JSON.stringify(req.body)}`);
    }
}