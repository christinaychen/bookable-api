<<<<<<< HEAD
import { Venue } from "../models/venue";
import { VenueRepository } from "../repositories/venue.repository";
export declare class VenueController {
    private VenueRepo;
    constructor(VenueRepo: VenueRepository);
    createVenue(Venue: Venue): Promise<Venue>;
=======
import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
export declare class VenueController {
    private venueRepo;
    private ratingRepo;
    constructor(venueRepo: VenueRepository, ratingRepo: RatingRepository);
>>>>>>> f55c82668d9fa03c49cd7fff482c5f6b8a321e1e
}
