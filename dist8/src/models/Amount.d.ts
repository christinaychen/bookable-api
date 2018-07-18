import { Entity } from '@loopback/repository';
export declare class Amount extends Entity {
    amountId?: number;
    venueId: number;
    x: number;
    y: number;
    price: number;
    getId(): any;
}
