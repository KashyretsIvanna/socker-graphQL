import { PrismaService } from '@app/common/prisma';
import { Test } from '@nestjs/testing';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;
  let prismaService: PrismaService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [AppService, PrismaService],
    }).compile();

    service = app.get<AppService>(AppService);
    prismaService = app.get<PrismaService>(PrismaService);
  });

  describe('getData', () => {
    it('should return "Hello API"', async () => {
      console.log(process.env.DATABASE_URL);

      await prismaService.user.create({
        data: { name: 'd', email: 'iajj@sjdj.com' },
      });

      const newUser = await prismaService.user.findFirst({
        where: { email: 'iajj@sjdj.com' },
      });

      expect(newUser.email).toEqual('iajj@sjdj.com');
      expect(service.getData()).toEqual({ message: 'Hello API' });
    });
  });
});
