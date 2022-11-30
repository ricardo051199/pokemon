import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
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
  gym: string;
  @Column()
  urlImgProfile: string;
}
