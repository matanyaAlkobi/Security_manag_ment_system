import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SoldierModule } from './soldier/soldier.module';
import { CommanderModule } from './commander/commander.module';
import { TypeOrmModule } from '@nestjs/typeorm';
// import { Soldier } from './soldier/entities/soldier.entity';
// import { Commander } from './commander/entities/commander.entity';
import { User } from './users/users.entity';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    SoldierModule,
    CommanderModule,
    AuthModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      username: 'root',
      host: 'localhost',
      port: 3306,
      database: 'security_anagement',
      entities: [User],
      synchronize: true,
    }),
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
