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
const customer_repository_1 = require("../repositories/customer.repository");
const rest_1 = require("@loopback/rest");
const customer_1 = require("../models/customer");
const jsonwebtoken_1 = require("jsonwebtoken");
const bcrypt = require("bcrypt");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let CustomerController = class CustomerController {
    constructor(customerRepo) {
        this.customerRepo = customerRepo;
    }
    async registerCustomer(customer) {
        if (!customer.name || !customer.email || !customer.password) {
            throw new rest_1.HttpErrors.BadRequest('All fields required');
        }
        let userExists = !!(await this.customerRepo.count({ email: customer.email }));
        if (userExists) {
            throw new rest_1.HttpErrors.BadRequest('User already exists');
        }
        let hashedPassword = await bcrypt.hash(customer.password, 10);
        var customerToStore = new customer_1.Customer();
        customerToStore.customerId = customer.customerId;
        customerToStore.name = customer.name;
        customerToStore.age = customer.age;
        customerToStore.email = customer.email;
        customerToStore.password = hashedPassword;
        let storedCustomer = await this.customerRepo.create(customerToStore);
        let jwt = jsonwebtoken_1.sign({
            user: {
                id: storedCustomer.id,
                email: storedCustomer.email
            },
        }, 'shh', {
            issuer: 'auth.ix.com',
            audience: 'ix.com',
        });
        return {
            token: jwt,
        };
    }
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "shh");
            return payload;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
    }
    async loginUser(customer) {
        if (!customer.email || !customer.password) {
            throw new rest_1.HttpErrors.Unauthorized('All fields required');
        }
        let userExists = !!(await this.customerRepo.count({
            and: [
                { email: customer.email }
            ],
        }));
        if (!userExists) {
            throw new rest_1.HttpErrors.Unauthorized('Invalid credentials');
        }
        let user = await this.customerRepo.findOne({
            where: {
                and: [
                    { email: customer.email },
                ]
            },
        });
        if (!await bcrypt.compare(customer.password, user.password)) {
            throw new rest_1.HttpErrors.Unauthorized('invalid credentials');
        }
        let jwf = jsonwebtoken_1.sign({
            Customer: {
                id: user.id,
                email: user.email,
                name: user.name
            }
        }, 'shh', {
            issuer: 'auth.ix.co.za',
            audience: 'ix.co.za'
        });
        return {
            token: jwf
        };
    }
};
__decorate([
    rest_1.post("/registration"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "registerCustomer", null);
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], CustomerController.prototype, "verifyToken", null);
__decorate([
    rest_1.post("/login"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_1.Customer]),
    __metadata("design:returntype", Promise)
], CustomerController.prototype, "loginUser", null);
CustomerController = __decorate([
    __param(0, repository_1.repository(customer_repository_1.CustomerRepository.name)),
    __metadata("design:paramtypes", [customer_repository_1.CustomerRepository])
], CustomerController);
exports.CustomerController = CustomerController;
//# sourceMappingURL=customer.controller.js.map