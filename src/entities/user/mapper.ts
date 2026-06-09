import type { User, UserDto } from './types'

export const mapUser = (dto: UserDto): User => {
  return {
    id: dto.id,
    fullName: `${dto.first_name} ${dto.last_name}`,
    email: dto.email,
    role: dto.role,
    }
}