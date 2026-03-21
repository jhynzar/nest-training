import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import { ValidationPipe } from '@nestjs/common';
import { ProfilesGuard } from './profiles/profiles.guard';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalGuards(new ProfilesGuard()); // Global Guard Example
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
