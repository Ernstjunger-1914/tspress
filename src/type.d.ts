import { Request, Response, NextFunction } from 'express';

interface RequestType {
    req: Request;
    res: Response;
    next?: NextFunction;
};
