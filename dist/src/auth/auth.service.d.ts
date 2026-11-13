import { JwtService } from '@nestjs/jwt';
import { PrismaService } from '../prisma/prisma.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';
export declare class AuthService {
    private prisma;
    private jwtService;
    constructor(prisma: PrismaService, jwtService: JwtService);
    private generateAccountNumber;
    signUp(dto: SignUpDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
        };
    }>;
    signIn(dto: SignInDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
        };
    }>;
    private signToken;
}
