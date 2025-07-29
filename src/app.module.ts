import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { SoldierModule } from './soldier/soldier.module';
import { CommanderModule } from './commander/commander.module';

@Module({
  imports: [UsersModule, SoldierModule, CommanderModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
