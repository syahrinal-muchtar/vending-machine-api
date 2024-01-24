import { Test, TestingModule } from '@nestjs/testing';
import { DrinksController } from './drinks.controller';
import { DrinksService } from './drinks.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('DrinksController', () => {
  let service: DrinksService;
  let controller: DrinksController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DrinksController],
      providers: [DrinksService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<DrinksService>(DrinksService);
    controller = module.get<DrinksController>(DrinksController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of drinks', async () => {
      const result: any = [
        {
          id: 1,
          name: 'Aqua',
          price: 2000,
          createdAt: new Date('2024-01-24T07:57:13.096Z'),
          updatedAt: new Date('2024-01-24T07:57:13.096Z'),
        },
        {
          id: 2,
          name: 'Sosro',
          price: 5000,
          createdAt: new Date('2024-01-24T07:57:13.096Z'),
          updatedAt: new Date('2024-01-24T07:57:13.096Z'),
        },
        {
          id: 3,
          name: 'cola',
          price: 1000,
          createdAt: new Date('2024-01-24T07:57:13.096Z'),
          updatedAt: new Date('2024-01-24T07:57:13.096Z'),
        },
      ];
      jest.spyOn(service, 'findAll').mockImplementation(() => result);

      expect(await controller.findAll()).toBe(result);
    });
  });

  describe('findOne', () => {
    it('should return data from ID 1', async () => {
      const result: any = {
        id: 1,
        name: 'Aqua',
        price: 2000,
        createdAt: new Date('2024-01-24T07:57:13.096Z'),
        updatedAt: new Date('2024-01-24T07:57:13.096Z'),
      };
      jest.spyOn(service, 'findOne').mockImplementation(() => result);

      expect(await controller.findOne('1')).toBe(result);
    });
  });

  describe('create', () => {
    it('should return data that has been inserted', async () => {
      const payload: any = {
        id: 5,
        name: 'milo',
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result: any = {
        id: 5,
        name: 'milo',
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'findOne').mockImplementation(() => result);

      expect(await controller.create(payload)).toStrictEqual(result);
    });
  });

  describe('update', () => {
    it('should return data that has been edited', async () => {
      const payload: any = {
        name: 'cola',
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result: any = {
        id: 3,
        name: 'cola',
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'update').mockImplementation(() => result);

      expect(await controller.update('3', payload)).toStrictEqual(result);
    });
  });

  describe('delete', () => {
    it('should return data that has been deleted', async () => {
      const result: any = {
        id: 5,
        name: 'milo',
        price: 2000,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      jest.spyOn(service, 'remove').mockImplementation(() => result);

      expect(await controller.remove('5')).toStrictEqual(result);
    });
  });
});
