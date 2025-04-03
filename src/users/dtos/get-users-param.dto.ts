import { IsInt, IsOptional } from "class-validator";
import { Type } from "class-transformer";
export default class GetUsersParamDto{

    @IsOptional()
    @IsInt()
    @Type(()=> Number)
    id?: number;
}