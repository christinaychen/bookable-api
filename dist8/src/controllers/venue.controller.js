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
const jsonwebtoken_1 = require("jsonwebtoken");
const venue_tag_repository_1 = require("../repositories/venue-tag.repository");
// Uncomment these imports to begin using these cool features!
let VenueController = class VenueController {
    constructor(venueRepo, ratingRepo, venueTagRepo) {
        this.venueRepo = venueRepo;
        this.ratingRepo = ratingRepo;
        this.venueTagRepo = venueTagRepo;
    }
    async registerVenue(venue) {
        if (!venue.name || !venue.type) {
            throw new rest_1.HttpErrors.BadRequest('All fields required');
        }
        /*
            let venueExists: boolean = !!(await this.venueRepo.count({ venueId: venue.Id }));
            if (venueExists) {
              throw new HttpErrors.BadRequest('Specific Venue already exists');
            } */
        return await this.venueRepo.create(venue);
    }
    async getVenue(yelpVenueId) {
        return await this.venueRepo.findById(yelpVenueId);
    }
    async getAllVenueNames() {
        let nameList = [];
        let list = await this.venueRepo.find();
        for (let i = 0; i < list.length; i++) {
            nameList[i] = list[i].name;
        }
        return nameList;
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
    rest_1.post("/registerVenue"),
    __param(0, rest_1.requestBody()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [venue_1.Venue]),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "registerVenue", null);
__decorate([
    rest_1.get("/venue/{{yelpVenueId}}"),
    __param(0, rest_1.param.query.number("string")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "getVenue", null);
__decorate([
    rest_1.get("/getVenueNames"),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], VenueController.prototype, "getAllVenueNames", null);
__decorate([
    rest_1.get("/verify"),
    __param(0, rest_1.param.query.string("jwt")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], VenueController.prototype, "verifyToken", null);
VenueController = __decorate([
    __param(0, repository_1.repository(venue_repository_1.VenueRepository.name)),
    __param(1, repository_1.repository(rating_repository_1.RatingRepository.name)),
    __param(2, repository_1.repository(venue_tag_repository_1.VenueTagRepository.name)),
    __metadata("design:paramtypes", [venue_repository_1.VenueRepository,
        rating_repository_1.RatingRepository,
        venue_tag_repository_1.VenueTagRepository])
], VenueController);
exports.VenueController = VenueController;
//# sourceMappingURL=venue.controller.js.map