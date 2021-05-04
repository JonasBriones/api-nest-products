import { Controller, Post } from '@nestjs/common';

@Controller('messages')
export class MessagesController {

 @Post()
 create(@Body createMessageDto: CreateMensajeDto ){
     
 }   
}
