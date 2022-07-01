import { Router } from 'express';
import { userRouterMethod } from '../../routes/middlewares/userMiddleware';

const router: Router = Router();
const middleWare = new userRouterMethod();

/**
 * @description path: /user
 */
router.get('/:id', middleWare.get);

export default router;