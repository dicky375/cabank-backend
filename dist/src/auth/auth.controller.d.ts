import { AuthService } from './auth.service';
import { SignInDto, SignUpDto } from './dto/auth.dto';
import { AuthUser } from './current-user.decorator';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    signup(dto: SignUpDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
        };
    }>;
    signin(dto: SignInDto): Promise<{
        access_token: string;
        user: {
            id: string;
            email: string;
        };
    }>;
    me(user: AuthUser): AuthUser;
}
