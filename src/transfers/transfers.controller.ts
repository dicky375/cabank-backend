import { ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Post } from '@nestjs/common';
import { TransfersService } from './transfers.service';
import { TransferDto } from './dto/transfer.dto';

@ApiBearerAuth()
@Controller('transfers')
export class TransfersController {
  constructor(private transfers: TransfersService) {}

  @Post('internal')
  internal(@Body() dto: TransferDto) {
    return this.transfers.internalTransfer(dto);
  }
}
