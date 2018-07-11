import { TotalPurchaseRepository } from "../repositories/total-purchase.repository";
import { totalPurchase } from "../models/total-purchase";
export declare class TotalPurchaseController {
    private totalPurchaseRepo;
    constructor(totalPurchaseRepo: TotalPurchaseRepository);
    verifyToken(jwt: string): string | object;
    purchaseItems(finalPurchase: totalPurchase): Promise<totalPurchase>;
}
