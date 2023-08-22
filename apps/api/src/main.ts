import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';
import { ConfigService } from '@nestjs/config';
import { FullConfig } from '@app/components/configuration';
import {configureSwagger} from '@app/common/swagger'

async function bootstrap() {
   
  
    const app = await NestFactory.create(AppModule);
    app.enableCors({ origin: '*' });
  
    const configService = app.get(ConfigService<FullConfig, true>);
  
    const globalPrefix = 'api';
    const swaggerPrefix = 'doc';
    app.setGlobalPrefix(globalPrefix);
  
    const PORT = configService.get('API_PORT');
  
    app.useGlobalPipes(
      new ValidationPipe({
        whitelist: true,
        forbidNonWhitelisted: true,
        transform: true,
        skipMissingProperties: false,
        skipNullProperties: false,
        stopAtFirstError: true,
        transformOptions: {
          exposeDefaultValues: true,
          enableImplicitConversion: false,
        },
      })
    );
    configureSwagger(app, { swaggerPrefix });
  
    await app.listen(PORT);
  
    const url = await app.getUrl();
  
    Logger.log(`📚 Swagger documentation: ${url}/${swaggerPrefix}`);
    Logger.log(`🚀 Application is running on: ${url}/${globalPrefix}`);}

bootstrap();
