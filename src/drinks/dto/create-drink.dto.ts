import { ApiProperty } from '@nestjs/swagger';
import {
  IsNotEmpty,
  IsNumber,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateDrinkDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(10)
  @ApiProperty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(500)
  @Max(10000)
  @ApiProperty()
  price: number;
}
