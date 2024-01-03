import { Test, TestingModule } from '@nestjs/testing';
import { CoffeesService } from './coffees.service';

describe('CoffeesService', () => {
  let service: CoffeesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CoffeesService],
    }).compile();

    service = module.get<CoffeesService>(CoffeesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('findAll() should return an array of coffees', () => {
    const result = service.findAll();
    expect(result).toBeInstanceOf(Array);
  });

  it('findOne() should return a coffee', () => {
    const result = service.findOne('1');
    expect(result).toBeDefined();
  });

  it('create() should create a coffee', () => {
    const result = service.create({
      name: 'coffee',
      brand: 'brand',
      flavors: ['flavors'],
    });
    expect(result).toBeDefined();
  });

  it('update() should update a coffee', () => {
    const result = service.update('1', {
      name: 'coffee',
      brand: 'brand',
      flavors: ['flavors'],
    });
    expect(result).toBeDefined();
  });
});
