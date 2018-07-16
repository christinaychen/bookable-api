import { Entity } from '@loopback/repository';
export declare class Rating extends Entity {
    ratingId?: number;
    customerId: number;
    venueId: number;
    ratingValue: number;
    getId(): any;
    getRating(): number;
    getVenueId(): number;
}
