import { Router } from 'express';
import { apiLogic } from '../middlewares/apiMiddlewares';

const router: Router = Router();
const middleWare = new apiLogic();

const apiRouterPath = {
    main: '/'
};

router.get(apiRouterPath.main, middleWare.get);

export default router;