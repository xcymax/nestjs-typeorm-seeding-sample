import Faker, { fake } from 'faker';
import { define } from 'typeorm-seeding';
import { User } from '../../users/user.entity';

define(User, (faker: typeof Faker) => {
  console.log('user.factory.ts...');
  const user = new User();
  user.name = faker.name.firstName();
  user.email = faker.internet.email();
  user.password = faker.random.word();

  return user;
});
