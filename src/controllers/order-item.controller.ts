import { OrderItem } from "../models/order-item";
import { repository } from "@loopback/repository";
import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { Rating } from "../models/rating";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";
import { verify } from "jsonwebtoken";
import { getDefaultSettings } from "http2";
import { OrderItemRepository } from "../repositories/order-item.repository";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class Order_itemController {
  constructor(@repository(OrderItemRepository.name) private orderItemRepo: OrderItemRepository,
    @repository(RatingRepository.name) private ratingRepo: RatingRepository) { }

  @post("/makeOrder")
  async createOrder(@requestBody() orderItem: OrderItem) {
    if (!orderItem.venueId) {
      throw new HttpErrors.BadRequest('Venue Required');
    }
    /*
    let orderExists: boolean = !!(await this.orderItemRepo.count({ orderItemId: orderItem.Id }));

    if (orderExists) {
      throw new HttpErrors.BadRequest('Specific Venue already exists');
    }*/

    var venues = await this.orderItemRepo.find();
    var specificVenue = [];
    for (let venue of venues) {
      if (venue.venueId == orderItem.orderItemId) {
        specificVenue.push(venue);
      }
    }
    for (let reservation of specificVenue) {
      if (reservation.x == orderItem.x && reservation.y == orderItem.y) {
        return "reservation already made!";
      }
    }

    return await this.orderItemRepo.create(orderItem);

  }

  @post("/makem")
  async makeReservation(@requestBody() orderItem: OrderItem) {
    if (!orderItem.venueId) {
      throw new HttpErrors.BadRequest('Venue Required');
    }
    /*
    let orderExists: boolean = !!(await this.orderItemRepo.count({ orderItemId: orderItem.Id }));

    if (orderExists) {
      throw new HttpErrors.BadRequest('Specific Venue already exists');
    }*/



    return await this.orderItemRepo.create(orderItem);

  }
}
