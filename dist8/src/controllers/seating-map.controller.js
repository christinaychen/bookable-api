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
const seating_map_1 = require("../models/seating-map");
const repository_1 = require("@loopback/repository");
const seating_map_repository_1 = require("../repositories/seating-map.repository");
const jsonwebtoken_1 = require("jsonwebtoken");
let SeatingMapController = class SeatingMapController {
    constructor(SeatingMapRepo) {
        this.SeatingMapRepo = SeatingMapRepo;
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
    async createSeatingMap(seatingMap) {
        let createdSeatingMap = await this.SeatingMapRepo.create(seatingMap);
        createdSeatingMap.fill();
        return createdSeatingMap;
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
    rest_1.post("/Maps"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [seating_map_1.SeatingMap]),
    __metadata("design:returntype", Promise)
], SeatingMapController.prototype, "createSeatingMap", null);
SeatingMapController = __decorate([
    __param(0, repository_1.repository(seating_map_repository_1.SeatingMapRepository.name)),
    __metadata("design:paramtypes", [seating_map_repository_1.SeatingMapRepository])
], SeatingMapController);
exports.SeatingMapController = SeatingMapController;
//# sourceMappingURL=seating-map.controller.js.map