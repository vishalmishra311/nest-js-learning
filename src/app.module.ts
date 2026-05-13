import { Module } from '@nestjs/common';
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



@Module({
  imports: [StudentsModule, CustomerModule],
  controllers: [AppController, UserController, ProductController, TestingpipeController, GaurdsTestingController],
  providers: [AppService, ProductService, GaurdsTestingService],
})
export class AppModule {}
