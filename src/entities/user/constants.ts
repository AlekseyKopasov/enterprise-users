import type { UserRole } from './types';

export const USER_ROLE_LABELS: Record<UserRole, string> = {
  admin: 'Администратор',
  manager: 'Менеджер',
  user: 'Пользователь',
};