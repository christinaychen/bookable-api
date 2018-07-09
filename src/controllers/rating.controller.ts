// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';
import { repository } from "@loopback/repository";
import { RatingRepository } from "../repositories/rating.repository";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { verify } from "jsonwebtoken";

export class RatingController {
  constructor(@repository(RatingRepository.name) private ratingRepo: RatingRepository) { }

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

