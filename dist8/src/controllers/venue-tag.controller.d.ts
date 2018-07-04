import { VenueTagRepository } from "../repositories/venue-tag.repository";
import { VenueRepository } from "../repositories/venue.repository";
export declare class VenueTagController {
    private venueTagRepo;
    private venueRepo;
    constructor(venueTagRepo: VenueTagRepository, venueRepo: VenueRepository);
}
