import { Test, TestingModule } from '@nestjs/testing';
import { TestingpipeController } from './testingpipe.controller';

describe('TestingpipeController', () => {
  let controller: TestingpipeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestingpipeController],
    }).compile();

    controller = module.get<TestingpipeController>(TestingpipeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
