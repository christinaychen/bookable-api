import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { totalPurchase } from '../models/total-purchase';
export declare class TotalPurchaseRepository extends DefaultCrudRepository<totalPurchase, typeof totalPurchase.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
