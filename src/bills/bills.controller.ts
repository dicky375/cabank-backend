import { Body, Controller, Get, Post, Query, UseGuards } from '@nestjs/common';
import { BillsService } from './bills.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser, AuthUser } from '../auth/current-user.decorator';
import { PayBillDto, PreviewBillDto } from './dto/pay-bill.dto';
import { BillType } from './bill-types';

@Controller('bills')
@UseGuards(JwtAuthGuard)
export class BillsController {
  constructor(private bills: BillsService) {}

  @Get('types')
  types() {
    return this.bills.listTypes();
  }

  @Post('preview')
  preview(@Body() dto: PreviewBillDto) {
    return this.bills.preview(dto);
  }

  @Post('pay')
  pay(@CurrentUser() user: AuthUser, @Body() dto: PayBillDto) {
    return this.bills.pay(user.id, dto);
  }

  @Get('history')
  history(
    @CurrentUser() user: AuthUser,
    @Query('type') type?: BillType,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    return this.bills.history(user.id, {
      type,
      limit: limit ? parseInt(limit, 10) : 20,
      offset: offset ? parseInt(offset, 10) : 0,
    });
  }
}
