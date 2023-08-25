import { Module } from '@nestjs/common';

import { PrismaService } from './prisma.servie';

@Module({
  controllers: [],
  providers: [PrismaService],
  exports: [PrismaService],
})
export class PrismaModule {}
