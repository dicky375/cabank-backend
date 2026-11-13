import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LedgerModule } from './ledger/ledger.module';
import { TransfersModule } from './transfers/transfers.module';
import { AccountsModule } from './accounts/accounts.module';
import { BillsModule } from './bills/bills.module';
import { CardsModule } from './cards/cards.module';
import { BeneficiariesModule } from './beneficiaries/beneficiaries.module';
import { TransactionsModule } from './transactions/transactions.module';
import { MessagesModule } from './messages/messages.module';
import { WithdrawalsModule } from './withdrawals/withdrawals.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    LedgerModule,
    TransfersModule,
    AccountsModule,
    BillsModule,
    CardsModule,
    BeneficiariesModule,
    TransactionsModule,
    MessagesModule,
    WithdrawalsModule,
  ],
})
export class AppModule {}
