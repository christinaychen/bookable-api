import { repository } from "@loopback/repository";
import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Rating } from "../models/rating";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class VenueController {
  constructor(@repository(VenueRepository.name) private venueRepo: VenueRepository,
    @repository(RatingRepository.name) private ratingRepo: RatingRepository) { }

  @get("/ratings")
  async getRatings(): Promise<Array<Rating>> {
    return await this.ratingRepo.find();
  }

  @get("/ratings/{venue}")
  async calculateRating(@param.path.string("venue") venue: Venue) {
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



}










