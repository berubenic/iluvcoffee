import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesController } from './coffees.controller';
import { CoffeesService } from './coffees.service';

describe('CoffeesController', () => {
  let controller: CoffeesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CoffeesController],
      providers: [
        {
          provide: CoffeesService,
          useValue: {
            findAll: jest.fn().mockResolvedValue([]),
            findOne: jest.fn().mockResolvedValue({ id: 1, name: 'coffee' }),
            create: jest.fn().mockReturnValue({ id: 1, name: 'coffee' }),
            update: jest.fn().mockResolvedValue({ id: 1, name: 'coffee' }),
            remove: jest.fn().mockResolvedValue({ id: 1, name: 'coffee' }),
          },
        },
      ],
    }).compile();

    controller = module.get<CoffeesController>(CoffeesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('findAll() should return an array of coffees', async () => {
    const query = {};
    const result = await controller.findAll(query);
    expect(result).toBeInstanceOf(Array);
  });

  it('findOne() should return a coffee', async () => {
    const result = await controller.findOne('1');
    expect(result).toBeDefined();
  });

  it('create() should create a coffee', async () => {
    const result = await controller.create({
      name: 'coffee',
      brand: 'brand',
      flavors: ['flavors'],
    });
    expect(result).toBeDefined();
  });

  it('update() should update a coffee', async () => {
    const result = await controller.update('1', {
      name: 'coffee',
      brand: 'brand',
      flavors: ['flavors'],
    });
    expect(result).toBeDefined();
  });

  it('remove() should remove a coffee', async () => {
    const result = await controller.remove('1');
    expect(result).toBeDefined();
  });
});
