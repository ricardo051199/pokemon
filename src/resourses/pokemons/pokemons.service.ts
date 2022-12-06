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
    return this.pokemonRepository.find({ relations: { leader: true } });
  }

  findBy(search: string) {
    return this.pokemonRepository.find({
      where: [{ name: search }, { type1: search }, { type2: search }],
    });
  }

  update(id: number, updatePokemonDto: UpdatePokemonDto) {
    return this.pokemonRepository.update({ id }, updatePokemonDto);
  }

  remove(id: number) {
    return this.pokemonRepository.delete(id);
  }
  findOne(id: number) {
    return this.pokemonRepository.findOne({
      where: { id },
      relations: { leader: true },
    });
  }
}
