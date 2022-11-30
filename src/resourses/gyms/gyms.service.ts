import { Injectable } from '@nestjs/common';
import { CreateGymDto } from './dto/create-gym.dto';
import { UpdateGymDto } from './dto/update-gym.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Gym } from './entities/gym.entity';
import { Repository } from 'typeorm';

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
    return this.gymRepository.find({
      where: [{ name: search }, { type: search }, { location: search }],
    });
  }

  async update(id: number, updateGymDto: UpdateGymDto) {
    await this.gymRepository.update({ id }, updateGymDto);
  }

  async remove(id: number) {
    await this.gymRepository.delete(id);
  }
}
