import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Rating } from '../models/rating';
export declare class RatingRepository extends DefaultCrudRepository<Rating, typeof Rating.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
