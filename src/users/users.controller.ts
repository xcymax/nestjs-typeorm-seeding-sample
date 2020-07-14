import { Controller, Get, Param, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './user.entity';
import CreateUserDto from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(public service: UsersService) {}

  @Get(':id')
  async findByUuid(@Param('id') id: string) {
    return this.service.findOne(id);
  }

  @Get()
  async findAll(): Promise<User[]> {
    return this.service.findAll();
  }

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    console.log(createUserDto);

    return this.service.create(createUserDto);
  }
}
