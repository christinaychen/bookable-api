import { repository } from "@loopback/repository";
import { CustomerRepository } from "../repositories/customer.repository";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Customer } from '../models/customer';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class CustomerController {
  constructor(@repository(CustomerRepository.name) private customerRepo: CustomerRepository) { }


  @post("/registration")
  async registerCustomer(
    @requestBody() customer: Customer
  ): Promise<Customer> {
    if (!customer.name || !customer.email || !customer.password) {
      throw new HttpErrors.BadRequest('All fields required');
    }

    let userExists: boolean = !!(await this.customerRepo.count({ email: customer.email }));
    if (userExists) {
      throw new HttpErrors.BadRequest('User already exists');
    }
    let createdUser = await this.customerRepo.create(customer);
    return createdUser;
  }

  @post("/login")
  async loginUser(
    @requestBody() customer: Customer
  ) {
    if (!customer.email || !customer.password) {
      throw new HttpErrors.Unauthorized('All fields required');
    }

    let userExists: boolean = !!(await this.customerRepo.count({
      and: [
        { email: customer.email },
        { password: customer.password },
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('Invalid credentials');
    }

    return await this.customerRepo.findOne({
      where: {
        and: [
          { email: customer.email },
          { password: customer.password }
        ]
      },
    });
  }
}
