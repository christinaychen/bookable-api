import {BookableApiApplication} from './application';
import {ApplicationConfig} from '@loopback/core';

export {BookableApiApplication};

export async function main(options?: ApplicationConfig) {
  const app = new BookableApiApplication(options);
  await app.boot();
  await app.start();
  return app;
}
