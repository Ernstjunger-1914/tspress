import { Request, Response, NextFunction } from 'express';
import Log from '../../utils/log';

export class indexLogic {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.json({ "status": "server is running" }).status(200).send();
        Log.i(`${req.method} ${req.url} ${JSON.stringify(req.route)} \nbody: ${JSON.stringify(req.body)}`);
    }
}