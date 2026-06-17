import { UserCard } from '../../entities/user/ui/UserCard.tsx';
import { getUsers } from '../../shared/api/users.ts';

export function UsersPage() {
  const users = getUsers();

  return (
    <main>
      <h1>Users</h1>
      <div>
        {
          users.map(user => (
            <UserCard key={user.id} user={user} />
          ))
        }
      </div>
    </main>
  );
}