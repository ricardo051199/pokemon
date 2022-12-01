import {
  Column,
  Entity,
  ManyToOne,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pokemon } from '../../pokemons/entities/pokemon.entity';
import { Gym } from '../../gyms/entities/gym.entity';

@Entity('leaders')
export class Leader {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  gender: string;
  @Column()
  years: number;
  @Column()
  home: string;
  @Column()
  urlImgProfile: string;

  @ManyToOne(() => Pokemon, (pokemon) => pokemon.leader)
  pokemon: Pokemon;

  @ManyToOne(() => Gym, (gym) => gym.leader)
  gym: Gym;
}
