import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { DrinksService } from './drinks.service';
import { CreateDrinkDto } from './dto/create-drink.dto';
import { UpdateDrinkDto } from './dto/update-drink.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { DrinkEntity } from './entities/drink.entity';

@Controller('drinks')
@ApiTags('drinks')
export class DrinksController {
  constructor(private readonly drinksService: DrinksService) {}

  @Post()
  @ApiCreatedResponse({ type: DrinkEntity })
  create(@Body() createDrinkDto: CreateDrinkDto) {
    return this.drinksService.create(createDrinkDto);
  }

  @Get()
  @ApiOkResponse({ type: DrinkEntity, isArray: true })
  findAll() {
    return this.drinksService.findAll();
  }

  @Get(':id')
  @ApiOkResponse({ type: DrinkEntity })
  findOne(@Param('id') id: string) {
    return this.drinksService.findOne(+id);
  }

  @Patch(':id')
  @ApiOkResponse({ type: DrinkEntity })
  update(@Param('id') id: string, @Body() updateDrinkDto: UpdateDrinkDto) {
    return this.drinksService.update(+id, updateDrinkDto);
  }

  @Delete(':id')
  @ApiOkResponse({ type: DrinkEntity })
  remove(@Param('id') id: string) {
    return this.drinksService.remove(+id);
  }
}
