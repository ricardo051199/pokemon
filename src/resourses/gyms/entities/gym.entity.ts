import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Gym {
  @PrimaryGeneratedColumn()
  id: number;
  @Column()
  name: string;
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
}
