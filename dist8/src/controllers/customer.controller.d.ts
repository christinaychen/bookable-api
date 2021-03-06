import { CustomerRepository } from "../repositories/customer.repository";
import { Customer } from '../models/customer';
export declare class CustomerController {
    private customerRepo;
    constructor(customerRepo: CustomerRepository);
    registerCustomer(customer: Customer): Promise<{
        token: string;
    }>;
    verifyToken(jwt: string): string | object;
    getBusinesses(latitude: number, longitude: number, radius: number): Promise<{
        body: any;
    }>;
    getUser(jwt: string): Promise<any>;
    loginUser(customer: Customer): Promise<{
        token: string;
    }>;
}
