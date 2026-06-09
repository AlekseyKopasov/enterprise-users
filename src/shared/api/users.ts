import { mapUser } from '../../entities/user/mapper';
import type { User, UserDto } from '../../entities/user/types';

const usersDto: UserDto[] = [
  {
    id: 1,
    first_name: "Alex",
    last_name: "Ivanov",
    email: "alex@test.com",
    role: "admin",
  },
];

export function getUsers(): User[] {
  return usersDto.map(mapUser);
}