import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { LeadersModule } from './resourses/leaders/leaders.module';
import { GymsModule } from './resourses/gyms/gyms.module';
import { PokemonsModule } from './resourses/pokemons/pokemons.module';

@Module({
  imports: [UsersModule, LeadersModule, GymsModule, PokemonsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
