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
const venue_tag_repository_1 = require("../repositories/venue-tag.repository");
const venue_repository_1 = require("../repositories/venue.repository");
// Uncomment these imports to begin using these cool features!
// import {inject} from '@loopback/context';
let VenueTagController = class VenueTagController {
    constructor(venueTagRepo, venueRepo) {
        this.venueTagRepo = venueTagRepo;
        this.venueRepo = venueRepo;
    }
};
VenueTagController = __decorate([
    __param(0, repository_1.repository(venue_tag_repository_1.VenueTagRepository.name)),
    __param(1, repository_1.repository(venue_repository_1.VenueRepository.name)),
    __metadata("design:paramtypes", [venue_tag_repository_1.VenueTagRepository,
        venue_repository_1.VenueRepository])
], VenueTagController);
exports.VenueTagController = VenueTagController;
//# sourceMappingURL=venue-tag.controller.js.map