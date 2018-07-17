import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Venue } from '../models/venue';

export class VenueRepository extends DefaultCrudRepository<
  Venue,
  typeof Venue.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Venue, datasource);
  }
}
