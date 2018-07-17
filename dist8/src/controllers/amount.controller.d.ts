import { AmountRepository } from "../repositories/amount.repository";
import { Amount } from "../models/amount";
export declare class AmountController {
    private amountRepo;
    constructor(amountRepo: AmountRepository);
    registerAmount(Amount: Amount): Promise<Amount>;
    verifyToken(jwt: string): string | object;
}
