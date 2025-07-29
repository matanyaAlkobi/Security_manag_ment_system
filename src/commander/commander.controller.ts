import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { CommanderService } from './commander.service';
import { CreateCommanderDto } from './dto/create-commander.dto';
import { UpdateCommanderDto } from './dto/update-commander.dto';

@Controller('commander')
export class CommanderController {
  constructor(private readonly commanderService: CommanderService) {}

  @Post()
  create(@Body() createCommanderDto: CreateCommanderDto) {
    return this.commanderService.create(createCommanderDto);
  }

  @Get()
  findAll() {
    return this.commanderService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.commanderService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCommanderDto: UpdateCommanderDto) {
    return this.commanderService.update(+id, updateCommanderDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.commanderService.remove(+id);
  }
}
