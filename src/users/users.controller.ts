import { Controller, Get, Post, Put, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe

 } from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-users.dto';

@Controller('users')
export class UsersController {
    @Get('{/:id}')
    public getUsers (@Param('id', ParseIntPipe) id: number | undefined, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number){
        console.log(id)
        console.log(limit)
        console.log(page)
        return 'requested for get form the users endpoint'
    }

    @Post()
        public creatUsers(@Body() createUsersDto: CreateUsersDto) {
        console.log(createUsersDto)
        return 'requested for post form the users endpoint'
}
}