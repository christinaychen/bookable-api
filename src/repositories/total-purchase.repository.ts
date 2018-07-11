import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { totalPurchase } from '../models/total-purchase';

export class TotalPurchaseRepository extends DefaultCrudRepository<
  totalPurchase,
  typeof totalPurchase.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(totalPurchase, datasource);
  }
}
