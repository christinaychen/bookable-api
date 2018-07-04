import { Entity } from "@loopback/repository";
export declare class SeatingMap extends Entity {
    MapId: number;
    VenueId: number;
    VenueType: string;
<<<<<<< HEAD
    Layout: Array<Array<number>>;
    Rows: number;
    Columns: number;
    fill(): void;
    printArray(): void;
    checkReserved(Row: number, Column: number): boolean;
=======
    Layout: number[][];
>>>>>>> f55c82668d9fa03c49cd7fff482c5f6b8a321e1e
}
