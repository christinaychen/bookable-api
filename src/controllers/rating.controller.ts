// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { RatingRepository } from "../repositories/rating.repository";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";

export class RatingController {
  constructor(@repository(RatingRepository.name) private ratingRepo: RatingRepository) { }
}

