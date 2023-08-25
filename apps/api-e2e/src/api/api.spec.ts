import { AppModule, AppService } from '@app/apps/api';
import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';

describe('Cats', () => {
  let app: INestApplication;
  const appService = { getData: () => ({ message: 'Hello API' }) };

  beforeAll(async () => {
    const moduleRef = await Test.createTestingModule({
      imports: [AppModule],
    })
      .overrideProvider(AppService)
      .useValue(appService)
      .compile();

    app = moduleRef.createNestApplication();
    await app.init();
  });

  it(`/GET hello`, () => {
    
    return request(app.getHttpServer())
      .get('')
      .expect(200)
      .expect({ message: 'Hello API' });
  });

  afterAll(async () => {
    await app.close();
  });
});
