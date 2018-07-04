import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { VenueRating } from '../models/venue-rating';
export declare class VenueRatingRepository extends DefaultCrudRepository<VenueRating, typeof VenueRating.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
