import { repository } from "@loopback/repository";
import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Rating } from "../models/rating";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";
import { verify } from "jsonwebtoken";


// Uncomment these imports to begin using these cool features!



export class VenueController {
  constructor(@repository(VenueRepository.name) private venueRepo: VenueRepository,
    @repository(RatingRepository.name) private ratingRepo: RatingRepository) { }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {
    try {
      let payload = verify(jwt, "shh");
      return payload;
    }
    catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token")
    }
  }



}










