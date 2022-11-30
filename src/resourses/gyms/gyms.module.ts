import { Module } from '@nestjs/common';
import { GymsService } from './gyms.service';
import { GymsController } from './gyms.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Gym } from './entities/gym.entity';

@Module({
  controllers: [GymsController],
  providers: [GymsService],
  imports: [TypeOrmModule.forFeature([Gym])],
})
export class GymsModule {}
