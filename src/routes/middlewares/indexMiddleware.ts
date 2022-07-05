import { NextFunction, Response, Request } from 'express';
import Log from '../../utils/log';

export class indexRouterMethod {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.status(200).json({ status: "server is running" }).send();
        Log.i(`${req.method} ${req.originalUrl} ${res.statusCode} ${res.statusMessage} ${JSON.stringify(req.route)} \nbody: ${JSON.stringify(req.body)}`);
    }
}