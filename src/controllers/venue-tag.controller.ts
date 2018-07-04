import { repository } from "@loopback/repository";
import { VenueTagRepository } from "../repositories/venue-tag.repository";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";
import { VenueRepository } from "../repositories/venue.repository";
import { VenueTag } from "../models/venue-tag";



// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class VenueTagController {
  constructor(@repository(VenueTagRepository.name) private venueTagRepo: VenueTagRepository,
    @repository(VenueRepository.name) private venueRepo: VenueRepository) { }


  @post("/tags")
  async addTag(
    @requestBody() VenueTag: VenueTag
  ): Promise<VenueTag> {
    return await this.venueTagRepo.create(VenueTag);
  }

  /*
  @get("/tags/{venue}")
  async getAllTagsForVenue(
    @param.query.string("Venue") venue: Venue
  ): Promise<Array<VenueTag>> {
    return await this.venueTagRepo.find({
      where: {
        and: [
          { venueId: venue.getId() }
        ],
      },
    });
  } */

  @get("/tags/{venueId}")
  async getAllTagsForVenue(
    @param.query.number("venueId") venueId: number
  ): Promise<Array<String>> {
    let allVenues = await this.venueTagRepo.find();
    let tagList = [];
    for (let venue of allVenues) {
      if (venue.venueId == venueId) {
        tagList.push(venue.tagType);
      }
    }
    return tagList;
  }

  @post("/tags/{tagType}")
  async getAllVenuesWithTag(
    @param.query.string("tagType") tagType: string
  ): Promise<Array<number>> {
    let allTags = await this.venueTagRepo.find();
    let venueList = [];
    for (let tag of allTags) {
      if (tag.tagType == tagType) {
        venueList.push(tag.venueId);
      }
    }
    return venueList;
  }



}








