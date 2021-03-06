import { RatingRepository } from "../repositories/rating.repository";
export declare class RatingController {
    private ratingRepo;
    constructor(ratingRepo: RatingRepository);
    verifyToken(jwt: string): string | object;
}
