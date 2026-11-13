import { Controller, Get, Query, UseGuards } from '@nestjs/common';
import { TransactionsService } from './transactions.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser, AuthUser } from '../auth/current-user.decorator';
import { QueryTransactionsDto } from './dto/query-transactions.dto';

@Controller('transactions')
@UseGuards(JwtAuthGuard)
export class TransactionsController {
  constructor(private transactions: TransactionsService) {}

  @Get()
  list(@CurrentUser() user: AuthUser, @Query() query: QueryTransactionsDto) {
    return this.transactions.list(user.id, query);
  }

  @Get('analytics')
  analytics(@CurrentUser() user: AuthUser, @Query('months') months?: string) {
    return this.transactions.analytics(user.id, months ? parseInt(months, 10) : 6);
  }
}
