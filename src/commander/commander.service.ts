import { Injectable } from '@nestjs/common';
import { CreateCommanderDto } from './dto/create-commander.dto';
import { UpdateCommanderDto } from './dto/update-commander.dto';

@Injectable()
export class CommanderService {
  create(createCommanderDto: CreateCommanderDto) {
    return 'This action adds a new commander';
  }

  findAll() {
    return `This action returns all commander`;
  }

  findOne(id: number) {
    return `This action returns a #${id} commander`;
  }

  update(id: number, updateCommanderDto: UpdateCommanderDto) {
    return `This action updates a #${id} commander`;
  }

  remove(id: number) {
    return `This action removes a #${id} commander`;
  }
}
