type CreateUserForm = {
  id: number;
  email: string;
  fullName: string;
  role: string;
};

type UpdateUserForm = Omit<CreateUserForm, 'id' | 'role'>;