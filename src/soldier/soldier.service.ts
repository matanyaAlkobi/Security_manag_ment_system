import { Injectable } from '@nestjs/common';
import { CreateSoldierDto } from './dto/create-soldier.dto';
import { UpdateSoldierDto } from './dto/update-soldier.dto';
import { User } from 'src/users/users.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class SoldierService {
  async create(createSoldierDto: CreateSoldierDto) {
    const { name, email, password } = createSoldierDto;
    const hashedPassword = await bcrypt.hash(password, 12);
    const user = User.create({
      name,
      email,
      password: hashedPassword,
      role: 'soldier',
    });
    return await user.save();
  }

  async findAll() {
    return await User.find({ where: { role: 'soldier' } });
  }

  async findOne(id: number) {
    return await User.findOne({ where: { id, role: 'soldier' } });
  }

  update(id: number, updateSoldierDto: UpdateSoldierDto) {
    return `This action updates a #${id} soldier`;
  }

  remove(id: number) {
    return `This action removes a #${id} soldier`;
  }
}
