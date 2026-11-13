import { BeneficiariesService } from './beneficiaries.service';
import { AuthUser } from '../auth/current-user.decorator';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
export declare class BeneficiariesController {
    private beneficiaries;
    constructor(beneficiaries: BeneficiariesService);
    list(user: AuthUser): Promise<{
        byCard: {
            id: string;
            createdAt: Date;
            name: string;
            accountNumber: string;
            type: string;
            userId: string;
            bankName: string;
        }[];
        sameBank: {
            id: string;
            createdAt: Date;
            name: string;
            accountNumber: string;
            type: string;
            userId: string;
            bankName: string;
        }[];
        otherBank: {
            id: string;
            createdAt: Date;
            name: string;
            accountNumber: string;
            type: string;
            userId: string;
            bankName: string;
        }[];
        total: number;
    }>;
    create(user: AuthUser, dto: CreateBeneficiaryDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        type: string;
        userId: string;
        bankName: string;
    }>;
    remove(user: AuthUser, id: string): Promise<{
        success: boolean;
        deletedId: string;
    }>;
}
