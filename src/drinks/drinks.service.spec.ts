import { Test, TestingModule } from '@nestjs/testing';
import { DrinksService } from './drinks.service';
import { PrismaModule } from '../prisma/prisma.module';

describe('DrinksService', () => {
  let service: DrinksService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DrinksService],
      imports: [PrismaModule],
    }).compile();

    service = module.get<DrinksService>(DrinksService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('findAll', () => {
    it('should return an array of drinks', async () => {
      const result = await service.findAll();

      expect(await service.findAll()).toStrictEqual(result);
    });
  });

  describe('findOne', () => {
    it('should return data from ID 1', async () => {
      const result: any = {
        id: 1,
        name: 'Aqua',
        price: 2000,
        createdAt: new Date('2024-01-24T04:39:46.278Z'),
        updatedAt: new Date('2024-01-24T04:39:46.278Z'),
      };

      expect(await service.findOne(1)).toStrictEqual(result);
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

      expect(await service.create(payload)).toStrictEqual(result);
    });
  });

  describe('update', () => {
    it('should return data that has been edited', async () => {
      const payload: any = {
        name: 'mizone',
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      const result: any = {
        id: 3,
        name: 'mizone',
        price: 3000,
        createdAt: new Date(),
        updatedAt: new Date(),
      };

      expect(await service.update(3, payload)).toStrictEqual(result);
    });
  });

  describe('delete', () => {
    it('should return data that has been deleted', async () => {
      const result = await service.findOne(5);

      expect(await service.remove(5)).toStrictEqual(result);
    });
  });
});
