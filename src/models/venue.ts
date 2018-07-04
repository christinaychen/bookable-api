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
  Latitude: string;

  @property({
    type: "string"
  })
  Longitude: string;

  @property({
    type: "number"
  })
  Rating: number;

  getPrice() {
    return this.Price;
  }

  getId() {
    return this.VenueId;
  }

  getName() {
    return this.Name;
  }


}
