import { Seeder, Factory } from 'typeorm-seeding';
import { User } from '../../users/user.entity';

export class SeedUsers implements Seeder {
  async run(factory: Factory): Promise<any> {
    console.log('Seeding users...');
    await factory(User)().createMany(10);
  }
}
