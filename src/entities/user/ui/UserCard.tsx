import type { User } from '../types';

import { USER_ROLE_LABELS } from '../constants';

type UserCardProps = {
  user: User;
};

export function UserCard(props: UserCardProps) {
  const user = props.user;
  return (
    <ul>
      <li>{user.fullName}</li>
      <li>{user.email}</li>
      <li>{USER_ROLE_LABELS[user.role]}</li>
    </ul>
  )
}