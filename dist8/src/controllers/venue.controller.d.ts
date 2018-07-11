import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
export declare class VenueController {
    private venueRepo;
    private ratingRepo;
    constructor(venueRepo: VenueRepository, ratingRepo: RatingRepository);
    verifyToken(jwt: string): string | object;
}
