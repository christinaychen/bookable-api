import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Rating } from "../models/rating";
import { Venue } from "../models/venue";
export declare class VenueController {
    private venueRepo;
    private ratingRepo;
    constructor(venueRepo: VenueRepository, ratingRepo: RatingRepository);
    getRatings(): Promise<Array<Rating>>;
    calculateRating(venue: Venue): Promise<number>;
}
