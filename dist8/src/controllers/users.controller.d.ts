import { UsersRepository } from "../repositories/users.repository";
import { Users } from '../models/users';
export declare class UsersController {
    private UsersRepo;
    constructor(UsersRepo: UsersRepository);
    registerCustomer(users: Users): Promise<Users>;
    verifyToken(jwt: string): string | object;
    loginUser(users: Users): Promise<{
        token: string;
    }>;
}
