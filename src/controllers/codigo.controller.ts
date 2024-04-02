import { Request, Response } from 'express';

import { CodigoModel } from '@/models';

export class CodigoController {
  constructor(private readonly codigoModel: CodigoModel) {}

  async getAll(_req: Request, res: Response) {
    const codigos = await this.codigoModel.getAll();
    if (codigos.length === 0) {
      return res.status(404).json({
        data: [],
        status: 'error',
        message: 'No movies found',
      });
    }
    return res.status(200).json({
      data: codigos,
      status: 'success',
    });
  }
}
