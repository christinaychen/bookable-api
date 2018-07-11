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
const total_purchase_repository_1 = require("../repositories/total-purchase.repository");
const repository_1 = require("@loopback/repository");
const total_purchase_1 = require("../models/total-purchase");
const jsonwebtoken_1 = require("jsonwebtoken");
const rest_1 = require("@loopback/rest");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let TotalPurchaseController = class TotalPurchaseController {
    constructor(totalPurchaseRepo) {
        this.totalPurchaseRepo = totalPurchaseRepo;
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
    async purchaseItems(finalPurchase) {
        return await this.totalPurchaseRepo.create(finalPurchase);
    }
};
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], TotalPurchaseController.prototype, "verifyToken", null);
__decorate([
    rest_1.post("/purchase"),
    __param(0, rest_1.param.query.string("finalPurchase")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [total_purchase_1.totalPurchase]),
    __metadata("design:returntype", Promise)
], TotalPurchaseController.prototype, "purchaseItems", null);
TotalPurchaseController = __decorate([
    __param(0, repository_1.repository(total_purchase_repository_1.TotalPurchaseRepository.name)),
    __metadata("design:paramtypes", [total_purchase_repository_1.TotalPurchaseRepository])
], TotalPurchaseController);
exports.TotalPurchaseController = TotalPurchaseController;
//# sourceMappingURL=total-purchase.controller.js.map