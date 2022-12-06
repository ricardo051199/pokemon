import { Module } from '@nestjs/common';
import { LeadersService } from './leaders.service';
import { LeadersController } from './leaders.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Leader } from './entities/leader.entity';
import { Pokemon } from '../pokemons/entities/pokemon.entity';
import { PokemonsService } from '../pokemons/pokemons.service';
import { PokemonsController } from '../pokemons/pokemons.controller';

@Module({
  controllers: [LeadersController, PokemonsController],
  providers: [LeadersService, PokemonsService],
  imports: [TypeOrmModule.forFeature([Leader, Pokemon])],
})
export class LeadersModule {}
