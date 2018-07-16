import { OrderItem } from "../models/order-item";
import { RatingRepository } from "../repositories/rating.repository";
import { OrderItemRepository } from "../repositories/order-item.repository";
export declare class Order_itemController {
    private orderItemRepo;
    private ratingRepo;
    constructor(orderItemRepo: OrderItemRepository, ratingRepo: RatingRepository);
    createOrder(orderItem: OrderItem): Promise<OrderItem | "reservation already made!">;
    makeReservation(orderItem: OrderItem): Promise<OrderItem>;
}
