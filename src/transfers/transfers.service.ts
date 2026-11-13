import { Injectable } from '@nestjs/common';
import { LedgerService } from '../ledger/ledger.service';
import { TransferDto } from './dto/transfer.dto';
import { TransactionType } from '../../generated/prisma/client';

@Injectable()
export class TransfersService {
  constructor(private ledger: LedgerService) {}

  async internalTransfer(dto: TransferDto) {
    return this.ledger.transfer({
      senderAccountId: dto.senderAccountId,
      receiverAccountId: dto.receiverAccountId,
      amount: dto.amount,
      fee: dto.fee,
      type: TransactionType.TRANSFER_INTERNAL,
      description: dto.description,
    });
  }
}
