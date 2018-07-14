import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { OrderItem } from '../models/order-item';
export declare class OrderItemRepository extends DefaultCrudRepository<OrderItem, typeof OrderItem.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
