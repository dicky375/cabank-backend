import { ApiBearerAuth } from '@nestjs/swagger';
import { Body, Controller, Delete, Get, Param, Post, UseGuards } from '@nestjs/common';
import { BeneficiariesService } from './beneficiaries.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { CurrentUser, AuthUser } from '../auth/current-user.decorator';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';

@ApiBearerAuth()
@Controller('beneficiaries')
@UseGuards(JwtAuthGuard)
export class BeneficiariesController {
  constructor(private beneficiaries: BeneficiariesService) {}

  @Get()
  list(@CurrentUser() user: AuthUser) {
    return this.beneficiaries.listGrouped(user.id);
  }

  @Post()
  create(@CurrentUser() user: AuthUser, @Body() dto: CreateBeneficiaryDto) {
    return this.beneficiaries.create(user.id, dto);
  }

  @Delete(':id')
  remove(@CurrentUser() user: AuthUser, @Param('id') id: string) {
    return this.beneficiaries.remove(user.id, id);
  }
}
