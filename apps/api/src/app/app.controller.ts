import { Controller, Get } from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    console.log('d');
    const message = this.appService.getData();
    console.log(message);
    return message;
  }
}
