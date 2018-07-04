import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";
import { repository } from "@loopback/repository";
import { VenueRepository } from "../repositories/venue.repository";

export class VenueController {

  constructor(
    @repository(VenueRepository.name) private VenueRepo: VenueRepository
  ) { }


}
