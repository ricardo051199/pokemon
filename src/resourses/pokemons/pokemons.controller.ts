import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { PokemonsService } from './pokemons.service';
import { CreatePokemonDto } from './dto/create-pokemon.dto';
import { UpdatePokemonDto } from './dto/update-pokemon.dto';

@Controller('pokemons')
export class PokemonsController {
  constructor(private readonly pokemonsService: PokemonsService) {}

  @Post()
  create(@Body() createPokemonDto: CreatePokemonDto) {
    return this.pokemonsService.create(createPokemonDto);
  }

  @Get()
  findAll() {
    return this.pokemonsService.findAll();
  }

  @Get(':search')
  findBy(@Param('search') search: string) {
    return this.pokemonsService.findBy(search);
  }

  @Patch(':id')
  async update(@Param('id') id: string, @Body() updatePokemonDto: UpdatePokemonDto) {
    await this.pokemonsService.update(+id, updatePokemonDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    await this.pokemonsService.remove(+id);
  }
}
