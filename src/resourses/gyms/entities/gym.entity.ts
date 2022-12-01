import { Column, Entity, OneToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Leader } from '../../leaders/entities/leader.entity';

@Entity('gyms')
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
  @Column()
  lema: string;
  @Column()
  location: string;
  @Column()
  region: string;
  @Column()
  type: string;
  @Column()
  urlImgGym: string;
  @Column()
  urlImgMedal: string;

  @OneToOne(() => Leader, (leader) => leader.gym)
  leader: Leader;
}
