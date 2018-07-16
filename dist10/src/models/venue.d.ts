import { Entity } from "@loopback/repository";
export declare class Venue extends Entity {
    venueId?: number;
    name: string;
    type: string;
    address: string;
    mapId: number;
    latitude: string;
    longitude: string;
    rating: number;
    column: number;
    row: number;
    getPrice(): any;
    getId(): any;
    getName(): any;
}
