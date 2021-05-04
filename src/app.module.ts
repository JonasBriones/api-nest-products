import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsController } from './products/products.controller';
import { MessagesController } from './messages/messages.controller';

@Module({
  imports: [],
  controllers: [AppController, ProductsController, MessagesController],
  providers: [AppService],
})
export class AppModule {}
