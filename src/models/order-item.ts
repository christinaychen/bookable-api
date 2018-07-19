import { Entity, property, model } from '@loopback/repository';

@model()
export class OrderItem extends Entity {
  @property({
    type: 'number',
    id: true,
  })
  orderItemId?: number;

  @property({
    type: "number",
  })
  venueId: number;

  @property({
    type: "string",
  })
  yelpVenueId: string;

  @property({
    type: "number",
  })
  purchaseId: number;

  @property({
    type: "number",
  })
  customerId: number;

  @property({
    type: "number",
  })
  x: number;

  @property({
    type: "number",
  })
  y: number;

  @property({
    type: "string",
  })
  time: string;

  @property({
    type: "number",
  })
  amount: number;

  @property({
    type: "string",
  })
  token: string;



  getId() {
    return this.id;
  }

  getRating() {
    return this.ratingValue;
  }

  getVenueId() {
    return this.venueId;
  }




}
