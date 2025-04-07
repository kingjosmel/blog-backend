import {Injectable} from '@nestjs/common';
import GetUsersParamDto from '../dtos/get-users-param.dto';

@Injectable()
export class UserService {

    public findall (getUsersParamDto : GetUsersParamDto, limit : number, page : number){
        return [
            {
                firstName : 'John',
                email : 'john@doe.com'
            },
            {
                firstName : 'james',
                email : 'james@doe.com'
            }
        ]
    }

    public findOneById () {
        return [
            {
                id : 1234,
                firstName : 'james',
                email : 'james@doe.com'
            }
        ]
    }
}