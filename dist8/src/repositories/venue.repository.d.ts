import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Venue } from '../models/venue';
export declare class VenueRepository extends DefaultCrudRepository<Venue, typeof Venue.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
