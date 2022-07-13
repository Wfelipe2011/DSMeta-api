// eslint-disable-next-line @typescript-eslint/no-var-requires
require('dotenv').config();
import { NestFactory } from '@nestjs/core';
import { logger } from 'skyot';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();

  const port = process.env.PORT || 3000;
  await app.listen(port, () => {
    logger(`Server is running on port: ${port}`);
  });
}
bootstrap();
