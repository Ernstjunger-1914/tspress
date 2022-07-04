import { NextFunction, Response, Request } from 'express';
import Log from '../../utils/log';

export class indexRouterMethod {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.json({ "status": "server is running" }).status(200).send();
        Log.i(`${req.method} ${req.originalUrl} ${JSON.stringify(req.route)} \nbody: ${JSON.stringify(req.body)}`);
    }
}