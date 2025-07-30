import { Module } from '@nestjs/common';
import { SoldierService } from './soldier.service';
import { SoldierController } from './soldier.controller';
import { AuthModule } from '../auth/auth.module'; // ← יש

@Module({
  imports: [AuthModule], // ← הוסף שורה זו
  controllers: [SoldierController],
  providers: [SoldierService],
})
export class SoldierModule {}
