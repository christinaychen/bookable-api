import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { SeatingMap } from "../models/seating-map";
import { repository } from "@loopback/repository";
import { SeatingMapRepository } from "../repositories/seating-map.repository";
import { verify } from "jsonwebtoken";

export class SeatingMapController {
  constructor(
    @repository(SeatingMapRepository.name) private SeatingMapRepo: SeatingMapRepository
  ) { }

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

  @post("/Maps")
  async createSeatingMap(
    @requestBody() seatingMap: SeatingMap
  ): Promise<SeatingMap> {

    let createdSeatingMap = await this.SeatingMapRepo.create(seatingMap);
    createdSeatingMap.fill();
    return createdSeatingMap;

  }

  /*@post("/Maps/{Row}/{Column}")
  async MakeReservation(
    @param.path.number("Row") Row: number,
    @param.path.number("Column") Column: number
  ): Promise<string> {

    1. Find all reservations, get a list of reservations with x,y
    2. Which reservation product we want to reserve on...

    var matrix = int[reservation.col][reservation.row];

    reservations.forEach(res => {
      matrix[res.x][res.y] = 1;
    });

    if (matrix[Col][Row] == 1) {
      throw already reserved
    }

    this.reservationRepo.create();

    let createdSeatingMap = await this.SeatingMapRepo.findById(1);
    if (createdSeatingMap != null) {
      console.log(createdSeatingMap.VenueType);
      return createdSeatingMap.VenueType;
    }
    createdSeatingMap.printArray();
    if (createdSeatingMap != null) {
      //createdSeatingMap.Layout[Row][Column]
      if (createdSeatingMap.checkReserved(Row, Column)) {
        return "Spot is already Booked :(";
      }
      else {
        createdSeatingMap.Layout[Row][Column] = -1;
        return "Reservation made!";
      }
    }

    throw HttpErrors("Null Map");

  } */

  /*
  @post("/Maps/{Row}/{Column}")
  async MakeReservation(
    @param.path.number("Row") Row: number,
    @param.path.number("Column") Column: number,
  ): Promise<string> {

    for (let user of allUsers) {
      if (!user.Username || !user.Password) {
        throw new HttpErrors.Unauthorized('invalid credentials');
      }

      if (user.getUsername() == Username) {
        if (user.getPassword() == Password) {
          return "Login Sucessful!";
        }
        else {
          return "Password incorrect";
        }
      }
      else {
        return "User not Found";
      }
    }


    throw new HttpErrors.NotFound("Sorry, User not found") */
}

