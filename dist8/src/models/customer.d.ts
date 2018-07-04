import { Entity } from '@loopback/repository';
export declare class Customer extends Entity {
    customerId?: number;
    name: string;
    age: number;
    email: string;
    password: string;
    getId(): any;
}
