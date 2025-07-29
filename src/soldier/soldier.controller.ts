import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';

@Controller('soldier')
export class SoldierController {
  constructor(private readonly soldierService: SoldierService) {}

  @Post()
  create(@Body() createSoldierDto: CreateSoldierDto) {
    return this.soldierService.create(createSoldierDto);
  }

  @Get()
  findAll() {
    return this.soldierService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.soldierService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSoldierDto: UpdateSoldierDto) {
    return this.soldierService.update(+id, updateSoldierDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.soldierService.remove(+id);
  }
}
