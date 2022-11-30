import { Module } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { LeadersController } from './leaders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leader } from './entities/leader.entity';

@Module({
  controllers: [LeadersController],
  providers: [LeadersService],
  imports: [TypeOrmModule.forFeature([Leader])],
})
export class LeadersModule {}
