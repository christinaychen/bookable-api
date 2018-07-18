import { SeatingMapRepository } from "../repositories/seating-map.repository";
import { OrderItemRepository } from "../repositories/order-item.repository";
import { VenueRepository } from "../repositories/venue.repository";
import { AmountRepository } from "../repositories/amount.repository";
export declare class SeatingMapController {
    private SeatingMapRepo;
    private orderItemRepo;
    private venueRepo;
    private amountRepo;
    constructor(SeatingMapRepo: SeatingMapRepository, orderItemRepo: OrderItemRepository, venueRepo: VenueRepository, amountRepo: AmountRepository);
    verifyToken(jwt: string): string | object;
    updateMap(venueId: number): Promise<number[][]>;
}
