import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { VenueTag } from '../models/venue-tag';

export class VenueTagRepository extends DefaultCrudRepository<
  VenueTag,
  typeof VenueTag.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(VenueTag, datasource);
  }
}
