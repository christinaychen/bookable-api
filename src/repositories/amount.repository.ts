import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Amount } from '../models/Amount';

export class AmountRepository extends DefaultCrudRepository<
  Amount,
  typeof Amount.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Amount, datasource);
  }
}
