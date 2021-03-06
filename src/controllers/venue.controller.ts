import { repository } from "@loopback/repository";
import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Rating } from "../models/rating";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";
import { verify } from "jsonwebtoken";
import { getDefaultSettings } from "http2";
import { VenueTagRepository } from "../repositories/venue-tag.repository";


// Uncomment these imports to begin using these cool features!



export class VenueController {
  constructor(@repository(VenueRepository.name) private venueRepo: VenueRepository,
    @repository(RatingRepository.name) private ratingRepo: RatingRepository,
    @repository(VenueTagRepository.name) private venueTagRepo: VenueTagRepository) { }

  @post("/registerVenue")
  async registerVenue(@requestBody() venue: Venue) {
    if (!venue.name || !venue.type) {
      throw new HttpErrors.BadRequest('All fields required');
    }
    /*
        let venueExists: boolean = !!(await this.venueRepo.count({ venueId: venue.Id }));
        if (venueExists) {
          throw new HttpErrors.BadRequest('Specific Venue already exists');
        } */

    return await this.venueRepo.create(venue);

  }

  @get("/venue/{{yelpVenueId}}")
  async getVenue(
    @param.query.number("string") yelpVenueId: string
  ) {
    return await this.venueRepo.findById(yelpVenueId);

  }

  @get("/getVenueNames")
  async getAllVenueNames() {
    let nameList: Array<string> = [];
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










