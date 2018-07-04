import { SeatingMap } from "../models/seating-map";
import { SeatingMapRepository } from "../repositories/seating-map.repository";
export declare class SeatingMapController {
    private SeatingMapRepo;
    constructor(SeatingMapRepo: SeatingMapRepository);
    createSeatingMap(seatingMap: SeatingMap): Promise<SeatingMap>;
    MakeReservation(Row: number, Column: number): Promise<string>;
}
