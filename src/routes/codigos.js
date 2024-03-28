import { Router } from 'express';

import { fetchAll } from '../controllers/codigos.js';

const router = Router();

router.get('/', /* auth, */ fetchAll);

export default router;
