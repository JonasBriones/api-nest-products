import { Controller, Post } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';


@Controller('messages')
export class MessagesController {

 @Post()
 create(@Body createMessageDto: CreateMessageDto ){

 }   
}
