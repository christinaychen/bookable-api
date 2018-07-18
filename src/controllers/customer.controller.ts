import { repository } from "@loopback/repository";
import { CustomerRepository } from "../repositories/customer.repository";
import { get, param, HttpErrors, post, requestBody } from "@loopback/rest";
import { Customer } from '../models/customer';
import { sign, verify } from 'jsonwebtoken';
import * as bcrypt from 'bcrypt';
import fetch from 'node-fetch';

// Uncomment these imports to begin using these cool features!

// import {inject} from '@loopback/context';


export class CustomerController {
  public latitude: number = 36.0014;
  public longitude: number = -78.9382;
  public radius: number = 16093;
  constructor(@repository(CustomerRepository.name) private customerRepo: CustomerRepository) { }


  @post("/registration")
  async registerCustomer(
    @requestBody() customer: Customer
  ) {
    if (!customer.name || !customer.email || !customer.password) {
      throw new HttpErrors.BadRequest('All fields required');
    }

    let userExists: boolean = !!(await this.customerRepo.count({ email: customer.email }));
    if (userExists) {
      throw new HttpErrors.BadRequest('User already exists');
    }

    let hashedPassword = await bcrypt.hash(customer.password, 10);
    var customerToStore = new Customer();
    customerToStore.customerId = customer.customerId;
    customerToStore.name = customer.name;
    customerToStore.age = customer.age;
    customerToStore.email = customer.email;
    customerToStore.password = hashedPassword;
    let storedCustomer = await this.customerRepo.create(customerToStore);

    let jwt = sign(
      {
        user: {
          id: storedCustomer.id,
          email: storedCustomer.email
        },
      },
      'shh',
      {
        issuer: 'auth.ix.com',
        audience: 'ix.com',
      },
    );

    return {
      token: jwt,
    };
  }

  @get("/verify")
  verifyToken(@param.query.string("jwt") jwt: string) {
    try {
      let payload = verify(jwt, "shh");
      //payload.Customer.id
      return payload;
    }
    catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token")
    }
  }

  @get("/businesses")
  async getBusinesses(
    @param.query.number("latitude") latitude: number,
    @param.query.number("longitude") longitude: number,
    @param.query.number("radius") radius: number
  ) {
    let res = await fetch(`https://api.yelp.com/v3/businesses/search?latitude=${this.latitude}&longitude=${this.longitude}&radius=${this.radius}`, {
      method: 'GET',
      headers: {
        'Authorization': 'Bearer Nk8nZhueM7f1BxKDu4mr5i6N0ip8X1ZUXf7bLDLhOs4yjLNpDZSvWn50N_dGVcMPoyhZMJ7qUvIhj7p4pPru0wOSvaJf9B-eVulW_V-3vfXH-BPvfdQdR_8cIg1PW3Yx'
      }
    });
    console.log(res);
    let body = await res.json();
    console.log(body);
    return { body };

  }

  @get("/customer")
  async getUser(
    @param.query.string("jwt") jwt: string
  ) {
    try {
      let payload = verify(jwt, "shh") as any;
      return payload.Customer;
    }
    catch (err) {
      throw new HttpErrors.Unauthorized("Invalid token")
    }
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
        { email: customer.email }
      ],
    }));

    if (!userExists) {
      throw new HttpErrors.Unauthorized('Invalid credentials');
    }

    let user = await this.customerRepo.findOne({
      where: {
        and: [
          { email: customer.email },
        ]
      },
    }) as Customer;

    if (!await bcrypt.compare(customer.password, user.password)) {
      throw new HttpErrors.Unauthorized('invalid credentials');
    }


    let jwf = sign({
      Customer: {
        id: user.id,
        email: user.email,
        name: user.name
      }
    }, 'shh', {
        issuer: 'auth.ix.co.za',
        audience: 'ix.co.za'
      })

    return {
      token: jwf
    }
  }
}
