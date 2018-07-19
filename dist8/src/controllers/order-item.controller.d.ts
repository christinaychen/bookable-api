import { OrderItem } from "../models/order-item";
import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Venue } from "../models/venue";
import { OrderItemRepository } from "../repositories/order-item.repository";
export declare class Order_itemController {
    private orderItemRepo;
    private ratingRepo;
    private venueRepo;
    amount: number;
    orderitem: OrderItem;
    source: string;
    constructor(orderItemRepo: OrderItemRepository, ratingRepo: RatingRepository, venueRepo: VenueRepository);
    getOrderItems(userId: number): Promise<Array<OrderItem>>;
    stripePayment(stripeToken: any, jwt: string, amount: number): Promise<any>;
    addVenue(venue: any): Promise<Venue>;
    createOrder(orderItem: OrderItem): Promise<OrderItem | "reservation already made!">;
}
