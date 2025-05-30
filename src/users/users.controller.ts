import { Controller, Get, Post, Put, Param, Query, Body, Headers, Ip, ParseIntPipe, DefaultValuePipe, ValidationPipe, Patch

 } from '@nestjs/common';
import { CreateUsersDto } from './dtos/create-users.dto';
import GetUsersParamDto from './dtos/get-users-param.dto';
import { PatchUserDto } from './dtos/patch-users.dto';
import { UserService } from './providers/users.service';
@Controller('users')
export class UsersController {
    constructor(
        private readonly UserService : UserService
    ){

    }
    @Get('{/:id}')
    public getUsers (@Param() getUsersParamDto: GetUsersParamDto, @Query('limit', new DefaultValuePipe(10), ParseIntPipe) limit: number, @Query('page', new DefaultValuePipe(1), ParseIntPipe) page: number){
        
        return this.UserService.findall(getUsersParamDto, limit, page)
    }

    @Post()
        public creatUsers(@Body() createUsersDto: CreateUsersDto) {
        console.log(createUsersDto instanceof CreateUsersDto)
        return 'requested for post form the users endpoint'
}

    @Patch()
        public creatPatchUser(@Body() patchUserDto: PatchUserDto) {
            return patchUserDto
        }
}