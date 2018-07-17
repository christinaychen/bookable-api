import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Amount } from '../models/Amount';
export declare class AmountRepository extends DefaultCrudRepository<Amount, typeof Amount.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
