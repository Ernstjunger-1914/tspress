import { Router } from 'express';
import { apiLogic } from '../middlewares/apiMiddleware';

const router: Router = Router();
const middleWare = new apiLogic();

/**
 * @description path: /api
 */
router.get('/', middleWare.get);

export default router;