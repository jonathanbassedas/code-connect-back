import { PoolConnection } from 'mysql2/promise';

export interface Codigo {
  id: number;
  title: string;
}

export class CodigoModel {
  constructor(private readonly connection: PoolConnection) {}

  async getAll(): Promise<Codigo[]> {
    const [result] = await this.connection.query('SELECT * FROM codigo');
    return result as Codigo[];
  }
}
