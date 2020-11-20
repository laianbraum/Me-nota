import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('toDos')
export default class toDos {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  description: string;
}