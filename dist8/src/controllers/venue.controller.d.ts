import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Venue } from "../models/venue";
import { VenueTagRepository } from "../repositories/venue-tag.repository";
export declare class VenueController {
    private venueRepo;
    private ratingRepo;
    private venueTagRepo;
    constructor(venueRepo: VenueRepository, ratingRepo: RatingRepository, venueTagRepo: VenueTagRepository);
    registerVenue(venue: Venue): Promise<Venue>;
    getVenue(yelpVenueId: string): Promise<Venue>;
    getAllVenueNames(): Promise<string[]>;
    verifyToken(jwt: string): string | object;
}
