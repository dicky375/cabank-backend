// src/main.ts
import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.enableCors();
  // Use the platform's PORT or fallback to 3000
  await app.listen(process.env.PORT || 3000);
  console.log(`🚀 CaBank backend running on port ${process.env.PORT || 3000}`);
}
bootstrap();