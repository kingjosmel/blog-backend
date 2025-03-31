import { Controller, Get, Post, Put, Param

 } from '@nestjs/common';

@Controller('users')
export class UsersController {
    @Get('/:id')
    public getUsers (@Param() Param: any){
        console.log(Param)
        return 'requested for get form the users endpoint'
    }

    @Post()
    public creatUsers (){
        return 'requested for post form the users endpoint'
    }
}
