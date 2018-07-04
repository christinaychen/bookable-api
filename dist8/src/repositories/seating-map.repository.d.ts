import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { SeatingMap } from '../models/seating-map';
export declare class SeatingMapRepository extends DefaultCrudRepository<SeatingMap, typeof SeatingMap.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
