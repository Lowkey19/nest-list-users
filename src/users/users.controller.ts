import { Controller, Get } from '@nestjs/common';

import { User } from './types/user';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  public async getUsers(): Promise<User[]> {
    return this.usersService.getUsers();
  }
}
