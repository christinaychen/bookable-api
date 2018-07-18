import { OrderItem } from "../models/order-item";
import { RatingRepository } from "../repositories/rating.repository";
import { PaymentRequest } from "../models/payment-request";
import { OrderItemRepository } from "../repositories/order-item.repository";
export declare class Order_itemController {
    private orderItemRepo;
    private ratingRepo;
    amount: number;
    orderitem: OrderItem;
    source: string;
    constructor(orderItemRepo: OrderItemRepository, ratingRepo: RatingRepository);
    stripePayment(paymentRequest: PaymentRequest, jwt: string, orderItemId: number): Promise<any>;
    createOrder(orderItem: OrderItem): Promise<OrderItem | "reservation already made!">;
}
