import { IsEmail, IsNotEmpty, IsOptional, IsString, Matches, MaxLength, MinLength } from "class-validator";

export class CreateUsersDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(3)
    @MaxLength(20)
    firstName : string;

    @IsString()
    @MinLength(3)
    @MaxLength(20)
    @IsOptional()
    lastName : string;

    @IsEmail()
    @IsNotEmpty()
    email : string;

    @IsString()
    @IsNotEmpty()
    @MinLength(8)
    @Matches(/^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>]).+$/, {
        message:
      'Password must contain at least one uppercase letter, one number, and one special character.',
    })
    password : string;
}