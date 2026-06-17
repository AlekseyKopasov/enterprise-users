export type UserDto  = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  role: string;
};

export type User = {
  id: number;
  fullName: string;
  email: string;
  role: UserRole;
};

export type UserRole = 
| 'admin'
| 'manager'
| 'user';
