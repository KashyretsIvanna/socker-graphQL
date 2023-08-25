import { PrismaService } from '@app/common/prisma';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private prismaService: PrismaService) {}

  getData(): { message: string } {
    return { message: 'Hello API' };
  }
}
