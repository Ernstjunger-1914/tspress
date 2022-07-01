import { NextFunction, Response, Request } from 'express';
import Log from '../../utils/log';

export class userRouterMethod {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.json({
            "user_id": req.params.id
        });
        Log.i(`${req.method} ${req.url} ${JSON.stringify(req.route)} \nuser_id: ${req.params.id}`);
    }
}