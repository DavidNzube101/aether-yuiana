import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { INestApplication } from '@nestjs/common';

export async function createApp(): Promise<INestApplication> {
  const app = await NestFactory.create(AppModule);
  await app.init();
  return app;
}
