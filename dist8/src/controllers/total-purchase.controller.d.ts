import { TotalPurchaseRepository } from "../repositories/total-purchase.repository";
import { OrderItemRepository } from "../repositories/order-item.repository";
export declare class TotalPurchaseController {
    private totalPurchaseRepo;
    private orderItemRepo;
    constructor(totalPurchaseRepo: TotalPurchaseRepository, orderItemRepo: OrderItemRepository);
    verifyToken(jwt: string): string | object;
}
