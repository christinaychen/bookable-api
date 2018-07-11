import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Venue } from "../models/venue";
export declare class VenueController {
    private venueRepo;
    private ratingRepo;
    constructor(venueRepo: VenueRepository, ratingRepo: RatingRepository);
    registerVenue(venue: Venue): Promise<Venue>;
    verifyToken(jwt: string): string | object;
}
