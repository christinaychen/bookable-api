import { SeatingMapRepository } from "../repositories/seating-map.repository";
import { OrderItemRepository } from "../repositories/order-item.repository";
import { VenueRepository } from "../repositories/venue.repository";
export declare class SeatingMapController {
    private SeatingMapRepo;
    private orderItemRepo;
    private venueRepo;
    constructor(SeatingMapRepo: SeatingMapRepository, orderItemRepo: OrderItemRepository, venueRepo: VenueRepository);
    verifyToken(jwt: string): string | object;
    updateMap(venueId: number): Promise<number[][]>;
}
