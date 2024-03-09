import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as cookieParser from 'cookie-parser';
import * as bodyParser from 'body-parser';
import * as OpenApiValidator from 'express-openapi-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.use(cookieParser());
  app.use(bodyParser.json());
  app.use(
    OpenApiValidator.middleware({
      apiSpec: '/nestjs_restapi_practice/swagger/openapi.yml',
      validateRequests: true,
      validateResponses: true,
    }),
  );
  await app.listen(1234);
}
bootstrap();
