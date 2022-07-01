import { Router } from 'express';
import { apiRouterMethod } from '../middlewares/apiMiddleware';

const router: Router = Router();
const middleWare = new apiRouterMethod();

/**
 * @description path: /api
 */
router.get('/', middleWare.get);

export default router;