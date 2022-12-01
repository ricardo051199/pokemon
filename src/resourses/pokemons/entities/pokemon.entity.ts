import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Leader } from '../../leaders/entities/leader.entity';

@Entity('pokemons')
export class Pokemon {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  type1: string;
  @Column()
  type2: string;
  @Column()
  maxCP: number;
  @Column()
  maxHP: number;
  @Column()
  urlImg: string;

  @OneToMany(() => Leader, (leader) => leader.pokemon)
  leader: Leader[];
}
