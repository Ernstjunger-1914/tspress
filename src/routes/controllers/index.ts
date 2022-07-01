import { Router } from 'express';
import { indexRouterMethod } from '../middlewares/indexMiddleware';

const router: Router = Router();
const middleWare = new indexRouterMethod();

/**
 * @description path: /
 */
router.get('/', middleWare.get);

export default router;