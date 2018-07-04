import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { SeatingMap } from "../models/seating-map";
import { repository } from "@loopback/repository";
import { SeatingMapRepository } from "../repositories/seating-map.repository";

export class SeatingMapController {
  constructor(
    @repository(SeatingMapRepository.name) private SeatingMapRepo: SeatingMapRepository
  ) { }

  /*
    @post("/Users/{Username}/{Password}")
    async MakeReservation(
      @param.path.string("Username") Username: string,
      @param.path.string("Password") Password: string,
    ): Promise<string> {
  
      let allUsers: Array<Users> = await this.UsersRepo.find();
  
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
  
  
      throw new HttpErrors.NotFound("Sorry, User not found")
    } */
}
