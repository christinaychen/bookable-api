import { Entity } from "@loopback/repository";
export declare class Venue extends Entity {
    VenueId: number;
    Name: string;
    Type: string;
    Address: number;
    MapId: number;
    Tags: string;
    Latitude: string;
    Longitude: string;
    Rating: string;
    getPrice(): any;
    getId(): any;
    getName(): string;
}
