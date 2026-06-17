import { UserCart } from '../../entities/user/ui/UserCard.tsx';
import { getUsers } from '../../shared/api/users';

export function UserPage() {
  const users = getUsers();

  return (
    <main>
      <h1>Users</h1>

      <div>
        {
          users.map(user => (
            <UserCart key={user.id} user={user} />
          ))
        }
      </div>
    </main>
  )
}