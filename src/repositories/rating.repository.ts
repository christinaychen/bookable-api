import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Rating } from '../models/rating';

export class RatingRepository extends DefaultCrudRepository<
  Rating,
  typeof Rating.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Rating, datasource);
  }
}
