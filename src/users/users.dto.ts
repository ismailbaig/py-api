import { IsString, IsNotEmpty } from 'class-validator';

export class usersDTO {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}