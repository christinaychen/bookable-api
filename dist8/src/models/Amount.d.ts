import { Entity } from '@loopback/repository';
export declare class Amount extends Entity {
    amountId?: number;
    venueId: number;
    x: number;
    y: string;
    amount: number;
    getId(): any;
}
