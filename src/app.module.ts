import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { DrinksModule } from './drinks/drinks.module';

@Module({
  imports: [PrismaModule, DrinksModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
