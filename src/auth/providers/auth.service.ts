import { Injectable, Inject, forwardRef } from '@nestjs/common';
import { UserService } from 'src/users/providers/users.service';

@Injectable()
export class AuthService {
    constructor(
        @Inject(forwardRef(()=> UserService))
        private readonly userservice : UserService
    ){}
    public login(email: string, password: string, id: string){
        const user = this.userservice.findOneById('1234')
        return 'SAMPLE_TOKEN'
    }

    public isAuth () {
        return true;
    }
}
