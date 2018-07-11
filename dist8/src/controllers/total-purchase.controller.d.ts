import { TotalPurchaseRepository } from "../repositories/total-purchase.repository";
import { totalPurchase } from "../models/total-purchase";
export declare class TotalPurchaseController {
    private totalPurchaseRepo;
    constructor(totalPurchaseRepo: TotalPurchaseRepository);
    verifyToken(jwt: string): string | object;
    purchaseItems(finalPurchase: totalPurchase): Promise<totalPurchase>;
<<<<<<< HEAD
    stripePayment(): Promise<any>;
=======
>>>>>>> a92d0f4cd489c027d2be017134ef47a0452b4635
}
