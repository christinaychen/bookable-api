import { OrderItem } from "../models/order-item";
import { repository } from "@loopback/repository";
import { VenueRepository } from "../repositories/venue.repository";
import { RatingRepository } from "../repositories/rating.repository";
import { PaymentRequest } from "../models/payment-request";

import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Venue } from "../models/venue";
import { verify } from "jsonwebtoken";
import { getDefaultSettings } from "http2";
import { OrderItemRepository } from "../repositories/order-item.repository";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class Order_itemController {
  public amount: number;
  public orderitem: OrderItem;
  public source: string;

  constructor(@repository(OrderItemRepository.name) private orderItemRepo: OrderItemRepository,
    @repository(RatingRepository.name) private ratingRepo: RatingRepository) { }


  // @post("/purchase")
  // async purchaseItem(
  //   @requestBody() orderItem: OrderItem
  // ) {
  //   let stripeToken = orderItem.stripeToken;
  //   let productId = orderItem.productId;
  //   let orderItemToBe = new OrderItem;
  //   orderItemToBe.stripeToken = stripeToken;
  //   orderItemToBe.productId = productId;
  //   return await this.orderItemRepo.create(orderItemToBe);
  // }

  // @get("/amount")
  // async getAmount(
  //   @param.query.string("token") token: string
  // ) {
  //   try {
  //     let payload = verify(token, "shh") as any;
  //     return payload.OrderItem;
  //   }
  //   catch (err) {
  //     throw new HttpErrors.Unauthorized("Invalid token")
  //   }
  // }

  @post("/charge")
  async stripePayment(@requestBody() paymentRequest: PaymentRequest,
    @param.query.string("jwt") jwt: string,
    @param.query.number("orderItemId") orderItemId: number
  ) {
    try {
      let payload = verify(jwt, "shh");
    }
    catch (err) {
      throw new HttpErrors.Unauthorized("Invalid jwt");
    }
    var stripe = require("stripe")("sk_test_rsAlt3zwizIhcEZFFR7o0xGY");

    this.orderitem = await this.orderItemRepo.findById({

      where: { orderItemId: orderItemId }

    });

    this.amount = this.orderitem.amount;

    const charge = stripe.charges.create({
      amount: this.amount,
      currency: 'usd',
      source: paymentRequest.stripeToken,
    });
    return charge;
  }


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

  // @post("/makem")
  // async makeReservation(@requestBody() orderItem: OrderItem) {
  //   if (!orderItem.venueId) {
  //     throw new HttpErrors.BadRequest('Venue Required');
  //   }
  //   /*
  //   let orderExists: boolean = !!(await this.orderItemRepo.count({ orderItemId: orderItem.Id }));

  //   if (orderExists) {
  //     throw new HttpErrors.BadRequest('Specific Venue already exists');
  //   }*/



  //   return await this.orderItemRepo.create(orderItem);

  // }



}
