import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { VenueTag } from '../models/venue-tag';
export declare class VenueTagRepository extends DefaultCrudRepository<VenueTag, typeof VenueTag.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
