import { Entity } from "@loopback/repository";
export declare class SeatingMap extends Entity {
    MapId: number;
    VenueId: number;
    VenueType: string;
    Layout: Array<Array<number>>;
    Rows: number;
    Columns: number;
    fill(): void;
    printArray(): void;
    checkReserved(Row: number, Column: number): boolean;
}
