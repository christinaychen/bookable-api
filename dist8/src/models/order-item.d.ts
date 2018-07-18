import { Entity } from '@loopback/repository';
export declare class OrderItem extends Entity {
    orderItemId?: number;
    venueId: number;
    purchaseId: number;
    customerId: number;
    x: number;
    y: number;
    time: string;
    amount: number;
    token: string;
    getId(): any;
    getRating(): any;
    getVenueId(): number;
}
