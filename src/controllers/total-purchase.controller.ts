import { TotalPurchaseRepository } from "../repositories/total-purchase.repository";
import { repository } from "@loopback/repository";
import { totalPurchase } from "../models/total-purchase"
import { verify } from "jsonwebtoken";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Token } from "../../node_modules/@types/marked";
import { OrderItemRepository } from "../repositories/order-item.repository";


// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class TotalPurchaseController {
  constructor(@repository(TotalPurchaseRepository.name) private totalPurchaseRepo: TotalPurchaseRepository,
    @repository(OrderItemRepository.name) private orderItemRepo: OrderItemRepository) { }

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

  // @post("/purchase")
  // async purchaseItems(
  //   @param.query.string("finalPurchase") finalPurchase: totalPurchase
  // ) {
  //   return await this.totalPurchaseRepo.create(finalPurchase);
  // }


  // @post("/payment")
  // async stripePayment(
  // ) {
  //   var stripe = require("stripe")("sk_test_rsAlt3zwizIhcEZFFR7o0xGY");

  //   const charge = stripe.charges.create({
  //     amount: 999,
  //     currency: 'usd',
  //     source: 'tok_visa',
  //     receipt_email: 'jenny.rosen@example.com',
  //   });
  //   return charge;
  // }




}
