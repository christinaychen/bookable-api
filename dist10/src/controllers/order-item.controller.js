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
const order_item_1 = require("../models/order-item");
const repository_1 = require("@loopback/repository");
const rating_repository_1 = require("../repositories/rating.repository");
const rest_1 = require("@loopback/rest");
const order_item_repository_1 = require("../repositories/order-item.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let Order_itemController = class Order_itemController {
    constructor(orderItemRepo, ratingRepo) {
        this.orderItemRepo = orderItemRepo;
        this.ratingRepo = ratingRepo;
    }
    async createOrder(orderItem) {
        if (!orderItem.venueId) {
            throw new rest_1.HttpErrors.BadRequest('Venue Required');
        }
        /*
        let orderExists: boolean = !!(await this.orderItemRepo.count({ orderItemId: orderItem.Id }));
    
        if (orderExists) {
          throw new HttpErrors.BadRequest('Specific Venue already exists');
        }*/
        var venues = await this.orderItemRepo.find();
        var specificVenue = [];
        for (let venue of venues) {
            if (venue.venueId == orderItem.orderItemId) {
                specificVenue.push(venue);
            }
        }
        for (let reservation of specificVenue) {
            if (reservation.x == orderItem.x && reservation.y == orderItem.y) {
                return "reservation already made!";
            }
        }
        return await this.orderItemRepo.create(orderItem);
    }
    async makeReservation(orderItem) {
        if (!orderItem.venueId) {
            throw new rest_1.HttpErrors.BadRequest('Venue Required');
        }
        /*
        let orderExists: boolean = !!(await this.orderItemRepo.count({ orderItemId: orderItem.Id }));
    
        if (orderExists) {
          throw new HttpErrors.BadRequest('Specific Venue already exists');
        }*/
        return await this.orderItemRepo.create(orderItem);
    }
};
__decorate([
    rest_1.post("/makeOrder"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_item_1.OrderItem]),
    __metadata("design:returntype", Promise)
], Order_itemController.prototype, "createOrder", null);
__decorate([
    rest_1.post("/makem"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [order_item_1.OrderItem]),
    __metadata("design:returntype", Promise)
], Order_itemController.prototype, "makeReservation", null);
Order_itemController = __decorate([
    __param(0, repository_1.repository(order_item_repository_1.OrderItemRepository.name)),
    __param(1, repository_1.repository(rating_repository_1.RatingRepository.name)),
    __metadata("design:paramtypes", [order_item_repository_1.OrderItemRepository,
        rating_repository_1.RatingRepository])
], Order_itemController);
exports.Order_itemController = Order_itemController;
//# sourceMappingURL=order-item.controller.js.map