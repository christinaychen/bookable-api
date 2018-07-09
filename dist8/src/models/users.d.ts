import { Entity } from '@loopback/repository';
export declare class Users extends Entity {
    usersId?: number;
    name: string;
    age: number;
    email: string;
    password: string;
    getId(): any;
}
