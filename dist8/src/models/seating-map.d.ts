import { Entity } from "@loopback/repository";
export declare class SeatingMap extends Entity {
    MapId: number;
    VenueId: number;
    VenueType: string;
    Layout: number[][];
}
