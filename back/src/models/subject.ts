import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('subject')
export default class Subject {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;
}