import { repository } from "@loopback/repository";
import { AmountRepository } from "../repositories/amount.repository";
import { Rating } from "../models/rating";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Amount } from "../models/amount";
import { verify } from "jsonwebtoken";
import { getDefaultSettings } from "http2";
import { VenueTagRepository } from "../repositories/venue-tag.repository";


// Uncomment these imports to begin using these cool features!



export class AmountController {
  constructor(@repository(AmountRepository.name) private amountRepo: AmountRepository,
  ) { }

  @post("/registerVenue")
  async registerAmount(@requestBody() Amount: Amount) {
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










