"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
const repository_1 = require("@loopback/repository");
const users_repository_1 = require("../repositories/users.repository");
const rest_1 = require("@loopback/rest");
const users_1 = require("../models/users");
const jsonwebtoken_1 = require("jsonwebtoken");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let UsersController = class UsersController {
    constructor(UsersRepo) {
        this.UsersRepo = UsersRepo;
    }
    async registerCustomer(users) {
        if (!users.name || !users.email || !users.password) {
            throw new rest_1.HttpErrors.BadRequest('All fields required');
        }
        let userExists = !!(await this.UsersRepo.count({ email: users.email }));
        if (userExists) {
            throw new rest_1.HttpErrors.BadRequest('User already exists');
        }
        let createdUser = await this.UsersRepo.create(users_1.Users);
        return createdUser;
    }
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "shh");
            return payload;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
        // The user is authenticated and we can process...
    }
    async loginUser(users) {
        if (!users.email || !users.password) {
            throw new rest_1.HttpErrors.Unauthorized('All fields required');
        }
        let userExists = !!(await this.UsersRepo.count({
            and: [
                { email: users.email },
                { password: users.password },
            ],
        }));
        if (!userExists) {
            throw new rest_1.HttpErrors.Unauthorized('Invalid credentials');
        }
        let foundUser = await this.UsersRepo.findOne({
            where: {
                and: [
                    { email: users.email },
                    { password: users.password }
                ]
            },
        });
        let jwt = jsonwebtoken_1.sign({
            users: {
                id: foundUser.id,
                email: foundUser.email
            }
        }, 'shh', {
            issuer: 'auth.sas.upenn.edu',
            audience: 'sas.upenn.edu',
        });
        return {
            token: jwt
        };
    }
};
__decorate([
    rest_1.post("/registration"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "registerCustomer", null);
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], UsersController.prototype, "verifyToken", null);
__decorate([
    rest_1.post("/login"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [users_1.Users]),
    __metadata("design:returntype", Promise)
], UsersController.prototype, "loginUser", null);
UsersController = __decorate([
    __param(0, repository_1.repository(users_repository_1.UsersRepository.name)),
    __metadata("design:paramtypes", [users_repository_1.UsersRepository])
], UsersController);
exports.UsersController = UsersController;
//# sourceMappingURL=users.controller.js.map