import { ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { MessagesService } from './messages.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser, AuthUser } from '../auth/current-user.decorator';
import { CreateMessageDto } from './dto/create-message.dto';

@ApiBearerAuth()
@Controller('messages')
@UseGuards(JwtAuthGuard)
export class MessagesController {
  constructor(private messages: MessagesService) {}

  @Get()
  list(@CurrentUser() user: AuthUser) {
    return this.messages.list(user.id);
  }

  @Post()
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateMessageDto) {
    return this.messages.create(user.id, dto);
  }

  @Post('read-all')
  markAllRead(@CurrentUser() user: AuthUser) {
    return this.messages.markAllRead(user.id);
  }

  @Post(':id/read')
  markRead(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.messages.markRead(user.id, id);
  }
}
