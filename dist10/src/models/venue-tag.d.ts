import { Entity } from '@loopback/repository';
export declare class VenueTag extends Entity {
    tagType: string;
    venueId: number;
    tagId: number;
    getVenueId(): number;
}
