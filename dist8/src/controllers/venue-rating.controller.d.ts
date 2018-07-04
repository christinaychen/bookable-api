import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { VenueRatingRepository } from "../repositories/venue-rating.repository";
import { Rating } from "../models/rating";
import { Venue } from "../models/venue";
import { VenueRating } from "../models/venue-rating";
export declare class VenueRatingController {
    private venueRepo;
    private ratingRepo;
    private venueRatingRepo;
    constructor(venueRepo: VenueRepository, ratingRepo: RatingRepository, venueRatingRepo: VenueRatingRepository);
    getRatings(venue: Venue): Promise<Array<Rating>>;
    calculateRating(venue: Venue): Promise<VenueRating>;
}
