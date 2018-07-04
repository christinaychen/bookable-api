import { DefaultCrudRepository } from '@loopback/repository';
import { inject } from '@loopback/core';
import { DataSource } from 'loopback-datasource-juggler';
import { Customer } from '../models/customer';

export class CustomerRepository extends DefaultCrudRepository<
  Customer,
  typeof Customer.prototype.id
  >

{

  constructor(@inject('datasources.db') protected datasource: DataSource) {
    super(Customer, datasource);
  }
}
