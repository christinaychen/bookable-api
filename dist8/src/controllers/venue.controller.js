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
const venue_repository_1 = require("../repositories/venue.repository");
const rating_repository_1 = require("../repositories/rating.repository");
const rest_1 = require("@loopback/rest");
const venue_1 = require("../models/venue");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let VenueController = class VenueController {
    constructor(venueRepo, ratingRepo) {
        this.venueRepo = venueRepo;
        this.ratingRepo = ratingRepo;
    }
    async getRatings() {
        return await this.ratingRepo.find();
    }
    async calculateRating(venue) {
        let venueID = venue.getId;
        let allRatings = await this.getRatings();
        let count = 0;
        let sum = 0;
        for (let rating of allRatings) {
            if (rating.getVenueId == venueID) {
                sum += rating.getRating();
                count++;
            }
        }
        return 0;
    }
};
__decorate([
    rest_1.get("/ratings"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "getRatings", null);
__decorate([
    rest_1.get("/ratings/{venue}"),
    __param(0, rest_1.param.path.string("venue")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [venue_1.Venue]),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "calculateRating", null);
VenueController = __decorate([
    __param(0, repository_1.repository(venue_repository_1.VenueRepository.name)),
    __param(1, repository_1.repository(rating_repository_1.RatingRepository.name)),
    __metadata("design:paramtypes", [venue_repository_1.VenueRepository,
        rating_repository_1.RatingRepository])
], VenueController);
exports.VenueController = VenueController;
//# sourceMappingURL=venue.controller.js.map