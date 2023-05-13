import { Router } from 'express';
import controller from '../controllers/controller';

const router = Router();

router.get('/status', controller.getStatus);
router.get('/time/:hour', controller.getTime);

export default router;