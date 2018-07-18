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
const rest_1 = require("@loopback/rest");
const repository_1 = require("@loopback/repository");
const seating_map_repository_1 = require("../repositories/seating-map.repository");
const jsonwebtoken_1 = require("jsonwebtoken");
const order_item_repository_1 = require("../repositories/order-item.repository");
const venue_repository_1 = require("../repositories/venue.repository");
const amount_repository_1 = require("../repositories/amount.repository");
let SeatingMapController = class SeatingMapController {
    constructor(SeatingMapRepo, orderItemRepo, venueRepo, amountRepo) {
        this.SeatingMapRepo = SeatingMapRepo;
        this.orderItemRepo = orderItemRepo;
        this.venueRepo = venueRepo;
        this.amountRepo = amountRepo;
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
    async updateMap(venueId) {
        var venue = await this.venueRepo.findById(venueId);
        let priceOfVenue = await this.amountRepo.find();
        let flag = 0;
        let price = 0;
        var matrix = Array();
        matrix = [];
        for (let i = 0; i < venue.row; i++) {
            matrix[i] = [];
            for (let j = 0; j < venue.column; j++) {
                while (flag < priceOfVenue.length) {
                    if (priceOfVenue[flag].x == i && priceOfVenue[flag].y == j) {
                        price = priceOfVenue[flag].price;
                    }
                    flag++;
                }
                matrix[i][j] = price;
                flag = 0;
            }
        }
        var venues = await this.orderItemRepo.find();
        var specificVenue = [];
        for (let venue of venues) {
            if (venue.venueId == venueId) {
                specificVenue.push(venue);
            }
        }
        for (let reservation of specificVenue) {
            matrix[reservation.y][reservation.x] = -1;
        }
        return matrix;
    }
};
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], SeatingMapController.prototype, "verifyToken", null);
__decorate([
    rest_1.post("/Maps/{venueId}"),
    __param(0, rest_1.param.path.number("venueId")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], SeatingMapController.prototype, "updateMap", null);
SeatingMapController = __decorate([
    __param(0, repository_1.repository(seating_map_repository_1.SeatingMapRepository.name)),
    __param(1, repository_1.repository(order_item_repository_1.OrderItemRepository.name)),
    __param(2, repository_1.repository(venue_repository_1.VenueRepository.name)),
    __param(3, repository_1.repository(amount_repository_1.AmountRepository.name)),
    __metadata("design:paramtypes", [seating_map_repository_1.SeatingMapRepository,
        order_item_repository_1.OrderItemRepository,
        venue_repository_1.VenueRepository,
        amount_repository_1.AmountRepository])
], SeatingMapController);
exports.SeatingMapController = SeatingMapController;
//# sourceMappingURL=seating-map.controller.js.map