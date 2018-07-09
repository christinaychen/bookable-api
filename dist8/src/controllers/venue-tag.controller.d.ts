import { VenueTagRepository } from "../repositories/venue-tag.repository";
import { VenueRepository } from "../repositories/venue.repository";
import { VenueTag } from "../models/venue-tag";
export declare class VenueTagController {
    private venueTagRepo;
    private venueRepo;
    constructor(venueTagRepo: VenueTagRepository, venueRepo: VenueRepository);
    addTag(VenueTag: VenueTag): Promise<VenueTag>;
    getAllTagsForVenue(venueId: number): Promise<Array<String>>;
    getAllVenuesWithTag(tagType: string): Promise<Array<number>>;
}
