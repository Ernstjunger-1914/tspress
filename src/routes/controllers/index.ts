import { Router } from 'express';
import { indexLogic } from '../middlewares/indexMiddleware';

const router: Router = Router();
const middleWare = new indexLogic();

/**
 * @description path: /
 */
router.get('/', middleWare.get);

export default router;