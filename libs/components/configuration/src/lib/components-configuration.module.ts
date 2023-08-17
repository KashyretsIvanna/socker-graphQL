import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { validateConfig } from './validate-config';
import { FullConfig } from './full-config';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      validate: validateConfig(FullConfig),
      envFilePath: '.development.env',
    }),
  ],
})
export class ConfigurationModule {}
