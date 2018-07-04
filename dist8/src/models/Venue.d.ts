import { Entity } from "@loopback/repository";
export declare class Venue extends Entity {
    VenueId: number;
    Name: string;
    Type: string;
    Address: number;
    MapId: number;
    Latitude: string;
    Longitude: string;
    Rating: number;
    getPrice(): any;
    getId(): number;
    getName(): string;
}
