import { model, property, Entity } from "@loopback/repository";

@model({
  name: "Venue"
})
export class Venue extends Entity {

  @property({
    type: "number",
    id: true
  })
  VenueId: number;

  @property({
    type: "string"
  })
  Name: string;

  @property({
    type: "string"
  })
  Type: string;

  @property({
    type: "number"
  })
  Address: number;

  @property({
    type: "number"
  })
  MapId: number;

  @property({
    type: "string"
  })
  Tags: string;

  @property({
    type: "string"
  })
  Latitude: string;

  @property({
    type: "string"
  })
  Longitude: string;

  @property({
    type: "string"
  })
  Rating: string;

  getPrice() {
    return this.Price;
  }

  getId() {
    return this.ReservationId;
  }

  getName() {
    return this.Name;
  }
}
