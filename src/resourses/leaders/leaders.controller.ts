import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';

@Controller('leaders')
export class LeadersController {
  constructor(private readonly leadersService: LeadersService) {}

  @Post()
  create(@Body() createLeaderDto: CreateLeaderDto) {
    return this.leadersService.create(createLeaderDto);
  }

  @Get()
  findAll() {
    return this.leadersService.findAll();
  }

  @Get(':search')
  findBy(@Param('search') search: string) {
    return this.leadersService.findBy(search);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updateLeaderDto: UpdateLeaderDto) {
    await this.leadersService.update(+id, updateLeaderDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.leadersService.remove(+id);
  }
}
