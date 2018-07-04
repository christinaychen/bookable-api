<<<<<<< HEAD
import { SeatingMap } from "../models/seating-map";
=======
>>>>>>> f55c82668d9fa03c49cd7fff482c5f6b8a321e1e
import { SeatingMapRepository } from "../repositories/seating-map.repository";
export declare class SeatingMapController {
    private SeatingMapRepo;
    constructor(SeatingMapRepo: SeatingMapRepository);
<<<<<<< HEAD
    createSeatingMap(seatingMap: SeatingMap): Promise<SeatingMap>;
    MakeReservation(Row: number, Column: number): Promise<string>;
=======
>>>>>>> f55c82668d9fa03c49cd7fff482c5f6b8a321e1e
}
