import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { SeatingMap } from '../models/seating-map';

export class SeatingMapRepository extends DefaultCrudRepository<
  SeatingMap,
  typeof SeatingMap.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(SeatingMap, datasource);
  }
}
