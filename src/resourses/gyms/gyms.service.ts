import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Gym } from './entities/gym.entity';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';

@Injectable()
export class GymsService {
  constructor(@InjectRepository(Gym) private gymRepository: Repository<Gym>) {}
  create(createGymDto: CreateGymDto) {
    return this.gymRepository.save(createGymDto);
  }

  findAll() {
    return this.gymRepository.find();
  }

  findBy(search: string) {
    return this.gymRepository.find();
  }

  update(id: number, updateGymDto: UpdateGymDto) {
    return this.gymRepository.update({ id }, updateGymDto);
  }

  remove(id: number) {
    return this.gymRepository.delete(id);
  }
}
