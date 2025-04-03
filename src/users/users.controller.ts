import { Controller, Get, Post, Put, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe

 } from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-users.dto';
import GetUsersParamDto from './dtos/get-users-param.dto';

@Controller('users')
export class UsersController {
    @Get('{/:id}')
    public getUsers (@Param() getUsersParamDto: GetUsersParamDto, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number){
        console.log(getUsersParamDto)
        console.log(limit)
        console.log(page)
        return 'requested for get form the users endpoint'
    }

    @Post()
        public creatUsers(@Body() createUsersDto: CreateUsersDto) {
        console.log(createUsersDto instanceof CreateUsersDto)
        return 'requested for post form the users endpoint'
}
}