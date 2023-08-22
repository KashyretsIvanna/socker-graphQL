import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SharedModule } from '@app/components/shared';
import { ConfigurationModule } from '@app/components/configuration';
@Module({
  imports: [ConfigurationModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
