import { SeatingMap } from "../models/seating-map";
import { SeatingMapRepository } from "../repositories/seating-map.repository";
export declare class SeatingMapController {
    private SeatingMapRepo;
    constructor(SeatingMapRepo: SeatingMapRepository);
    verifyToken(jwt: string): string | object;
    createSeatingMap(seatingMap: SeatingMap): Promise<SeatingMap>;
}
