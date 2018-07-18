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
const amount_repository_1 = require("../repositories/amount.repository");
const rest_1 = require("@loopback/rest");
const amount_1 = require("../models/amount");
const jsonwebtoken_1 = require("jsonwebtoken");
// Uncomment these imports to begin using these cool features!
let AmountController = class AmountController {
    constructor(amountRepo) {
        this.amountRepo = amountRepo;
    }
    async registerAmount(Amount) {
        /* if () {
          throw new HttpErrors.BadRequest('All fields required');
        } */
        /*
            let venueExists: boolean = !!(await this.venueRepo.count({ venueId: venue.Id }));
            if (venueExists) {
              throw new HttpErrors.BadRequest('Specific Venue already exists');
            } */
        return await this.amountRepo.create(Amount);
    }
    /*
      @get("/getVenues")
      async getVenue(@requestBody() venue: Venue) {
        if (!venue.name || !venue.type) {
          throw new HttpErrors.BadRequest('All fields required');
        }
        /*
        let venueExists: boolean = !!(await this.venueRepo.count({ venueId: venue.Id }));
        if (venueExists) {
          throw new HttpErrors.BadRequest('Specific Venue already exists');
        }
  
        return await this.venueRepo.create(venue);
  
    }*/
    verifyToken(jwt) {
        try {
            let payload = jsonwebtoken_1.verify(jwt, "shh");
            return payload;
        }
        catch (err) {
            throw new rest_1.HttpErrors.Unauthorized("Invalid token");
        }
    }
};
__decorate([
    rest_1.post("/registerAmount"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [amount_1.Amount]),
    __metadata("design:returntype", Promise)
], AmountController.prototype, "registerAmount", null);
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AmountController.prototype, "verifyToken", null);
AmountController = __decorate([
    __param(0, repository_1.repository(amount_repository_1.AmountRepository.name)),
    __metadata("design:paramtypes", [amount_repository_1.AmountRepository])
], AmountController);
exports.AmountController = AmountController;
//# sourceMappingURL=amount.controller.js.map