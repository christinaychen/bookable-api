import { Entity } from '@loopback/repository';
export declare class totalPurchase extends Entity {
    purchaseId?: number;
    customerId: number;
    purchaseDate: Date;
    age: number;
    email: string;
    password: string;
    getId(): any;
}
