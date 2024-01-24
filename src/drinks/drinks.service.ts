import { Injectable } from '@nestjs/common';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DrinksService {
  constructor(private prisma: PrismaService) {}

  create(createDrinkDto: CreateDrinkDto) {
    return this.prisma.drinks.create({ data: createDrinkDto });
  }

  findAll() {
    return this.prisma.drinks.findMany();
  }

  findOne(id: number) {
    return this.prisma.drinks.findUnique({ where: { id } });
  }

  update(id: number, updateDrinkDto: UpdateDrinkDto) {
    return this.prisma.drinks.update({
      where: { id },
      data: updateDrinkDto,
    });
  }

  remove(id: number) {
    return this.prisma.drinks.delete({ where: { id } });
  }
}
