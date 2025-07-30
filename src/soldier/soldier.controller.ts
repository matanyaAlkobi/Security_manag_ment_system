import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
import { JwtAuthGuard } from '../auth/jwt/jwt.guard';
import { UseGuards } from '@nestjs/common';

@Controller('soldier')
export class SoldierController {
  constructor(private readonly soldierService: SoldierService) {}

  @Post('create')
  create(@Body() createSoldierDto: CreateSoldierDto) {
    return this.soldierService.create(createSoldierDto);
  }

  @Get()
  @UseGuards(JwtAuthGuard)
  async findAll() {
    return await this.soldierService.findAll();
  }

  @Get(':id')
  @UseGuards(JwtAuthGuard)
  async findOne(@Param('id') id: string) {
    return await this.soldierService.findOne(+id);
  }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateSoldierDto: UpdateSoldierDto) {
  //   return this.soldierService.update(+id, updateSoldierDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.soldierService.remove(+id);
  // }
}
