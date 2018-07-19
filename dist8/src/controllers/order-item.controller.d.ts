import { OrderItem } from "../models/order-item";
import { RatingRepository } from "../repositories/rating.repository";
import { OrderItemRepository } from "../repositories/order-item.repository";
export declare class Order_itemController {
    private orderItemRepo;
    private ratingRepo;
    amount: number;
    orderitem: OrderItem;
    source: string;
    constructor(orderItemRepo: OrderItemRepository, ratingRepo: RatingRepository);
    getOrderItems(userId: number): Promise<OrderItem[]>;
    stripePayment(stripeToken: any, jwt: string, amount: number): Promise<any>;
    createOrder(orderItem: OrderItem): Promise<OrderItem | "reservation already made!">;
}
