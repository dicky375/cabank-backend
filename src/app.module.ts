import { Module } from '@nestjs/common';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { LedgerModule } from './ledger/ledger.module';
import { TransfersModule } from './transfers/transfers.module';
import { AccountsModule } from './accounts/accounts.module';
import { BillsModule } from './bills/bills.module';

@Module({
  imports: [
    PrismaModule,
    AuthModule,
    LedgerModule,
    TransfersModule,
    AccountsModule,
    BillsModule,
  ],
})
export class AppModule {}
