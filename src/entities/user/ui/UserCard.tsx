import type { User } from '../types';

type UserCartProps = {
  user: User;
};

export function UserCart({ user }: UserCartProps) {
  return (
    <ul>
      <li>{user.fullName}</li>
      <li>{user.email}</li>
      <li>{user.role}</li>
    </ul>
  )
}