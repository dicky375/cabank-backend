import { ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { WithdrawalsService } from './withdrawals.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser, AuthUser } from '../auth/current-user.decorator';
import { WithdrawDto } from './dto/withdraw.dto';

@ApiBearerAuth()
@Controller('withdrawals')
@UseGuards(JwtAuthGuard)
export class WithdrawalsController {
  constructor(private withdrawals: WithdrawalsService) {}

  @Post()
  withdraw(@CurrentUser() user: AuthUser, @Body() dto: WithdrawDto) {
    return this.withdrawals.withdraw(user.id, dto);
  }

  @Get()
  history(@CurrentUser() user: AuthUser) {
    return this.withdrawals.history(user.id);
  }
}
