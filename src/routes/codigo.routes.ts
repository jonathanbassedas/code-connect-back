import { Router } from 'express';
import { PoolConnection } from 'mysql2/promise';

import { CodigoController } from '@/controllers';
import { CodigoModel } from '@/models';

export const createCodigoRouter = (connection: PoolConnection): Router => {
  const codigoRouter = Router();
  const codigoModel = new CodigoModel(connection);
  const codigoController = new CodigoController(codigoModel);

  codigoRouter.get('/codigo', (req, res) => codigoController.getAll(req, res));

  return codigoRouter;
};

export default createCodigoRouter;
