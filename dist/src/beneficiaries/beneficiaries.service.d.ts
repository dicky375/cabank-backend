import { PrismaService } from '../prisma/prisma.service';
import { CreateBeneficiaryDto } from './dto/create-beneficiary.dto';
export declare class BeneficiariesService {
    private prisma;
    constructor(prisma: PrismaService);
    listGrouped(userId: string): Promise<{
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
    create(userId: string, dto: CreateBeneficiaryDto): Promise<{
        id: string;
        createdAt: Date;
        name: string;
        accountNumber: string;
        type: string;
        userId: string;
        bankName: string;
    }>;
    remove(userId: string, id: string): Promise<{
        success: boolean;
        deletedId: string;
    }>;
}
