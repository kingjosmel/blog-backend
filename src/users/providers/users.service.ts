import {Injectable, Inject, forwardRef} from '@nestjs/common';
import GetUsersParamDto from '../dtos/get-users-param.dto';
import { AuthService } from 'src/auth/providers/auth.service';

@Injectable()
export class UserService {
    constructor(
        @Inject(forwardRef(()=>AuthService))
        private readonly authService: AuthService
    ){}

    public findall (getUsersParamDto : GetUsersParamDto, limit : number, page : number){
        const isAuth = this.authService.isAuth()
        console.log(isAuth)
        return [
            {
                id: 123,
                firstName : 'John',
                email : 'john@doe.com'
            },
            {
                firstName : 'james',
                email : 'james@doe.com'
            }
        ]
    }



    public findOneById (id : string) {
        return [
            {
                id : 1234,
                firstName : 'james',
                email : 'james@doe.com'
            }
        ]
    }
}