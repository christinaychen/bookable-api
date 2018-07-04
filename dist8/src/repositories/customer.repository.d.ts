import { DefaultCrudRepository } from '@loopback/repository';
import { DataSource } from 'loopback-datasource-juggler';
import { Customer } from '../models/customer';
export declare class CustomerRepository extends DefaultCrudRepository<Customer, typeof Customer.prototype.id> {
    protected datasource: DataSource;
    constructor(datasource: DataSource);
}
