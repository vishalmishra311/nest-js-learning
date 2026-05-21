import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user/user.controller';
import { ProductService } from './product/product.service';
import { ProductController } from './product/product.controller';
import { StudentsModule } from './students/students.module';
import { CustomerModule } from './customer/customer.module';
import { TestingpipeController } from './testingpipe/testingpipe.controller';
import { GaurdsTestingController } from './gaurds-testing/gaurds-testing.controller';
import { GaurdsTestingService } from './gaurds-testing/gaurds-testing.service';
import { FilterTestController } from './filter-test/filter-test.controller';
import { LoggerMiddleware } from './middleware/logger/logger.middleware';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { StudentModule } from './student/student.module';



@Module({
  imports: [StudentsModule, CustomerModule,
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI!),
    StudentModule
  ],
  controllers: [AppController, UserController, ProductController, TestingpipeController, GaurdsTestingController, FilterTestController],
  providers: [AppService, ProductService, GaurdsTestingService],
})
export class AppModule implements NestModule  {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*')
  }
  
}
