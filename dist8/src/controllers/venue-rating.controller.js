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
const venue_repository_1 = require("../repositories/venue.repository");
const rating_repository_1 = require("../repositories/rating.repository");
const repository_1 = require("@loopback/repository");
const venue_rating_repository_1 = require("../repositories/venue-rating.repository");
const rest_1 = require("@loopback/rest");
const venue_1 = require("../models/venue");
const venue_rating_1 = require("../models/venue-rating");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let VenueRatingController = class VenueRatingController {
    constructor(venueRepo, ratingRepo, venueRatingRepo) {
        this.venueRepo = venueRepo;
        this.ratingRepo = ratingRepo;
        this.venueRatingRepo = venueRatingRepo;
    }
    async getRatings(venue) {
        return await this.ratingRepo.find({
            where: { venueId: venue.getId() }
        });
    }
    async calculateRating(venue) {
        let allRatings = await this.getRatings(venue);
        let sum = 0;
        for (let rating of allRatings) {
            sum += rating.getRating();
        }
        let venueRating = new venue_rating_1.VenueRating;
        venueRating.ratingValue = sum / allRatings.length;
        return await this.venueRatingRepo.create(venueRating);
    }
};
__decorate([
    rest_1.get("/rating"),
    __param(0, rest_1.param.path.string("venue")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [venue_1.Venue]),
    __metadata("design:returntype", Promise)
], VenueRatingController.prototype, "getRatings", null);
__decorate([
    rest_1.post("/venue-rating/{venue}"),
    __param(0, rest_1.param.path.string("venue")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [venue_1.Venue]),
    __metadata("design:returntype", Promise)
], VenueRatingController.prototype, "calculateRating", null);
VenueRatingController = __decorate([
    __param(0, repository_1.repository(venue_repository_1.VenueRepository.name)),
    __param(1, repository_1.repository(rating_repository_1.RatingRepository.name)),
    __param(2, repository_1.repository(venue_rating_repository_1.VenueRatingRepository.name)),
    __metadata("design:paramtypes", [venue_repository_1.VenueRepository,
        rating_repository_1.RatingRepository,
        venue_rating_repository_1.VenueRatingRepository])
], VenueRatingController);
exports.VenueRatingController = VenueRatingController;
//# sourceMappingURL=venue-rating.controller.js.map