import { Injectable } from '@nestjs/common';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Pokemon } from './entities/pokemon.entity';
import { Repository } from 'typeorm';

@Injectable()
export class PokemonsService {
  constructor(
    @InjectRepository(Pokemon) private pokemonRepository: Repository<Pokemon>,
  ) {}
  create(createPokemonDto: CreatePokemonDto) {
    return this.pokemonRepository.save(createPokemonDto);
  }

  findAll() {
    return this.pokemonRepository.find();
  }

  findBy(search: string) {
    return this.pokemonRepository.find();
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonRepository.update({ id }, updatePokemonDto);
  }

  remove(id: number) {
    return this.pokemonRepository.delete(id);
  }
}
