import { Drinks } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class DrinkEntity implements Drinks {
  @ApiProperty()
  id: number;

  @ApiProperty()
  name: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  createdAt: Date;

  @ApiProperty()
  updatedAt: Date;
}
