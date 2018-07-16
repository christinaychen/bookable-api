import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { VenueRating } from '../models/venue-rating';

export class VenueRatingRepository extends DefaultCrudRepository<
  VenueRating,
  typeof VenueRating.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(VenueRating, datasource);
  }
}
