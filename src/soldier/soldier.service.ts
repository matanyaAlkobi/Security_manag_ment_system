import { Injectable } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';

@Injectable()
export class SoldierService {
  create(createSoldierDto: CreateSoldierDto) {
    return 'This action adds a new soldier';
  }

  findAll() {
    return `This action returns all soldier`;
  }

  findOne(id: number) {
    return `This action returns a #${id} soldier`;
  }

  update(id: number, updateSoldierDto: UpdateSoldierDto) {
    return `This action updates a #${id} soldier`;
  }

  remove(id: number) {
    return `This action removes a #${id} soldier`;
  }
}
