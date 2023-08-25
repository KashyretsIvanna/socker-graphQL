import { Module } from '@nestjs/common';
import { PrismaModule } from '@app/common/prisma';

@Module({
  imports: [PrismaModule],
  exports: [PrismaModule],
})
export class SharedModule {}
