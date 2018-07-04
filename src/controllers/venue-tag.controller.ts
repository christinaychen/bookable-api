import { repository } from "@loopback/repository";
import { VenueTagRepository } from "../repositories/venue-tag.repository";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";
import { VenueRepository } from "../repositories/venue.repository";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class VenueTagController {
  constructor(@repository(VenueTagRepository.name) private venueTagRepo: VenueTagRepository,
    @repository(VenueRepository.name) private venueRepo: VenueRepository) { }

  // @get("/tags/{venue}")
  // async getAllTagsForVenue(
  //   @param.query.string("venue") venue: Venue
  // ) {
  //   return await this.venueTagRepo.find({
  //     where: { venueId: venue.getId() }
  //   })
  // }



}








