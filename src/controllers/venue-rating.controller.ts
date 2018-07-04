import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { repository } from "@loopback/repository";
import { VenueRatingRepository } from "../repositories/venue-rating.repository";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Rating } from "../models/rating";
import { Venue } from "../models/venue";
import { VenueRating } from "../models/venue-rating";

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class VenueRatingController {
  constructor(@repository(VenueRepository.name) private venueRepo: VenueRepository,
    @repository(RatingRepository.name) private ratingRepo: RatingRepository,
    @repository(VenueRatingRepository.name) private venueRatingRepo: VenueRatingRepository
  ) { }

  @get("/rating")
  async getRatings(@param.path.string("venue") venue: Venue): Promise<Array<Rating>> {
    return await this.ratingRepo.find({
      where: { venueId: venue.getId() }
    });
  }

  @post("/venue-rating/{venue}")
  async calculateRating(@param.path.string("venue") venue: Venue) {
    let allRatings = await this.getRatings(venue);
    let sum = 0;
    for (let rating of allRatings) {
      sum += rating.getRating();
    }

    let venueRating = new VenueRating;
    venueRating.ratingValue = sum / allRatings.length;


    return await this.venueRatingRepo.create(venueRating);
  }



}
