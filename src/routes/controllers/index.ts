import { Router } from 'express';
import { indexLogic } from '../middlewares/indexMiddlewares';

const router: Router = Router();
const middleWare = new indexLogic();

const indexRouterPath = {
    main: '/'
};

router.get(indexRouterPath.main, middleWare.get);

export default router;