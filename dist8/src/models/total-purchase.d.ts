import { Entity } from '@loopback/repository';
export declare class totalPurchase extends Entity {
    purchaseId?: number;
    customerId: number;
    stripeToken: string;
    purchaseDate: Date;
    getId(): any;
}
