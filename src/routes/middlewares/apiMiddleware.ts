import { NextFunction, Response, Request } from 'express';
import Log from '../../utils/log';

export class apiRouterMethod {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.json({
            hostname: req.hostname,
            path: req.originalUrl,
            method: req.method,
            status: res.statusCode,
            body: req.body
        });
        Log.i(`${req.method} ${req.originalUrl} ${res.statusCode} ${res.statusMessage} ${JSON.stringify(req.route)} \nbody: ${JSON.stringify(req.body)}`);
    }
}