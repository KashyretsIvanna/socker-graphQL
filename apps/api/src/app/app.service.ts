import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getData(): { message: string } {
    console.log('f');

    return { message: 'Hello API' };
  }
}
