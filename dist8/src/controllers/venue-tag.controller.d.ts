import { VenueTagRepository } from "../repositories/venue-tag.repository";
import { VenueRepository } from "../repositories/venue.repository";
export declare class VenueTagController {
    private venueTagRepo;
    private venueRepo;
    constructor(venueTagRepo: VenueTagRepository, venueRepo: VenueRepository);
    verifyToken(jwt: string): string | object;
    getAllTagsForVenue(venueId: number): Promise<Array<String>>;
    getAllVenuesWithTag(tagType: string): Promise<Array<number>>;
}
