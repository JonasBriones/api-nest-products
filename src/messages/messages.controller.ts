import { Controller, Post, Body } from '@nestjs/common';
import { CreateMessageDto } from './dto/create-message-dto';


@Controller('messages')
export class MessagesController {

 @Post()
 create(@Body() createMessageDto: CreateMessageDto ){
    return 'This action agrega un mensaje';
 }   
}
