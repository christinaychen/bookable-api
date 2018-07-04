import { Venue } from "../models/venue";
import { VenueRepository } from "../repositories/venue.repository";
export declare class VenueController {
    private VenueRepo;
    constructor(VenueRepo: VenueRepository);
    createVenue(Venue: Venue): Promise<Venue>;
}
