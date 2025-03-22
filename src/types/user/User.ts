export enum UserRole {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface UserView {
  id: string;
  username: string;
  email: string;
  role: UserRole; 
}

export interface UserCreateRequest {
  username: string;
  email: string;
  password: string;
}

export interface UserEditRequest {
  username: string;
}

export interface UserFilter {
  username?: string;
  email?: string;
  role?: string; 
}