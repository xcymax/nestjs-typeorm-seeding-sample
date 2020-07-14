import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Index,
  BeforeInsert,
} from 'typeorm';
import { IsDefined, IsString, MinLength, IsEmail } from 'class-validator';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @IsDefined({ always: true })
  @IsEmail({ require_tld: true }, { always: true })
  @MinLength(3, { always: true })
  @Index({ unique: true })
  email: string;

  @Column()
  @IsDefined({ always: true })
  @IsString({ always: true })
  password: string;

  @BeforeInsert()
  async before() {
    // we would hash password etc
  }
}
