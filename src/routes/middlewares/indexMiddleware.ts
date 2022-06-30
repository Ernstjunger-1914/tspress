import { Request, Response, NextFunction } from 'express';

export class indexLogic {
    get = (req: Request, res: Response, next: NextFunction) => {
        res.json({ "status": "server is running" });
    }
}