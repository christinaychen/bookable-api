import { Entity } from '@loopback/repository';
export declare class VenueRating extends Entity {
    venueRatingId?: number;
    venueId: number;
    ratingValue: number;
    getId(): any;
    getRating(): number;
    getVenueId(): number;
}
