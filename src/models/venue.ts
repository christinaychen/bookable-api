import { model, property, Entity } from "@loopback/repository";

@model()
export class Venue extends Entity {

  @property({
    type: "number",
    id: true,
  })
  venueId?: number;

  @property({
    type: "string"
  })
  name: string;

  @property({
    type: "string"
  })
  type: string;

  @property({
    type: "string"
  })
  address: string;

  @property({
    type: "number"
  })
  mapId: number;

  @property({
    type: "string"
  })
  latitude: string;

  @property({
    type: "string"
  })
  longitude: string;

  @property({
    type: "number"
  })
  rating: number;

  @property({
    type: "number"
  })
  column: number;

  @property({
    type: "number"
  })
  row: number;

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
