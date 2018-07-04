import { CustomerRepository } from "../repositories/customer.repository";
import { Customer } from '../models/customer';
export declare class CustomerController {
    private customerRepo;
    constructor(customerRepo: CustomerRepository);
    registerCustomer(customer: Customer): Promise<Customer>;
    loginUser(customer: Customer): Promise<Customer | null>;
}
