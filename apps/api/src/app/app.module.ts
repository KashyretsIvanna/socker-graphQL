import { ConfigurationModule } from '@app/components/configuration';
import { SharedModule } from '@app/components/shared';
import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
@Module({
  imports: [ConfigurationModule, SharedModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
