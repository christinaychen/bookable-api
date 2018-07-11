import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { OrderItem } from '../models/order-item';

export class OrderItemRepository extends DefaultCrudRepository<
  OrderItem,
  typeof OrderItem.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(OrderItem, datasource);
  }
}
