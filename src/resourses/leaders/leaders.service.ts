import { Injectable } from '@nestjs/common';
import { CreateLeaderDto } from './dto/create-leader.dto';
import { UpdateLeaderDto } from './dto/update-leader.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Leader } from './entities/leader.entity';

@Injectable()
export class LeadersService {
  constructor(
    @InjectRepository(Leader) private leaderRepository: Repository<Leader>,
  ) {}
  create(createLeaderDto: CreateLeaderDto) {
    return this.leaderRepository.save(createLeaderDto);
  }

  findAll() {
    return this.leaderRepository.find();
  }

  findBy(search: string) {
    return this.leaderRepository.find({
      where: [{ name: search }, { gender: search }, { years: +search }],
    });
  }

  update(id: number, updateLeaderDto: UpdateLeaderDto) {
    return this.leaderRepository.update({ id }, updateLeaderDto);
  }

  remove(id: number) {
    return this.leaderRepository.delete(id);
  }
}
